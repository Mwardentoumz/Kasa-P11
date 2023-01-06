

function getLocs() {
    fetch('/locations.json')
        .then((res) => res.json())
        .then((data) => {return data})
}

export default getLocs