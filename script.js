function toggleMenu() {
    var menuContainer = document.getElementById("menuContainer");
    var menuButton = document.querySelector(".menu-button");
    var itemBoxes = document.querySelectorAll(".item-box");

    if (menuContainer.style.left === "0px") {
        menuContainer.style.left = "-200px";
        menuButton.style.left = "10px";
        itemBoxes.forEach(function(itemBox) {
            itemBox.style.marginLeft = "0px";
        });
    } else {
        menuContainer.style.left = "0px";
        menuButton.style.left = "210px";
        itemBoxes.forEach(function(itemBox) {
            itemBox.style.marginLeft = "200px";
        });
    }
}


// Initialize an empty shopping cart array and total price
let shoppingCart = [];
let totalPrice = 0;

// Function to add an item to the shopping cart
function addToCart(itemName, itemPrice) {
    // Add the item to the shopping cart array
    shoppingCart.push({ name: itemName, price: itemPrice });

    // Update the shopping cart list in the HTML
    updateCartList();

    // Update the total price and display it
    totalPrice += itemPrice;
    updateTotalPrice();
}

// Function to update the shopping cart list in the HTML
function updateCartList() {
    const cartList = document.querySelector('.shopping-cart ul');
    cartList.innerHTML = ''; // Clear the existing list

    // Iterate through the shopping cart items and create list items
    shoppingCart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price.toFixed(2)} €`;
        cartList.appendChild(listItem);
    });
}

// Function to update the total price in the HTML
function updateTotalPrice() {
    const totalElement = document.querySelector('.shopping-cart p');
    totalElement.textContent = `Gesamt: ${totalPrice.toFixed(2)} €`;
}