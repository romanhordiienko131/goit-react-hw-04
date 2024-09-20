import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const searchQuery = e.target.elements.search.value;

    if (searchQuery.trim() === "") {
      toast("Search query cannot be empty");
      return;
    }

    setQuery(searchQuery);
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
