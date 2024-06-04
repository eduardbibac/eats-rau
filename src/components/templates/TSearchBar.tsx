export default function SearchBar() {
  return (
    <div className="searchbar hidden flex-shrink flex-grow-0 justify-start px-2 sm:block">
      <div className="inline-block">
        <div className="inline-flex max-w-full items-center">
          <button
            className="relative flex w-60 flex-shrink flex-grow-0 items-center rounded-full border px-1 py-1 pl-2"
            type="button"
          >
            <div className="block flex-shrink flex-grow overflow-hidden">
              Start your search
            </div>
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full">
              <svg
                className="search-icon"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <g fill="none">
                  <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
