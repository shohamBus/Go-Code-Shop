import "./Header.css";
const Header = ({ filterCategory, optionCategory, selectedCategory }) => {
  // console.log(filterCategory);
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
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
