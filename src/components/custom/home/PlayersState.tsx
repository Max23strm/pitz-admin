import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User } from 'lucide-react'
import React from 'react'

const PlayersState = () => {
    return (
        <Card className='h-fit w-full md:w-fit min-w-[400px]'>
            <CardHeader>
                <CardTitle>
                    Estado de jugadores
                </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-5'>
                <div className='flex flex-row gap-5 items-center '>
                    <div className='bg-green-600 dark:bg-green-800 w-fit h-fit rounded-full p-1'>
                        <User className='text-primary-foreground dark:text-slate-50'/>
                    </div>
                    <p>12 Activos</p>
                </div>
                <div className='flex flex-row gap-5'>
                    <div className='bg-rose-600 dark:bg-rose-800 w-fit h-fit rounded-full p-1'>
                        <User className='text-primary-foreground dark:text-slate-50'/>                    
                    </div>
                    <p>2 Lesionados</p>
                </div>
                <div className='flex flex-row gap-5'>
                    <div className=' bg-slate-600 dark:bg-slate-800 w-fit h-fit rounded-full p-1'>
                        <User className='text-primary-foreground dark:text-slate-50'/>
                    </div>
                    <p>5 Inactivos</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default PlayersState