import Image from "next/image";
import {useTranslations} from 'next-intl';
import LangSwitcher from "@/components/ui/LangSwitcher";
import Link from "next/link";
import DesktopNavigation from "@/components/ui/DesktopNavigation";


export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
      <DesktopNavigation></DesktopNavigation>
    </>

  );
}
