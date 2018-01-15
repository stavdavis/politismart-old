export function search(name) {
    return fetch(`https://swapi.co/api/people/?search=${name}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.results.map(lawmaker => lawmaker.name));
}