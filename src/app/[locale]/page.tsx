import LocaleSwitcher from "@/components/LocaleSwitcher";
import Navbar from "@/components/NavBar/NavBar";
import { Link } from "@/navigation";
import "@/styles/shop-page.css";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <>
      <Navbar></Navbar>
      <>
        <div className="relative bg-gradient-to-b from-orange-50 to-orange-200 2xl:h-[100vh]">
          <section className="overflow-hidden">
            <div className="flex flex-col lg:max-h-[900px] lg:min-h-[900px] lg:flex-row lg:items-stretch 2xl:ml-auto 2xl:mr-auto 2xl:w-[100vh]">
              <div className="flex w-full items-center justify-center lg:order-2 lg:w-7/12">
                <div className="h-full px-4 pb-16 pt-24 sm:px-6 lg:px-24 lg:pb-14 lg:pt-40 2xl:px-32">
                  <div className="flex h-full flex-1 flex-col justify-between">
                    <div>
                      <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                        {t("title")}
                      </h1>
                      <p className="mt-6 text-base text-black sm:text-xl">
                        {t("subtitle")}
                      </p>
                      <Link
                        href="/shop"
                        title=""
                        className="mt-9 inline-flex items-center bg-orange-400 px-6 py-5 text-base font-semibold text-black transition-all duration-200 hover:bg-orange-400 focus:bg-orange-400"
                        role="button"
                      >
                        {t("button_CTA")}
                      </Link>
                    </div>

                    <div className="mt-8 border-t-2 border-black sm:mt-14 lg:mt-auto">
                      <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                        <p className="text-base font-semibold text-black">
                          {t("responsive")}
                        </p>

                        <div className="mt-5 flex items-center space-x-5 sm:mt-0"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden lg:order-1 lg:w-5/12">
                <div className="lg:absolute lg:bottom-0 lg:left-0">
                  <img
                    // C: \Users\ed\Desktop\eats-rau\public\images\homepagepic.jpeg
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
    </>
  );
}
