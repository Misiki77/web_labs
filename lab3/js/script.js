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
            
        `;
        container.appendChild(cardElement);
    });
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
