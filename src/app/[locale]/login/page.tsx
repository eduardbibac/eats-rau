// https://play.tailwindcss.com/MIwj5Sp9pw
import Login from "@/app/[locale]/login/Login";
import LoginDividerSection from "@/app/[locale]/login/LoginDividerSection";
import QRLoginSection from "@/app/[locale]/login/QRLoginSection";

export default function LoginUsersPage() {
    return(
        <Login>
            <LoginDividerSection text="or quick session with QR"/>
            <QRLoginSection/>
        </Login>
    );
}