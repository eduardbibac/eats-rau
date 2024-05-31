// https://play.tailwindcss.com/MIwj5Sp9pw
import Login from "@/components/login/Login";
import LoginDividerSection from "@/components/login/LoginDividerSection";
import QRLoginSection from "@/components/login/QRLoginSection";

export default function LoginUsersPage() {
    return(
        <Login>
            <LoginDividerSection text="or quick session with QR"/>
            <QRLoginSection/>
        </Login>
    );
}