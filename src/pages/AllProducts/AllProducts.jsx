import React, { useEffect, useState, useContext } from "react";
import { Text, Heading } from "../../components";
import ProductCard from "../../components/ProductCard";
import { CartContext } from "../Cart/CartContext.jsx";
import { WishlistContext } from "pages/Wishlist/WishlistContext";

export default function AllProducts() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);

    const categories = [
        "sofa",
        "chair",
        "stool",
        "table",
        "desk",
        "kitchen",
        "vanitory",
        "wardrove",
        "tv table"
    ];

    const localProducts = [
        {
            id: "local1",
            name: "Luxury Sofa",
            image_path: "images/img_rectangle_4.png",
            discount_price: 1000,
            price: 1200,
            quantity: 1
        },
        {
            id: "local2",
            name: "Wooden Table",
            image_path: "images/img_rectangle_5.png",
            discount_price: 200,
            price: 250,
            quantity: 1
        },
        {
            id: "local3",
            name: "Wooden Chair",
            image_path: "images/img_rectangle_6.png",
            discount_price: 150,
            price: 200,
            quantity: 1
        },
        {
            id: "local4",
            name: "Modern Chair",
            image_path: "images/img_1.png",
            discount_price: 250,
            price: 300,
            quantity: 1
        },
        {
            id: "local5",
            name: "Elegant Chair",
            image_path: "images/img_2.png",
            discount_price: 300,
            price: 350,
            quantity: 1
        },
        {
            id: "local6",
            name: "Classic Sofa",
            image_path: "images/img_3.png",
            discount_price: 500,
            price: 600,
            quantity: 1
        },
        {
            id: "local7",
            name: "Leather Sofa",
            image_path: "images/img_4.png",
            discount_price: 800,
            price: 900,
            quantity: 1
        }
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let allProducts = [];
                for (let category of categories) {
                    const response = await fetch(
                        `https://furniture-api.fly.dev/v1/products?category=${category}&limit=10`
                    );
                    const data = await response.json();

                    if (data.success) {
                        allProducts = [...allProducts, ...data.data];
                    }
                }

                const combinedProducts = [...localProducts, ...allProducts];
                setProducts(combinedProducts);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("An error occurred while fetching products.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <Text size="text5xl" className="flex mb-40 justify-center !text-black-900">Products are on the way...</Text>;
    }

    if (error) {
        return <Text size="text5xl" className="flex mb-40 justify-center">{error}</Text>;
    }

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            name: product.name,
            image_path: product.image_path,
            price: product.price,
            discount_price: product.discount_price,
            quantity: product.quantity || 1
        });
        alert("Product added to cart");
        console.log("Added to Cart:", product.name);
    };

    const handleAddToWishlist = (product) => {
        addToWishlist({
            id: product.id,
            name: product.name,
            image_path: product.image_path,
            price: product.price,
            discount_price: product.discount_price,
            quantity: product.quantity || 1
        });
    };


    return (
        <>
            <div className="flex flex-col items-center">
                <div className="container-xs flex flex-col gap-8 md:px-5">
                    <div className="flex flex-col items-center gap-2 px-14 md:px-5">
                        <Heading as="h2" className="text-[48px] font-medium md:text-[44px] sm:text-[38px]">
                            All Products
                        </Heading>
                        <Text as="p" className="text-[16px] font-normal">
                            Crafted with love specially for you
                        </Text>
                    </div>
                    <div className="grid grid-cols-4 justify-center gap-6 md:grid-cols-2 sm:grid-cols-1">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                productImage={product.image_path}
                                productTitle={product.name}
                                productDiscountedPrice={product.discount_price || 0}
                                productOriginalPrice={product.price || 0}
                                onAddToCart={() => handleAddToCart(product)}
                                onAddToWishlist={() => handleAddToWishlist(product)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
