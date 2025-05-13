import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  const getReadableName = (segment) => {

    if (segment === params.categoryId) return "Category";
    if (segment === params.id) return "Product";


    if (segment === "allproducts") return "All Products";
    if (segment === "newproducts") return "New Arrivals";
    if (segment === "brands") return "Brands";
    if (segment === "product") return "Product";
    if (segment === "category") return "Category";


    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  if (pathSegments.length === 0) return null;

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>

      {pathSegments.map((segment, index) => {

        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;

        return (
          <React.Fragment key={path}>
            <span className="separator">/</span>
            {isLast ? (
              <span className="current">{getReadableName(segment)}</span>
            ) : (
              <Link to={path}>{getReadableName(segment)}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
