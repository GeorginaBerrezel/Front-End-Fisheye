export function getPhotographers() {
    return fetch('/data/photographers.json')
    .then((response) => {
        return response.json()
    }).then((data) => {
        return data
    }).catch(e => {
        console.log('error', e)
    })
}

export default getPhotographers;