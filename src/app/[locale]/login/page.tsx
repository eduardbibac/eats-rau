// https://play.tailwindcss.com/MIwj5Sp9pw
import Login from "@/app/[locale]/login/Login";
import LoginDividerSection from "@/app/[locale]/login/LoginDividerSection";
import QRLoginSection from "@/app/[locale]/login/QRLoginSection";
import { useTranslations } from "next-intl";

export default function LoginUsersPage() {
  const t = useTranslations("Login");
  return (
    <Login>
      <LoginDividerSection text={t("or quick session with QR")} />
      <QRLoginSection />
    </Login>
  );
}
