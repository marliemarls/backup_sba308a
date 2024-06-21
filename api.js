export async function fetchData(){
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=149")
        if(response.data !== 200) throw new Error
        else response.data
    } catch (error) {
        console.error("Error" + error)
    }
}