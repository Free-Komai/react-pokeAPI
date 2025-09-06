import { useEffect, useState } from "react";

export default function Main() {
  const [pokeData, setPokeData] = useState([
    {
      species: {
        url: null,
        name: null,
        genus: null,
        number: null,
      },
      image: null,
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [text, setText] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/25/");
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
        });
      } catch (err) {
        setErr(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error:{err}</p>;
  console.log(pokeData);

  function hundleClick() {
    console.log(text);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={() => hundleClick()}>
        click
      </button>
      <p>{pokeData.species.name}</p>
      <p>{pokeData.species.genus}</p>
      <p>{pokeData.species.number}</p>
      <p>{text}</p>
    </div>
  );
}
