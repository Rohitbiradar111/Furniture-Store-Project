import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Cart/CartContext.jsx";
import { WishlistContext } from "pages/Wishlist/WishlistContext";
import { Button } from "components/index.jsx";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

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
    "tv table",
  ];

  const localProducts = [
    {
      id: "local1",
      name: "Luxury Sofa",
      image_path: "images/img_rectangle_4.png",
      discount_price: 1000,
      price: 1200,
      quantity: 1,
    },
    {
      id: "local2",
      name: "Wooden Table",
      image_path: "images/img_rectangle_5.png",
      discount_price: 200,
      price: 250,
      quantity: 1,
    },
    {
      id: "local3",
      name: "Wooden Chair",
      image_path: "images/img_rectangle_6.png",
      discount_price: 150,
      price: 200,
      quantity: 1,
    },
    {
      id: "local4",
      name: "Modern Chair",
      image_path: "images/img_1.png",
      discount_price: 250,
      price: 300,
      quantity: 1,
    },
    {
      id: "local5",
      name: "Elegant Chair",
      image_path: "images/img_2.png",
      discount_price: 300,
      price: 350,
      quantity: 1,
    },
    {
      id: "local6",
      name: "Classic Sofa",
      image_path: "images/img_3.png",
      discount_price: 500,
      price: 600,
      quantity: 1,
    },
    {
      id: "local7",
      name: "Leather Sofa",
      image_path: "images/img_4.png",
      discount_price: 800,
      price: 900,
      quantity: 1,
    },
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
        console.error(err.message);
        setError("An error occurred while fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center mb-80">
        <span className="text-9xl gap-5">.</span>
        <span className="text-9xl animate-bounce gap-5">.</span>
        <span className="text-9xl gap-5">.</span>
      </div>
    );
  }

  if (error) {
    return <h2 className="flex mb-40 justify-center">{error}</h2>;
  }

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      image_path: product.image_path,
      price: product.price,
      discount_price: product.discount_price,
      quantity: product.quantity || 1,
    });
    alert("Product added to cart");
  };

  const handleAddToWishlist = (product) => {
    addToWishlist({
      id: product.id,
      name: product.name,
      image_path: product.image_path,
      price: product.price,
      discount_price: product.discount_price,
      quantity: product.quantity || 1,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 md:px-12 mb-60">
          <div className="flex flex-col items-center gap-2 md:px-14 px-5">
            <h2 className="text-[38px] font-medium md:text-[44px]">
              All Products
            </h2>
          </div>
          <div className="grid justify-center gap-8 md:gap-6 md:grid-cols-4 px-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex shadow-2xl rounded-xl p-2 flex-col gap-2"
              >
                <div className="relative h-[270px] content-center self-stretch">
                  <img
                    src={product.image_path}
                    alt={product.name}
                    className="h-[270px] w-full flex-1 rounded-3xl object-contain"
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex-1 p-2">
                    <div className="flex flex-col items-start gap-48">
                      <Button
                        className="self-end border border-black bg-white"
                        title="Add to Cart"
                        onClick={() => handleAddToCart(product)}
                      >
                        <IoCartOutline className="h-4 w-4 scale-125 text-gray-500" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 self-stretch px-3">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-col items-start justify-center gap-0.5">
                      <p className="text-lg font-normal">{product.name}</p>
                    </div>
                    <Button
                      className="self-end border border-black bg-white"
                      title="Add to Wishlist"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <CiHeart className="scale-150" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex flex-1 flex-wrap items-center">
                      <h6 className="text-[16px] mr-1">
                        ${product.discount_price || 0}
                      </h6>
                      &nbsp;
                      <h6 className="text-[16px] line-through">
                        ${product.price || 0}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
