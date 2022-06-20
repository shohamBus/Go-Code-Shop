import { AppBar, Button, Slider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
// import { MuiThemeProvider } from "material-ui";
import "./Header.css";
// import Drawer from "../drawer/";
import Cart from "../carts/Cart";
const Header = ({
  filterCategory,
  optionCategory,
  selectedCategory,
  rangeOfPrice,
  min,
  max,
}) => {
  const [value, setValue] = useState([0, 1000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    rangeOfPrice(value);
  };

  return (
    <Box className="header-class">
      <AppBar position="static">
        <Toolbar>
          <h1>Go Code Shop</h1>
          <Typography
            className="collection-sort"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <div>
              <label>
                Filter by:
                <br />
              </label>
              <select
                className="drop-down"
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
          </Typography>
          <Typography
            className="collection-sort"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <div>
              <label>Sort by:</label>
              <Slider
                sx={{ color: "white" }}
                getAriaLabel={() => "Price range"}
                value={value}
                onChange={handleChange}
                min={min - 1}
                max={max + 1}
              />
            </div>
          </Typography>
          <Button className="collection-sort" color="inherit">
            {" "}
            <Cart />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
