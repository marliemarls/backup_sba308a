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
    const arrOfPoke = pokemon.types.flatMap((obj) => obj.type.name);
    const pokeName = pokemon.name;
    const pokeID = pokemon.id;
    const upperCase = pokeName[0].toUpperCase() + pokeName.slice(1);

    const newPokeList = document.createElement("p");
    const pokeInfo = document.createElement("p");
    const pokeImg = document.createElement("img");

    pokeImg.src = pokemon.sprites.front_default;
    newPokeList.classList.add(...arrOfPoke);
    pokeInfo.innerHTML = upperCase;
    newPokeList.append(pokeImg, pokeInfo);
    pokeDiv.appendChild(newPokeList);
  });
}
