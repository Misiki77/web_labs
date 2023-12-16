document.addEventListener("DOMContentLoaded", function () {
    displayCards();
});

function displayCards(cards = data) {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            
            <p>${card.name}</p>
            <p>${card.country}</p>
            <p>Price of the trip: $${card.price}</p>
            <button onclick="editCard(${card.id})">Edit</button>
            <button onclick="deleteCard(${card.id})">Delete</button>
        `;
        container.appendChild(cardElement);
    });
}

function addCard() {
    const newName = prompt("Enter name:");
    const newCountry = prompt("Enter country:");
    const newPrice = parseFloat(prompt("Enter price:"));

    if (newName  && !isNaN(newPrice)) {
        const newCard = {
            id: data.length + 1,
         
            name: newName,
            country: newCountry,
            price: newPrice,
        };

        data.push(newCard);
        displayCards();
    } else {
        alert("Invalid input. Please try again.");
    }
}

function editCard(id) {
    const card = data.find(c => c.id === id);

    if (card) {
        const newName = prompt("Enter new  name:", card.name);
        const newCountry = prompt("Enter new country:", card.country);
        const newPrice = parseFloat(prompt("Enter new price:", card.price));

        if (newName || !isNaN(newCountry) || !isNaN(newPrice)) {
            card.name = newName || card.name;
            card.country = newCountry || card.country;
            card.price = !isNaN(newPrice) ? newPrice : card.price;

            displayCards();
        } else {
            alert("Invalid input. No changes were made.");
        }
    } else {
        alert("Card not found.");
    }
}

function deleteCard(id) {
    const index = data.findIndex(c => c.id === id);

    if (index !== -1) {
        data.splice(index, 1);
        displayCards();
    } else {
        alert("Card not found.");
    }
}

function sortCards() {
    data.sort((a, b) => a.name.localeCompare(b.name));
    displayCards();
}

function searchCards(clear) {
    let searchTerm
    if (clear) {
        searchTerm = ""
        document.getElementById("searchInput").value = ""
    }else{

        searchTerm = document.getElementById("searchInput").value.toLowerCase();
    }

    const results = data.filter(card => card.name.toLowerCase().includes(searchTerm));
    displayCards(results);
}

function calculateTotal() {
    const total = data.reduce((sum, card) => sum + card.price, 0);
    alert(`Total price of all: $${total.toFixed(2)}`);
}
