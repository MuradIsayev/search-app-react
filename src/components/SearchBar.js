function SearchBar({ onSubmit }) {
    const handleClick = () => {
        onSubmit('cars');
    }
    return <div>
        <input>
            <button onClick={handleClick}> Click me
            </button>
        </input>
    </div>
}

export default SearchBar;