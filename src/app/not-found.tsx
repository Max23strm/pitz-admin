import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
    return (
        <main className='flex flex-col gap-4 items-center justify-center min-h-screen'>
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Página no encontrada
            </h2>
            <p className="scroll-m-20 text-2xl tracking-tight lg:text-2xl text-center">
                No se pudo encontrar la ruta especificada
            </p>
            <Button asChild>
                <Link href="/">
                    Regresar al Inicio
                </Link>
            </Button>
        </main>
    )
}