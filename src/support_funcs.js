export function search(searchFields) {
    //input is an object of search fields, obtained from checkbox selections (eg: {gunControl: 100, proLife: 0})
    console.log(searchFields);
    // searchFields = {gunControl: 100, proLife: 0};
    let searchString = '';
    for (let field in searchFields) {
        searchString += `${field}=${searchFields[field] * 50}&`;//x50 because the slider is only 0,1,2 and the schema is 0,50,100
    }
    return fetch(`http://localhost:8080/senators/standsFor?${searchString}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.senators.map(lawmaker => lawmaker.name));
}