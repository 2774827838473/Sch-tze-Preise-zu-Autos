var RandomImage = document.getElementById("RandomImage");
var RandomName = document.getElementById("CarName");
var RandomPrice = document.getElementById("CenterText");
var RandomButton = document.getElementById("CenterButton");
var EstimateInput = document.getElementById("CenterInput");
var EstimateButton = document.getElementById("SubmitButton");
var EstimateText = document.getElementById("EstimateText");
var ShowPriceButton = document.getElementById("ShowPrice");
var EstimatePriceText = document.getElementById("PriceEstimateDifference");
var Price;
var Estimate;

let RandomImageContainer = {
    1: {
        PictureLink: "PictureCoame: Picntainer/e-tron GT quattro.jfif",
        Name: "e-tron GT quattro",
        Price: "106000,00"
    },
    2: {
        PictureLink: "PictureContainer/Rs e-tron GT.jfif",
        Name: "Rs e-tron GT",
        Price: "145500,00"
    },
    3: {
        PictureLink: "PictureContainer/Q8 e-tron.jfif",
        Name: "Q8 e-tron",
        Price: "75900,00"
    },
    4: {
        PictureLink: "PictureContainer/A4 Limousine.jfif",
        Name: "A4 Limousine",
        Price: "40450,00"
    },
    5: {
        PictureLink: "PictureContainer/A1 Sportback.jfif",
        Name: "A1 Sportback",
        Price: "22300,00"
    },
    6: {
        PictureLink: "PictureContainer/A3 Sportback TFSI e.jfif",
        Name: "A3 Sportback TFSI e",
        Price: "40340,00"
    }
}

function PickRandomObject() {
    let RandomNumber = Math.floor(Math.random() * 6 + 1);
    let RandomPictureLink = RandomImageContainer[RandomNumber].PictureLink; //replace name with valid name and add link property later
    let Name = RandomImageContainer[RandomNumber].Name;
    Price = RandomImageContainer[RandomNumber].Price;
    RandomImage.setAttribute("src", RandomPictureLink);
    RandomName.textContent = "Name: " + Name;
}

function GetEstimate() {
    Estimate = EstimateInput.value;
    EstimateText.textContent = "Deine Schätzung: " + Estimate + "€";    
}

function ShowPrice() {
    RandomPrice.textContent = "Preis: " + Price + " EUR";
}

function EstimatePriceDifference() {
    let Difference = parseFloat(Estimate) - parseFloat(Price);
    if (Difference < 0) {
        Difference = -Difference
    }
    EstimatePriceText.textContent = "Du hast dich um " + Difference + " verschhätzt.";
    console.log("Estimate: ", Estimate);
    console.log("Price: ", Price);

}

RandomButton.addEventListener("click", PickRandomObject)

EstimateButton.addEventListener("click", GetEstimate)

ShowPriceButton.addEventListener("click", ShowPrice)

ShowPriceButton.addEventListener("click", EstimatePriceDifference)