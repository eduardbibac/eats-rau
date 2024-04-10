import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales, pathnames } from '@/navigation';
 
export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
  pathnames
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ro|en)/:path*']
};