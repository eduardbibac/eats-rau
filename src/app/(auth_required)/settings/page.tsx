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

export default async function Settings() {
  const sessions = await getUserSessions();

  return (
    <>
    <NavBar></NavBar>

    <div className="mt-12 container max-w-[900px] flex flex-col gap-5">

      <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Recent Sessions</div>

      {sessions.map((s,i) => (
          <Card key={i}>
          <CardHeader>
          Windows PC
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">{s.id.slice(0,7)}</p>
                <p className="text-sm text-muted-foreground">
                  {/* TODO: */}
                  last used 12/04/2024 at 15PM
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
