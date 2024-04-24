export default async function fetchDataFunction() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        if(!response.ok) {
            throw new Error ('Server Error')
        }
        let data = await response.json();
        return data    
    } catch (error) {
        console.log(error)
    }
}