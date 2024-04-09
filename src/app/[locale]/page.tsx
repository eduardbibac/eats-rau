import {useTranslations} from 'next-intl';
import DesktopNavigation from "@/components/ui/DesktopNavigation";

export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
      <DesktopNavigation></DesktopNavigation>
    </>

  );
}
