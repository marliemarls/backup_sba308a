import { fetchData } from "./api.js";

export async function searchBtn() {
  const data = await fetchData();
  const pokeDiv = document.querySelector(".pokeList");

  const pokeArr = await Promise.all(
    data.results.map(async (pokeObj) => {
      const response = await axios(pokeObj);
      return response.data;
    })
  );

  pokeArr.forEach(async (pokemon) => {
    const arrOfPokeTypes = pokemon.types.flatMap((obj) => obj.type.name);
    const arrOfPokeNames = pokemon.name;

    const btn = document.querySelector(".searchBtn");
    btn.addEventListener("click", (event) => {
      let inputInfo = document.querySelector(".searchBar").value;
      let pokeCards = document.querySelector(`#${inputInfo}`);

      if (pokeCards && event) {
        pokeDiv.innerHTML = "";
        pokeDiv.append(pokeCards);
        inputInfo = "";
        console.log(inputInfo)
      }
      console.log(inputInfo);
    });
  });
}
