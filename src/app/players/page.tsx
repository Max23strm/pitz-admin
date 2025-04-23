import React from 'react'

import { DataTable } from '@/components/custom/DataTable'
import { columns } from './table/columns.'
import { PlayerInfo } from '@/interfaces/tables/playerInfo'
import { playerStatus } from '@/interfaces/general/playerStatus'

const tableData : PlayerInfo[] = [
    {
        id: '500',
        name: 'Maximiliano Ovejak',
        rol: ['medio_scrum', 'apertura','centro'],
        status:  playerStatus[0], 
        email: 'maximiliano.ovejak@gmail.com'
    },
    {
        id: '300',
        name: 'Ariel',
        rol: ['pilar', 'hooker'],
        status:  playerStatus[2], 
        email: 'ariel.ariel@gmail.com'
    },
    {
        id: '200',
        name: 'Nahuel coso',
        rol: ['apertura', 'centro'],
        status:  playerStatus[1], 
        email: 'nahuel.nahuel@gmail.com'
    },
]

const page = () => {
    return (
        <main className='flex flex-col gap-2 items-center  min-h-screen'>
            <section className='container'>
                <DataTable columns={columns} data={tableData}/>
            </section>
        </main>
    )
}

export default page