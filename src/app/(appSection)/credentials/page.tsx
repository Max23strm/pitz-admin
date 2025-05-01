import { DataTable } from '@/components/custom/DataTable'
import React from 'react'
import { columns } from './table/columns.'

const page = () => {
    return (
        <main className="flex flex-col gap-4 min-h-screen p-5 align-center">
            <DataTable 
                columns={columns} 
                data={[
                    {
                        name:'Maximiliano Ovejak',
                        isUpdated: true,
                        link:''
                    }
                ]}
            />
        </main>
    )
}

export default page