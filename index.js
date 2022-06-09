// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
    .then(resp => resp.json())
    .then(json => {
        const h1 = document.createElement("h1");
        h1.textContent = `ID: ${json.id}`;
        document.body.append(h1);
    })
    .catch(error => {
        const h1 = document.createElement("h1");
        h1.textContent = `ERROR: ${error.message}`;
        document.body.append(h1);
    });
}