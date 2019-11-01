
export default {
    getSWData: () => {
        return fetch("https://swapi.co/api/people/")
            .then(response => response.json())
    }
}