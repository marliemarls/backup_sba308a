export async function fetchData(){
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=149")
        if(response.status !== 200) throw new Error
        return response.data
    } catch (error) {
        console.error("Error" + error)
    }
}
