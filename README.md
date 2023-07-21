# Redux-Async_Code
# E-Commerce Shopping Cart App

This is an E-Commerce Shopping Cart application built with React and Redux, allowing users to browse products, add items to the cart, and manage their shopping experience.

## Features

- View Products: Users can view a list of products available for purchase.

- Add to Cart: Users can add products to their shopping cart. The cart will keep track of the selected items, their quantities, and the total price.

- Remove from Cart: Users can remove items from the shopping cart. If the quantity of an item is reduced to zero, it will be removed from the cart.

- View Cart: Users can view the contents of their shopping cart, including the items, quantities, and total price.

- Cart Total: The app will calculate and display the total price of all items in the cart.

- Cart Button: A cart button is available to show the current number of items in the cart. Clicking the button will toggle the display of the cart's contents.

- Notification: The app will display a notification when cart data is sent or when there's an error during data sending/fetching.

## Technologies Used

- React
- Redux
- React Redux
- Redux Toolkit
- Firebase Realtime Database
- HTML
- CSS

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-shopping-cart.git
   cd e-commerce-shopping-cart

Install dependencies:
      npm install
Start the development server:
      npm start


Folder Structure
The project follows the following folder structure:

public: Contains the public files and the main HTML file.
src: Contains the source code.
components: Contains all React components.
Cart: Contains the Cart component.
Layout: Contains the Layout component.
Shop: Contains the Products component.
UI: Contains reusable UI components (e.g., Notification).
store: Contains the Redux store setup and slices (reducers) for cart and UI state.
App.js: The main application component.
index.js: The entry point of the application.


