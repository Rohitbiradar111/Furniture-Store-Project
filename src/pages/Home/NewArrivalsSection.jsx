import React, { Suspense, useState, useEffect } from "react";
import { Button, Img, Text, Heading } from "../../components";
import CategoryColumncomfy from "../../components/CategoryColumncomfy";
import { useNavigate } from "react-router-dom";

export default function NewArrivalsSection() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const categories = ["sofa", "chair", "table", "desk"];
                let allProducts = [];

                for (let category of categories) {
                    const response = await fetch(
                        `https://furniture-api.fly.dev/v1/products?category=${category}&limit=2`
                    );
                    const data = await response.json();

                    if (data.success && data.data.length > 1) {
                        allProducts.push(data.data[1]);
                    }
                }

                setProducts(allProducts);
            } catch (err) {
                console.error("Error fetching product data:", err);
                setError("An error occurred while fetching products.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <Text size="text5xl" className="flex justify-center">Products are on the way...</Text>;
    }

    if (error) {
        return <Text size="text5xl" className="flex justify-center">{error}</Text>;
    }

    return (
        <>
            <div>
                <div className="container-xs flex flex-col items-center gap-8 md:px-5 relative">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                        <Heading as="h2" className="text-[48px] font-medium md:text-[44px] sm:text-[38px]">
                            New Arrivals
                        </Heading>
                        <Text as="p" className="text-[16px] font-normal">
                            Crafted with love specially for you
                        </Text>
                    </div>
                    <div className="flex justify-end self-stretch md:flex-col">
                        <Button
                            size="lg"
                            className="min-w-[96px] gap-2 rounded-[14px] !border px-[15px] font-medium"
                            rightIcon={
                                <Img
                                    src="images/img_user_lime_900.svg"
                                    alt="User"
                                    className="h-[12px] w-[12px] object-contain"
                                />
                            }
                            onClick={() => navigate("/allproducts")}
                        >
                            View all
                        </Button>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {products.map((product, index) => (
                                    <CategoryColumncomfy
                                        key={index}
                                        product={product}
                                    />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
