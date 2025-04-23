import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { IdCard } from "lucide-react"

const page = async (props : {params: {player_id: string}, searchParams:string}) => {

    const params = await props.params
    return (
        <main className='flex flex-col gap-4 min-h-screen p-5'>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 w-12/12 md:w-12/12">
                <Avatar className="w-30 h-30 md:hidden mx-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                <Card className="w-full flex flex-col gap-4 md:min-w-[300px] md:w-full h-fit my-auto">
                    <CardHeader className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-5 w-full">
                            <CardTitle className="text-xl text-center">Maximiliano Tomás Ovejak</CardTitle>
                            <div className="flex flex-row gap-3">
                                <Button size={'sm'} className="cursor-pointer w-[80%]">
                                    <IdCard />
                                    Mostrar credencial
                                </Button>
                                <Button size={'sm'} variant='outline' className="cursor-pointer w-[20%]">
                                    Editar
                                </Button>
                            </div>
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
                        <h5 className="text-primary text-1xl font-bold mb-2">Contacto</h5>
                        <div className="flex flex-col md:flex-row gap-2  md:justify-between flex-wrap">
                            <div className="flex flex-col gap-0.5 md:basis-1/3">
                                <a href="tel:9841323850" className="text-1xl font-bold">9841323850</a>
                                <p className="tracking-tight text-sm font-normal">Teléfono de jugador</p>
                            </div>
                            <div className="flex flex-col gap-0.5 md:basis-1/2">
                                <a href="tel:9841323850" className="text-1xl font-bold">9841323850</a>
                                <p className="tracking-tight text-sm font-normal">Teléfono de emergencia</p>
                            </div>
                            <div className="flex flex-col gap-0.5 md:basis-full">
                                <a href="mailto:max@max.com" className="text-1xl font-bold">max@max.com</a>
                                <p className="tracking-tight text-sm font-normal">Correo electrónico</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Avatar className="hidden md:block w-60 h-60 mx-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>MO</AvatarFallback>
                </Avatar>

            </div>
            
            <Card>
                <CardContent className="flex flex-col gap-7">
                    <h5 className="text-primary text-1xl font-bold">Información</h5>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-5 flex-wrap">
                        <div className="flex flex-col gap-0.5">
                            <p className="text-1xl font-bold">
                                23/08/1994
                            </p>
                            <p className="tracking-tight text-sm font-normal">
                                Fecha de nacimiento
                            </p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <p className="text-1xl font-bold">
                                Al día
                            </p>
                            <p className="tracking-tight text-sm font-normal">
                                Cuotas
                            </p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <p className="text-1xl font-bold">O+</p>
                            <p className="tracking-tight text-sm font-normal">Grupo sanguíneo</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-primary text-1xl font-bold mb-2">Notas y comentarios</h5>
                        <div className="flex flex-col gap-0.5">
                            <p className="tracking-tight text-sm font-normal">
                                asdasdasdasdasdasdasdasdasdasda
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}

export default page