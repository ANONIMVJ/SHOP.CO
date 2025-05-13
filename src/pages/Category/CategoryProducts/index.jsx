import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ProductCard } from "../../../components";
import { useProducts } from "../../../hooks/useProducts";
import { parseQueryParams } from "../../../utils";
import "./CategoryProducts.scss";

function CategoryProducts() {
  const location = useLocation();
  const { categoryId } = useParams();
  const queryParams = parseQueryParams(location.search);

  const params = {
    ...queryParams,
    category: categoryId || queryParams.category,
  };

  const { data: products, isLoading } = useProducts(params);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);

 if (isLoading) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
}

  return (
    <div className="CategoryProducts">
      {products && products.length > 0 ? (
        <div className="item-cards">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="product-link"
            >
              <ProductCard
                product={product}
                image={product.images?.[0]}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-products">No products found</div>
      )}
    </div>
  );
}

export default CategoryProducts;
