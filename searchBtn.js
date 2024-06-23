import { fetchData } from "./api.js";

//this is the search engine functionality file. able to grab one pokemon but not able to grab others.

export async function searchBtn() {
  const data = await fetchData();
  const pokeDiv = document.querySelector(".pokeList");

  const pokeArr = await Promise.all(
    data.results.map(async (pokeObj) => {
      const response = await axios(pokeObj);
      return response.data;
    })
  );

      const btn = document.querySelector(".searchBtn");
    btn.addEventListener("click", (event) => {
      event.preventDefault()
      let inputInfo = document.querySelector(".searchBar").value;
      let pokeCards = document.querySelector("#" + inputInfo);
      if(pokeCards) {
      pokeDiv.innerHTML = "";
      pokeDiv.append(pokeCards);
      }
      else{
        console.log("Invalid input!")
      }
    });

}
