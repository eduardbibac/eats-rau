import DesktopNavigation from "@/components/ui/DesktopNavigation";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations('dashboard');
    return (
      <>
        <DesktopNavigation></DesktopNavigation>
        <h1>{t('title')}</h1>
      </>
    );
}