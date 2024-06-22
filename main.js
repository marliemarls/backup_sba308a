import { fetchData } from "./api.js";
import { gettingPokeImg } from "./pokeImg.js";
import { searchBtn } from "./searchBtn.js";

const data = await fetchData();
const img = await gettingPokeImg();
const search = await searchBtn()