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

  
}
