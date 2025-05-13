import React from "react";
import FilterSidebar from "./CategoryDetails/FIlterSidebar";

import "./CategoryDetails.scss";
import { Breadcrumb } from "../../components";
import CategoryProducts from "./CategoryProducts";

const CategoryDetails = () => {
  return (
    <div className="container">
      <hr />
      <Breadcrumb />
      <div className="category-main">
        <FilterSidebar />
        <CategoryProducts />
      </div>
    </div>
  );
};

export default CategoryDetails;
