import { getUserSessions } from "@/actions/(auth_required)/getUserSessions"
import NavBar from "@/components/NavBar/NavBar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Trash2 } from "lucide-react"
import { invalidateUserSession } from "@/actions/invalidateUserSession"
import { Button } from "@/components/ui/button"
import { logout } from "@/auth/logout"

export default async function Settings() {
  const sessions = await getUserSessions();

  return (
    <>
    <NavBar></NavBar>
    <div className="mb-4 mt-10 flex justify-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Settings</div>
    <div className="mt-12 container max-w-[900px] flex flex-col gap-5">

    <form action={logout} className="mt-12 w-full ml-auto font-medium" >
      <Button className="w-full" type="submit">Sing out</Button>
    </form>

      <div className="mb-4 mt-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Recent Sessions</div>
      {sessions.map((s,i) => (
          <Card key={i}>
          <CardHeader>
          {s.device}
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">{s.id.slice(0,7)}</p>
                <p className="text-sm text-muted-foreground">
                  {/* TODO: */}
                  {/* last used 12/04/2024 at 15PM */}
                </p>
              </div>
              <form action={invalidateUserSession} className="ml-auto font-medium" >
                <button name='id' value={s.id} type="submit"><Trash2></Trash2></button>
              </form>
            </div>
          </CardContent>
        </Card>
      ))}

    </div>
    
    </>

  )
}
