function Search(props) {
  return (
    <div id="search-bar">
      <form>
        <label>Find Beers With ABV Above:</label>
        <input
          type="number"
          step="0.1"
          min="3.0"
          max="13.0"
          placeholder="Enter Desired ABV"
          name="searchValue"
          value={props.searchValue}
          onChange={props.searchHandler}
        />
      </form>
    </div>
  );
}

export default Search;
