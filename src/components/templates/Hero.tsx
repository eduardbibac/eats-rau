// https://www.tailbits.com/?id=616d110599d49f4ae8c35ec1
export default function THeroBits() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-green-50 to-green-100">
        <header className="absolute inset-x-0 top-0 z-10 w-full">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="h-8 w-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/logo.svg"
                    alt=""
                  />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex items-center bg-black p-2 text-sm uppercase text-white transition-all duration-200 hover:bg-gray-800 focus:bg-gray-800 lg:hidden"
              >
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="mr-2 block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="mr-2 hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Menu
              </button>

              <div className="hidden lg:ml-10 lg:mr-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Pricing{" "}
                </a>
              </div>

              <a
                href="#"
                title=""
                className="hidden items-center justify-center border-2 border-black px-5 py-2.5 text-base font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white focus:bg-black focus:text-white lg:inline-flex"
                role="button"
              >
                {" "}
                Try for free{" "}
              </a>
            </div>
          </div>
        </header>

        <section className="overflow-hidden">
          <div className="flex flex-col lg:max-h-[900px] lg:min-h-[900px] lg:flex-row lg:items-stretch">
            <div className="flex w-full items-center justify-center lg:order-2 lg:w-7/12">
              <div className="h-full px-4 pb-16 pt-24 sm:px-6 lg:px-24 lg:pb-14 lg:pt-40 2xl:px-32">
                <div className="flex h-full flex-1 flex-col justify-between">
                  <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                      Take control <br />
                      on your daily expenses
                    </h1>
                    <p className="mt-6 text-base text-black sm:text-xl">
                      Our A.I helps you to predict your expenses based on your
                      previous activity and shares how you should manage you
                      money.
                    </p>
                    <a
                      href="#"
                      title=""
                      className="mt-9 inline-flex items-center bg-green-300 px-6 py-5 text-base font-semibold text-black transition-all duration-200 hover:bg-green-400 focus:bg-green-400"
                      role="button"
                    >
                      {" "}
                      Get started for free{" "}
                    </a>
                  </div>

                  <div className="mt-8 border-t-2 border-black sm:mt-14 lg:mt-auto">
                    <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                      <p className="text-base font-semibold text-black">
                        App available on
                      </p>

                      <div className="mt-5 flex items-center space-x-5 sm:mt-0">
                        <a
                          href="#"
                          title=""
                          className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                          role="button"
                        >
                          <img
                            className="h-14 w-auto rounded sm:h-16"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                            alt=""
                          />
                        </a>

                        <a
                          href="#"
                          title=""
                          className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                          role="button"
                        >
                          <img
                            className="h-14 w-auto rounded sm:h-16"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden lg:order-1 lg:w-5/12">
              <div className="lg:absolute lg:bottom-0 lg:left-0">
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
