import EmailLoginSection from "@/app/[locale]/login/EmailLoginSection";
import Login from "@/app/[locale]/login/Login";
import LoginDividerSection from "@/app/[locale]/login/LoginDividerSection";

export default function LoginUsersPage() {
  return (
    <Login>
      <LoginDividerSection text="or Username and Password " />
      <EmailLoginSection />
    </Login>
  );
}
