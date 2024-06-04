export default function TPill() {
  return (
    <div className="hidden items-center space-x-0.5 rounded-full border border-gray-200 p-0.5 dark:border-white/20 sm:flex">
      <a
        className="inline-flex items-center gap-x-3 rounded-full bg-gray-800 px-2 py-1 text-xs font-medium text-white hover:bg-gray-900 hover:text-white dark:bg-white dark:text-neutral-800"
        href="../index.html"
      >
        Open Source
      </a>
      <a
        className="inline-flex items-center gap-x-3 rounded-full px-2 py-1 text-xs font-medium text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-neutral-200"
        href="../pro/index.html"
      >
        Preline Pro
        <span className="relative -ms-1 text-xs text-green-500">
          <span className="absolute top-[5px] flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75 dark:bg-green-600"></span>
            <span className="relative inline-flex size-1.5 rounded-full bg-green-500"></span>
          </span>

          <span className="ps-2.5">Live</span>
        </span>
      </a>
    </div>
  );
}
