import React from "react";
import ProjectRoutes from "./Routes.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store.js";
import { CartProvider } from "pages/Cart/CartContext.jsx";
import { WishlistProvider } from "pages/Wishlist/WishlistContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <WishlistProvider>
          <CartProvider>
            <ProjectRoutes />
          </CartProvider>
        </WishlistProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
