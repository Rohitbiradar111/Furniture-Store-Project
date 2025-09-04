import { useState, useEffect } from "react";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

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
      <div>
        <div className="flex flex-col items-center gap-8 md:px-12 px-8 relative border-t pt-5">
          <div className="flex flex-col items-center justify-center gap-1.5">
            <h2 className="font-medium md:text-[44px] text-[38px]">
              New Arrivals
            </h2>
          </div>
          <div className="flex md:flex-col">
            <Button
              className="min-w-[96px] gap-2 rounded-[14px] px-[15px] font-medium border border-black hover:bg-gray-100"
              rightIcon={<HiArrowTopRightOnSquare />}
              onClick={() => navigate("/allproducts")}
            >
              View all
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="grid gap-6 md:grid-cols-4 grid-cols-1">
              {products.map((product, index) => (
                <div key={index} className="flex flex-col w-full gap-3">
                  <div className="relative h-[270px] content-center self-stretch">
                    <img
                      src={product?.image_path || "Product Image"}
                      alt={product?.name || "Product Name"}
                      className="h-[270px] w-full flex-1 rounded-[16px] object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 self-stretch px-3">
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex flex-col items-start justify-center gap-4">
                        <p className="text-[16px] self-center font-normal">
                          {product?.name || "Product Name"}
                        </p>
                        <p className="text-[14px] text-center font-normal">
                          {product?.description?.slice(0, 100) ||
                            "No description available."}
                          ...
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center text-center self-center">
                      <div className="flex flex-1 self-center flex-wrap items-center">
                        <h6 className="text-[16px] font-semibold mr-2">
                          $
                          {product?.discount_price ||
                            product?.price ||
                            "Product Discount Price"}
                        </h6>
                        {product?.price > 0 && (
                          <p className="text-[14px] font-normal line-through">
                            ${product?.price || "Product Price"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
