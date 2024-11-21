const axios = require('axios');

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    if (country.trim() === "") {
        console.log("Please enter a valid country name.");
        return;
    }
    let colArr = await getCollege(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (let col of colArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("Error: -", e);
        return [];
    }
}