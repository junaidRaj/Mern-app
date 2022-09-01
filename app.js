const mobiles = {

    Iphone: {
        IphoneX: {
            Name: "Iphone",
            Model: "Iphone X",
            Ram: "3 GB",
            Rom: "64 GB",
            Price: "$218",
        },
        Iphone12: {
            Name: "Iphone",
            Model: "Iphone 12",
            Ram: "4 GB",
            Rom: "128 GB",
            Price: "$799",
        },
        Iphone13: {
            Name: "Iphone",
            Model: "Iphone 13",
            Ram: "4 GB",
            Rom: "128 GB",
            Price: "$1699",
        },
    },
    Samsung: {
        Note5: {
            Name: "Samsung",
            Model: "Galaxy Note 5",
            Ram: "4 GB",
            Rom: "32 GB",
            Price: "$101",
        },
        Note8: {
            Name: "Samsung",
            Model: "Galaxy Note 8",
            Ram: "6 GB",
            Rom: "64 GB",
            Price: "$419",
        },
        S22: {
            Name: "Samsung",
            Model: "S22",
            Ram: "8 GB",
            Rom: "128 GB",
            Price: "$799",
        },
    },
}

const device = document.getElementById("device");
const model = document.getElementById("model");
const renderValues = document.getElementById("renderValues");
const brandNames = Object.keys(mobiles)

function New(){
    for (let i = 0; i < brandNames.length; i++) {
        device.innerHTML += `<option value=${brandNames[i]}>${brandNames[i]}</option>`
        
    }
}
New()

function Devices(){
    model.disabled = false
    const mobileList = Object.keys(mobiles[device.value]);
    for (let i = 0; i < mobileList.length; i++) {
        model.innerHTML += `  <option value=${mobileList[i]}>${mobileList[i]}</option>`
        
    }
    console.log(mobileList);
}


function renderVal() {
    const selectedVal = mobiles[device.value][model.value]
    console.log(selectedVal);

    renderValues.innerHTML = `        
    <h1>
         ${selectedVal.Name}   
    </h1>
    <h1>
         ${selectedVal.Model}   
    </h1>
    <h1>
         ${selectedVal.Ram}   
    </h1>
    <h1>
         ${selectedVal.Rom}   
    </h1>
    <h1>
         ${selectedVal.Price}   
    </h1>
    
    `




}