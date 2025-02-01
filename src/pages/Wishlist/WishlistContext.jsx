import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        if (!wishlist.find((item) => item.id === product.id)) {
            const updatedWishlist = [...wishlist, product];
            setWishlist(updatedWishlist);
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            alert(`Product added to wishlist`);
        } else {
            alert(`Product is already in the wishlist`);
        }
    };

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter((item) => item.id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        alert("Product removed from wishlist");
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, setWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
