const Search = (props) => {
    return (
        <>
        <h2>Search</h2>
        <span>
        <label htmlFor="search">Filter shown with </label>
        <input id="search" onChange={props.handleSearch}></input>
      </span>
        </>
    )
}

export default Search;