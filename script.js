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
function addToCart(itemName, itemPrice, quantityInputId) {
    // Get the quantity input element associated with the item
    const quantityInput = document.getElementById(quantityInputId);

    // Get the quantity value from the input
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        // Check if the item is already in the cart
        const existingItemIndex = shoppingCart.findIndex(item => item.name === itemName);

        if (existingItemIndex !== -1) {
            // If the item exists in the cart, update its quantity
            shoppingCart[existingItemIndex].quantity += quantity;
        } else {
            // If the item is not in the cart, add it
            shoppingCart.push({ name: itemName, price: itemPrice, quantity: quantity });
        }

        // Update the shopping cart list in the HTML
        updateCartList();

        // Update the total price and display it
        totalPrice += itemPrice * quantity;
        updateTotalPrice();
    }
}

// Function to update the shopping cart list in the HTML
function updateCartList() {
    const cartList = document.querySelector('.shopping-cart ul');
    cartList.innerHTML = ''; // Clear the existing list

    // Iterate through the shopping cart items and create list items
    shoppingCart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Price: ${item.price.toFixed(2)} € - Quantity: ${item.quantity}`;
        cartList.appendChild(listItem);
    });
}

// Function to update the total price in the HTML
function updateTotalPrice() {
    const totalElement = document.querySelector('.shopping-cart p');
    totalElement.textContent = `Gesamt: ${totalPrice.toFixed(2)} €`;
}

// Function to clear the shopping cart
function clearCart() {
    shoppingCart = []; // Empty the shopping cart array
    totalPrice = 0; // Reset the total price to zero
    updateCartList(); // Update the shopping cart list in the HTML
    updateTotalPrice(); // Update the total price in the HTML
}

// Function to simulate the checkout process (you can replace this with your actual checkout logic)
function checkout() {
    if (shoppingCart.length > 0) {
        alert('Checkout Successful!'); // Replace with your checkout logic
        clearCart(); // Clear the cart after checkout
    } else {
        alert('The shopping cart is empty.'); // Display a message if the cart is empty
    }
}
