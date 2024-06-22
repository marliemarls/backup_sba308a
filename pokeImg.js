import { fetchData } from "./api.js";

export async function gettingPokeImg() {
  const pokeData = await fetchData();
  const pokeDiv = document.querySelector(".pokeList");
  pokeDiv.innerHTML = "";

  const pokeArr = await Promise.all(
    pokeData.results.map(async (pokeObj) => {
      const response = await axios(pokeObj);
      return response.data;
    })
  );
  pokeArr.forEach((pokemon) => {
    const arrOfPoke = pokemon.types.flatMap((obj) => obj.type.nature);
    const pokeName = pokemon.name;
    const pokeID = pokemon.id;
    const upperCase = pokeName[0].toUpperCase() + pokemon.slice(1);

    



  })
  
}
