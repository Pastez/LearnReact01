const featchJsonData = (url: string) => fetch(url, {
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

export default featchJsonData;