export default function THVCard() {
  return (
    <>
      <div className="mx-auto flex w-1/2 select-none flex-col gap-5 rounded-2xl bg-white p-2 shadow-lg sm:h-64 sm:flex-row sm:p-4">
        <div className="h-52 animate-pulse rounded-xl bg-gray-200 sm:h-full sm:w-72"></div>
        <div className="flex flex-1 flex-col gap-5 sm:p-2">
          <div className="flex flex-1 flex-col gap-3">
            <div className="h-14 w-full animate-pulse rounded-2xl bg-gray-200"></div>
            <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200"></div>
            <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200"></div>
            <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200"></div>
            <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200"></div>
          </div>
          <div className="mt-auto flex gap-3">
            <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200"></div>
            <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200"></div>
            <div className="ml-auto h-8 w-20 animate-pulse rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Vertical */}
      <div className="mx-auto w-96 rounded rounded-2xl bg-white shadow-lg">
        <div className="h-48 animate-pulse overflow-hidden bg-gray-200 p-3"></div>
        <div className="h- p-3">
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div className="h-8 animate-pulse rounded bg-gray-200"></div>
            <div className="h-8 animate-pulse rounded bg-gray-200"></div>
            <div className="h-8 animate-pulse rounded bg-gray-200"></div>
            <div className="col-span-2 h-8 animate-pulse rounded bg-gray-200"></div>
            <div className="h-8 animate-pulse rounded bg-gray-200"></div>
            <div className="..."></div>
            <div className="... col-span-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
