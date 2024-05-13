export default function TPill() {
  return (
    <div className="hidden sm:flex p-0.5 space-x-0.5 items-center border border-gray-200 rounded-full dark:border-white/20">
          <a className="py-1 px-2 inline-flex items-center gap-x-3 text-white text-xs font-medium rounded-full bg-gray-800 hover:bg-gray-900 hover:text-white dark:bg-white dark:text-neutral-800" href="../index.html">
            Open Source
          </a>
          <a className="py-1 px-2 inline-flex items-center gap-x-3 text-gray-800 text-xs font-medium rounded-full hover:text-gray-600 dark:text-white dark:hover:text-neutral-200" href="../pro/index.html">
            Preline Pro
            <span className="text-xs text-green-500 relative -ms-1">
              <span className="flex absolute top-[5px] size-1.5">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-green-400 opacity-75 dark:bg-green-600"></span>
                <span className="relative inline-flex rounded-full size-1.5 bg-green-500"></span>
              </span>

              <span className="ps-2.5">Live</span>
            </span>
          </a>
        </div>
  );
}