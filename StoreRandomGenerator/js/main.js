const randomBtn = document.getElementById("randomBtn");
const storeName = document.getElementById("storeName");
const storeAddress = document.getElementById("storeAddress");
let storeData;

$.getJSON('https://heechan-yang.github.io/study/store.json', (data) => {
    storeData = data;
})

randomBtn.onclick = () => {
    let storeCount = storeData.storeData.length
    let randCount = Math.floor(Math.random()*storeCount);
    storeName.innerText = storeData.storeData[randCount].storeName;
    storeAddress.innerText = storeData.storeData[randCount].storeAddress;
}