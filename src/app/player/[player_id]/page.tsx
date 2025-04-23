import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { IdCard } from "lucide-react"

const page = async (props : {params: {player_id: string}, searchParams:string}) => {

    const params = await props.params
    return (
        <main className='flex flex-col gap-4 min-h-screen p-5'>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 w-12/12 md:w-8/12">
                <Avatar className="w-30 h-30 md:hidden mx-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                <Card className="w-full flex flex-col gap-4 md:min-w-[300px] md:w-full h-fit my-auto">
                    <CardHeader className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-5 w-full">
                            <CardTitle className="text-xl text-center">Maximiliano Tomás Ovejak</CardTitle>
                            <Button size={'sm'} className="cursor-pointer">
                                <IdCard />
                                Mostrar credencial
                            </Button>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center w-full">
                            <Badge variant={'secondary'}>Centro</Badge>
                            <Badge variant={'secondary'}>Medio scrum</Badge>
                            <Badge variant={'secondary'}>Apertura</Badge>
                            <Separator orientation="vertical" />
                            <Badge variant={'activePlayer'}>Activo</Badge>
                        </div>
                    </CardHeader>
                    <Separator />
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
                <Avatar className="hidden md:block w-60 h-60 mx-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>MO</AvatarFallback>
                </Avatar>

            </div>
            {params.player_id}
        </main>
    )
}

export default page