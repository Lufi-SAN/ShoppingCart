export default async function fetchDataFunction() {
        let response = await fetch('https://fakestoreapi.com/products');
        if(!response.ok) {
                throw {
                        error: "Couldn't fetch"
                }
        }    
        let data = await response.json()
        return data
}