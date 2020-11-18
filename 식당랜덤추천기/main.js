const randomBtn = document.getElementById("randomBtn");
const storeName = document.getElementById("storeName");
const storeAddress = document.getElementById("storeAddress");
const storeAddBtn = document.getElementById("storeAddBtn");

let storeData;

const requestURL = "https://heechan-yang.github.io/study/store.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = () => {
    storeData = request.response;
    console.log(storeData);
}



randomBtn.onclick = () => {
    let randomCount = storeData.storeData.length;
    let randomNumber = Math.floor(Math.random() * randomCount);

    storeName.innerText = storeData.storeData[randomNumber].storeName;
    storeAddress.innerText = storeData.storeData[randomNumber].storeAddress;

    console.log(request.response);
}

storeAddBtn.onclick = () => {
    let storeNameValue = document.getElementById("storeNameInput").value;
    let storeAddressValue = document.getElementById("storeAddressInput").value;

    let test = JSON.stringify(storeData.storeData);

    storeData.storeData = [
        {
            "id": storeData.storeData.length,
            "storeName": storeNameValue,
            "storeAddressValue": storeAddressValue
        }
    ]

    console.log(test)
}


let dataCommit = () => {
    fetch(requestURL, {
        method: 'POST',
        body: JSON.stringify(storeData),
        headers:[{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
        }],
        body:{
        }
    })
}