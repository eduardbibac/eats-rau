// https://demos.creative-tim.com/notus-design-system-pro/admin/components/headers.html
export default function THeaderStatCards() {
  return (
    <>
      <div className="w-full">
        <div className="bg-blueGray-500 relative pb-32 pt-32">
          <div className="mx-auto w-full px-4 md:px-6">
            <div>
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                  <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-lg xl:mb-0">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                          <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                            Traffic
                          </h5>
                          <span className="text-xl font-bold">350,897</span>
                        </div>
                        <div className="relative w-auto flex-initial pl-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 p-3 text-center text-white shadow-lg">
                            <i className="far fa-chart-bar"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-blueGray-500 mt-4 text-sm">
                        <span className="mr-2 text-emerald-500">
                          <i className="fas fa-arrow-up"></i> 3.48%
                        </span>
                        <span className="whitespace-nowrap">
                          Since last month
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                  <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-lg xl:mb-0">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                          <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                            NEW USERS
                          </h5>
                          <span className="text-xl font-bold">2,356</span>
                        </div>
                        <div className="relative w-auto flex-initial pl-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 p-3 text-center text-white shadow-lg">
                            <i className="fas fa-chart-pie"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-blueGray-500 mt-4 text-sm">
                        <span className="mr-2 text-red-500">
                          <i className="fas fa-arrow-down"></i> 3.48%
                        </span>
                        <span className="whitespace-nowrap">
                          Since last week
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                  <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-lg xl:mb-0">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                          <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                            SALES
                          </h5>
                          <span className="text-xl font-bold">924</span>
                        </div>
                        <div className="relative w-auto flex-initial pl-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 p-3 text-center text-white shadow-lg">
                            <i className="fas fa-users"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-blueGray-500 mt-4 text-sm">
                        <span className="mr-2 text-orange-500">
                          <i className="fas fa-arrow-down"></i> 1.10%
                        </span>
                        <span className="whitespace-nowrap">
                          Since yesterday
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                  <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-lg xl:mb-0">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                          <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                            PERFORMANCE
                          </h5>
                          <span className="text-xl font-bold">49,65%</span>
                        </div>
                        <div className="relative w-auto flex-initial pl-4">
                          <div className="bg-lightBlue-500 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg">
                            <i className="fas fa-percent"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-blueGray-500 mt-4 text-sm">
                        <span className="mr-2 text-emerald-500">
                          <i className="fas fa-arrow-up"></i> 12%
                        </span>
                        <span className="whitespace-nowrap">
                          Since last month
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
