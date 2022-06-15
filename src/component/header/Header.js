import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./Header.css";
const Header = ({
  filterCategory,
  optionCategory,
  selectedCategory,
  rangeOfPrice,
  minAndMaxPrice,
  min,
  max,
}) => {
  const [value, setValue] = useState([0, 1000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    rangeOfPrice(value);
  };
  return (
    <div>
      <nav className="product-filter">
        <h1>Go Code Shop</h1>
        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select
              onChange={(e) => {
                optionCategory = e.target.value;
                selectedCategory(optionCategory);
              }}
            >
              {filterCategory.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
              ;
            </select>
          </div>
          <div className="collection-sort">
            <label>Sort by:</label>
            <Box sx={{ width: 250 }}>
              <Slider
                getAriaLabel={() => "Price range"}
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
            </Box>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
