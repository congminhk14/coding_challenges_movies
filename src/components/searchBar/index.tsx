import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid';
import './searchBar.scss';

const SearchBar = ({ search, setSearch }: { search: string, setSearch: (value: string) => void }) => {
  const handleClear = () => {
    setSearch('');
  };

  return (
    <div className="searchbar">
      <MagnifyingGlassIcon className='searchbarIcon' strokeWidth={3} />
      <input
        value={search}
        type="text"
        placeholder='Search movies name...'
        className='searchbarInput'
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <XMarkIcon className='seachbarClear' strokeWidth={3} onClick={handleClear} />
      )}
    </div>
  );
};

export default SearchBar;
