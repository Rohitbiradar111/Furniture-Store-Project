import React, { useState, useEffect, useRef } from "react";
import { Button, Slider } from "../../components";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ShopBySection() {
  const [sliderState, setSliderState] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ["sofa", "chair", "table", "desk", "wardrobe"];
        let allProducts = [];

        for (let category of categories) {
          const response = await fetch(
            `https://furniture-api.fly.dev/v1/products?category=${category}&limit=2`
          );
          const data = await response.json();

          if (data.success) {
            allProducts = [...allProducts, ...data.data];
          }
        }

        setProducts(allProducts);
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
      <div className="flex justify-center">
        <span className="text-9xl gap-5">.</span>
        <span className="text-9xl animate-bounce gap-5">.</span>
        <span className="text-9xl gap-5">.</span>
      </div>
    );
  }

  if (error) {
    return <h2 className="flex justify-center">{error}</h2>;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container flex flex-col items-center gap-8 md:px-5">
          <div className="flex flex-col items-center justify-center gap-0.5">
            <h2 className="text-[38px] font-medium md:text-[44px]">
              Categories
            </h2>
          </div>
          <div className="flex justify-center md:flex-col">
            <Button
              className="min-w-[96px] gap-2 border border-black rounded-[14px] px-[15px] font-medium hover:bg-gray-100"
              rightIcon={<HiArrowTopRightOnSquare />}
              onClick={() => navigate("/allproducts")}
            >
              View all
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2 self-stretch">
            <div className="self-stretch">
              <div className="mx-auto flex w-full gap-5 md:mx-0 md:flex-col">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    551: { items: 1 },
                    1051: { items: 4 },
                  }}
                  disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={products.map((product) => (
                    <React.Fragment key={product.id}>
                      <div className="px-3">
                        <div className="flex flex-col items-center justify-center gap-3.5">
                          <img
                            src={product.image_path || "Product Image"}
                            alt={product.name}
                            className="h-[270px] w-full rounded-[16px] object-cover md:h-auto"
                            loading="lazy"
                            draggable="false"
                          />
                          <h3 className="text-[18px] text-center">
                            {product.name}
                          </h3>
                          <h6 className="text-[18px] font-semibold">
                            Price : ${product.discount_price}
                            <span className="ml-2 text-[16px] font-normal line-through">
                              ${product.price}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                className="w-[48px] rounded-[24px] border border-gray-500 px-3.5"
              >
                <FaAngleLeft className="scale-150" />
              </Button>
              <Button
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                className="w-[48px] rounded-[24px] border border-gray-500 px-3.5"
              >
                <FaAngleRight className="scale-150" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
