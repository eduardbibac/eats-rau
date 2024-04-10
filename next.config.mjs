// @ts-check
import withSerwistInit from "@serwist/next";

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

const withSerwist = withSerwistInit({
  cacheOnFrontEndNav: false,
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withNextIntl(withSerwist(nextConfig));
