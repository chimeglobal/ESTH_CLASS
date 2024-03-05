# ecommerce site 
## Overview
This is a simple e-commerce system built using JavaScript. The system allows users to browse a list of available products, add items to their shopping cart, and view the total price of their selected items.

## Features
* Display a list of available products with their IDs, names, and prices.
* Add products to the shopping cart with a specified quantity.
View the contents of the shopping cart and the total price of selected items.

## Usage
* Users can add products to the cart by entering the product ID and the desired quantity.
* To view the cart and complete the purchase, the user can enter "checkout" as their preference.
* The system will display the items in the cart and the total price.
## Code Structure
* `ecommerceProduct:` An array containing information about various products, including ID, name, quantity, and price.
cart: An array to store items added to the shopping cart.
* `displayProducts():` Function to display the available products to the user.
* `addToCart(itemID, quantity):` Function to add selected products to the shopping cart.
* `displayCart():` Function to display the items in the cart and calculate the total price.
* `startShopping():` Main function to initiate the shopping process by displaying products and handling user input.
