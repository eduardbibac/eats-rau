import EmailLoginSection from "@/components/login/EmailLoginSection";
import Login from "@/components/login/Login";
import LoginDividerSection from "@/components/login/LoginDividerSection";

export default function LoginUsersPage() {
    return(
        <Login>
            <LoginDividerSection text="or Username and Password "/>
            <EmailLoginSection/>
        </Login>
    );
}