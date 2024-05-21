import { getUserSessions } from "@/actions/(auth_required)/getUserSessions";
import Navbar from "@/components/NavBar/NavBar";

export default async function Settings() {
    const data = await getUserSessions();
    return(
      <>
      <Navbar/>
        <h1>{data}
        </h1>
      </>
    );
}