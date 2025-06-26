import React from "react";
import { useProduct } from "@/api/hooks/useProduct";
import { useParams } from "react-router-dom";

const DetailPages = () => {
  const { id } = useParams(); // agar URL dan ID olinayotgan bo‘lsa
  const { getProduct } = useProduct();
  const { data, isLoading, error } = getProduct({ id });


  const product = data?.data; // API dan keladigan ma'lumot
  console.log("Product Data:", product);
  

  if (isLoading) return <div className="p-10">Loading...</div>;
  if (error || !product) return <div className="p-10 text-red-500">Error loading product</div>;

  const productInfo = [
    { label: "Brand", value: product.brand },
    { label: "Category", value: product.category },
    { label: "Price", value: `$${product.price}` },
    { label: "Stock", value: product.stock },
    { label: "Rating", value: `${product.rating} ⭐` },
    { label: "SKU", value: product.sku },
    { label: "Availability", value: product.availabilityStatus },
    { label: "Warranty", value: product.warrantyInformation },
    { label: "Shipping", value: product.shippingInformation },
    { label: "Return Policy", value: product.returnPolicy },
  ];

  const dimensions = product.dimensions || {};
  const meta = product.meta || {};

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Product Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className="w-full max-w-sm rounded border"
          />
        </div>

        {/* Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <p className="text-gray-700">{product.description}</p>

          <div className="text-sm space-y-1 pt-4 border-t">
            {productInfo.map((item, idx) => (
              <p key={idx}>
                <strong>{item.label}:</strong> {item.value || "N/A"}
              </p>
            ))}

            {/* Dimensions */}
            {dimensions.width && (
              <p>
                <strong>Dimensions:</strong> {dimensions.width} × {dimensions.height} × {dimensions.depth} cm
              </p>
            )}

            {/* Tags */}
            {product.tags?.length > 0 && (
              <p>
                <strong>Tags:</strong> {product.tags.join(", ")}
              </p>
            )}

            {/* Barcode & QR */}
            {meta.barcode && (
              <p>
                <strong>Barcode:</strong> {meta.barcode}
              </p>
            )}
            {meta.qrCode && (
              <div className="pt-2">
                <img src={meta.qrCode} alt="QR Code" className="w-24 border rounded" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPages;
