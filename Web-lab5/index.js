import { getAllPhones, postPhone, updatePhone, deletePhon } from "./api.js";

class Phone {
    constructor(brand, model, memory_capacity, price, image) {
        this.brand = brand;
        this.model = model;
        this.memory_capacity = memory_capacity;
        this.price = price;
        this.image = image;
    }

    async deletePhon() {
        await deletePhone(this.id);
    }
}

let phonesData = [];

const fetchData = async () => {
    phonesData = await getAllPhones();
    renderPhones(phonesData);
};

fetchData();

let filteredPhones = phonesData;

function renderPhones(phones) {
    const phonelist = document.getElementById('phone-list');
    phonelist.innerHTML = '';

    phones.forEach((phone, index) => {
        const phoneItem = document.createElement('div');
        phoneItem.classList.add('phone-item');
        phoneItem.innerHTML = `
            <img src="${phone.image}" alt="${phone.brand} ${phone.model}" width="200">
            <p>Бренд: ${phone.brand}</p>
            <p>Назва: ${phone.model}</p>
            <p>Об'єм: ${phone.memory_capacity}л.</p>
            <p>Ціна: ${phone.price}₴</p>
            <button class="edit-button" data-index="${index}">Редагувати</button>
            <button class="delete-button" data-index="${index}">Видалити</button>
        `;
        phonelist.appendChild(phoneItem);

        const editButton = phoneItem.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            openEditModal(phones[index]);
        });

        const deleteButton = phoneItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            deletePhone(phones[index]);
        });
    });
}

document.getElementById('sort-by-price').addEventListener('click', () => {
    const sortedPhones = [...filteredPhones].sort((a, b) => a.price - b.price);
    renderPhones(sortedPhones);
});

document.getElementById('sort-by-brand').addEventListener('click', () => {
    const sortedPhones = [...filteredPhones].sort((a, b) => a.brand.localeCompare(b.brand));
    renderPhones(sortedPhones);
});

function calculateTotalPrice() {
    const totalAmount = filteredPhones.reduce((total, phone) => total + phone.price, 0);
    document.getElementById('total-amount').textContent = totalAmount;
}

calculateTotalPrice();

// відкриття модального вікна для додавання товару
function openCreateModal() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "block";
}

// додати слухача події для кнопки "Додати товар"
document.getElementById("open-create-modal-button").addEventListener("click", openCreateModal);

// додавання нового товару
async function createPhone() {
    const brand = document.getElementById("create-brand").value;
    const model = document.getElementById("create-model").value;
    const memory_capacity = parseFloat(document.getElementById("create-memory_capacity").value);
    const price = parseFloat(document.getElementById("create-price").value);
    const image = document.getElementById("create-image").value;

    const newPhone = new Phone(brand, model, price, memory_capacity, image);
    await postPhone(newPhone);
    phonesData.push(newPhone);

    closeModalCreate();

    renderPhones(phonesData);
    calculateTotalPrice();
}

// Додавання слухача події для кнопки "зберегти" в модальному вікні для додавання товару
document.getElementById("create-modal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    createPhone();
});

//закриття модального вікна для додавання товару
function closeModalCreate() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "none";
}

//функцію для закриття модального вікна для редагування товару
function closeModalEdit() {
    const editModal = document.getElementById("edit-modal");
    editModal.style.display = "none";
}

//додавання слухачі подій для закриття модальних вікон
document.getElementById("close-create-modal").addEventListener("click", closeModalCreate);
document.getElementById("close-edit-modal").addEventListener("click", closeModalEdit);

// відкриття модального вікна для редагування товару
function openEditModal(phone) {
    const editModal = document.getElementById("edit-modal");
    editModal.style.display = "block";

    // редагування
    document.getElementById("edit-brand").value = phone.brand;
    document.getElementById("edit-model").value = phone.model;
    document.getElementById("edit-memory_capacity").value = phone.memory_capacity;
    document.getElementById("edit-price").value = phone.price;
    document.getElementById("edit-image").value = phone.image;

    // обробник події для збереження редагованого товару
    async function saveEditedAlcohol(phone) {
        // оновлення редагування
        phone.brand = document.getElementById("edit-brand").value;
        phone.model = document.getElementById("edit-model").value;
        phone.memory_capacity = parseFloat(document.getElementById("edit-memory_capacity").value);
        phone.price = parseFloat(document.getElementById("edit-price").value);
        phone.image = document.getElementById("edit-image").value;
    
        await updatePhone(phone.id, phone);
    
        closeModalEdit();
    
        const updated = await getAllPhones();
        renderPhones(updated);
        calculateTotalPrice();
    }
    

    // обробник події для збереження редагованого то    вару
    document.getElementById("edit-modal-form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        saveEditedAlcohol(phone);
    });
}

async function deletePhone(phone) {
    await deletePhon(phone.id); 
    phonesData = phonesData.filter(item => item !== phone);

    const updated = await getAllPhones();
    renderPhones(updated);

    calculateTotalPrice();
}
