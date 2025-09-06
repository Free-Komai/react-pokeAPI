import { useEffect, useState } from "react";

export default function Main() {
  const [pokeData, setPokeData] = useState({
    species: {
      url: null,
      name: null,
      genus: null,
      number: null,
    },
    image: null,
  });
  const [err, setErr] = useState(null);
  const [num, setNum] = useState(null);

  const [bingoNum, setBingoNum] = useState([]);
  const [stockNum, setStockNum] = useState([]);

  console.log(stockNum);

  useEffect(() => {
    const arr = Array.from({ length: 75 }, (_, i) => i + 1);
    setBingoNum(arr);
  }, []);

  const fetchData = async () => {
    const bingoLen = bingoNum.length;
    if (bingoLen === 0) return;
    const randomNum = Math.floor(Math.random() * bingoLen);
    const getNum = bingoNum[randomNum];
    console.log(randomNum);
    setNum(getNum);
    console.log(getNum);
    setStockNum([...stockNum, getNum].sort((a, b) => a - b));
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${getNum}`
      );
      if (!response.ok) {
        throw new Error("Failed!");
      }
      const data = await response.json();
      console.log(data);
      const pokeName = await fetchName(data.species.url);
      console.log(pokeName);
      setPokeData({
        ...pokeData,
        species: {
          name: pokeName.names[0].name,
          genus: pokeName.genera[0].genus,
          number: pokeName.pokedex_numbers[0].entry_number,
        },
        image: data.sprites.other["official-artwork"].front_default,
      });
      console.log(getNum);
      const newArr = bingoNum.filter((item) => item !== Number(getNum));
      setBingoNum(newArr);
    } catch (err) {
      setErr(err.message);
    }
  };

  const fetchName = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed!");
      }
      const data = await response.json();
      //   console.log(data);
      return data;
    } catch (err) {
      setErr(err.message);
    }
  };

  if (err) return <p>Error:{err}</p>;
  //   console.log(pokeData);

  return (
    <div>
      <input
        type="number"
        min="1"
        max="75"
        onChange={(e) => e.target.value <= 75 && setNum(e.target.value)}
      />
      <button type="button" onClick={() => fetchData()}>
        click
      </button>
      {num !== null && <p>図鑑番号：{num}</p>}
      {pokeData.species.name !== null && (
        <div>
          <img src={pokeData.image} alt="image" />
          <p>名前：{pokeData.species.name}</p>
          <p>{pokeData.species.genus}</p>
          <div className="flex gap-5 flex-wrap m-auto p-3">
            {stockNum.map((data, num) => (
              <p
                key={num}
                className=" items-center p-3 text-white font-bold bg-red-600 border-4 border-black text-2xl w-15 text-center rounded-full"
              >
                {data}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
