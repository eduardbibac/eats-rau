const IS_SERVER = typeof window === "undefined";
export default function getURL(path: string) {
  const baseURL = IS_SERVER
    ? process.env.NEXT_PUBLIC_APP_URL!
    : window.location.origin;
  return `${baseURL}${path}`;
}