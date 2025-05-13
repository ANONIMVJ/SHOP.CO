import React, { useEffect, useState } from "react";
import ReactRangeSliderInput from "react-range-slider-input";

import { ArrowRightIcon, FilterIcon } from "../../../../assets/icons";

import "react-range-slider-input/dist/style.css";
import "./FilterSide.scss";
import ColorPicker from "./ColorPicker";
import { useLocation, useNavigate } from "react-router";
import { parseQueryParams } from "../../../../utils";

const FilterSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const objParams = parseQueryParams(location.search);

  const [togglers, setTogglers] = useState({
    priceToggler: false,
    colorToggler: false,
    sizeToggler: true,
  });

  const [selectedSize, setSelectedSize] = useState(objParams.size || null);
  const clientMinPrice = objParams.minPrice ? Number(objParams.minPrice) : 0;
  const clientMaxPrice = objParams.maxPrice ? Number(objParams.maxPrice) : 500;
  const [priceRange, setPriceRange] = useState([
    clientMinPrice,
    clientMaxPrice,
  ]);

  const handleToggle = (key) => {
    setTogglers({
      ...togglers,
      [key]: !togglers[key],
    });
  };

  useEffect(() => {
    const el = document.querySelectorAll(".range-slider__thumb");

    if (!!el[0] && !!el[1]) {
      el[0].innerHTML = `<span style="font-weight: 700;position:absolute;bottom: -20px;background-color: transparent !important;">$${priceRange[0]}</span>`;
      el[1].innerHTML = `<span style="font-weight: 700;position:absolute;bottom: -20px;background-color: transparent !important;">$${priceRange[1]}</span>`;
    }
  }, [priceRange]);

  const filterByCloths = [
    { filterKey: "T-shirt", title: "T-shirts" },
    { filterKey: "Men's-shoes", title: "Shoes" },
    { filterKey: "Socks", title: "Socks" },
    { filterKey: "Women's-shoes", title: "Women's Shoes" },
    { filterKey: "Pants", title: "Jeans" },
  ];

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleCategoryClick = (categoryObj) => {
    navigate(`/category/${categoryObj.filterKey}`);
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleApplyFilter = () => {
    const queryParams = new URLSearchParams();

    for (const [key, value] of Object.entries(objParams)) {
      if (!["size", "minPrice", "maxPrice"].includes(key)) {
        queryParams.set(key, value);
      }
    }

    if (selectedSize) {
      queryParams.set("size", selectedSize);
    }

    if (priceRange[0] > 0) {
      queryParams.set("minPrice", priceRange[0]);
    }
    if (priceRange[1] < 500) {
      queryParams.set("maxPrice", priceRange[1]);
    }

    const queryString = queryParams.toString();
    navigate({
      pathname: location.pathname,
      search: queryString ? `?${queryString}` : "",
    });
  };

  return (
    <div className="filter-side-wrapper">
      <div className="filter-header">
        <h3>Filters</h3>
        <FilterIcon />
      </div>
      <div className="hr-line" />
      <div>
        {filterByCloths.map((item) => (
          <div
            key={item.filterKey}
            onClick={() => handleCategoryClick(item)}
            className="filter-item"
          >
            <span>{item.title}</span>
            <ArrowRightIcon />
          </div>
        ))}
      </div>
      <div className="hr-line" />
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggle("priceToggler")}
        >
          <p>Price</p>
          <div
            className={`arrow ${
              togglers.priceToggler ? "arrow-top" : "arrow-bottom"
            }`}
          >
            <ArrowRightIcon />
          </div>
        </div>
        <div
          className={`accordion-body ${
            togglers.priceToggler ? "open" : "hide"
          }`}
        >
          <ReactRangeSliderInput
            className="hola"
            min={5}
            max={500}
            value={priceRange}
            onInput={(range) => setPriceRange(range)}
          />
        </div>
      </div>
      <div className="hr-line" />
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggle("colorToggler")}
        >
          <p>Colors</p>
          <div
            className={`arrow ${
              togglers.colorToggler ? "arrow-top" : "arrow-bottom"
            }`}
          >
            <ArrowRightIcon />
          </div>
        </div>
        <div
          className={`accordion-body color-accordion ${
            togglers.colorToggler ? "open" : "hide"
          }`}
        >
          <ColorPicker handleResult={(res) => console.log("result", res)} />
        </div>
      </div>
      <div className="hr-line" />
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggle("sizeToggler")}
        >
          <p>Size</p>
          <div className={`arrow ${ togglers.sizeToggler ? "arrow-top" : "arrow-bottom" }`}>
            <ArrowRightIcon />
          </div>
        </div>
        <div className={`accordion-body ${togglers.sizeToggler ? "open" : "hide"}`}>
          <div className="size-options">
            {sizeOptions.map((size) => (
              <div
                key={size}
                className={`size-option ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeSelection(size)}>
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="apply-filter-btn">
        <button onClick={handleApplyFilter}>Apply Filter</button>
      </div>
    </div>
  );
};

export default FilterSidebar;
