export const getPokeData = async (getNum) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getNum}`);
  if (!response.ok) {
    throw new Error("Failed!");
  }
  const data = await response.json();
  return data;
};

export const getPokeName = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed!");
  }
  const data = await response.json();
  return data;
};
