let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let para = document.querySelector("p");
    para.innerText = fact;
})



let url = "https://catfact.ninja/fact"


async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("erroe - ", e)
        return "no fact found"
    }
}
