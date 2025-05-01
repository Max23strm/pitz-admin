"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

import { X, Check, Download } from 'lucide-react'
import { credentialTables } from "@/interfaces/tables/credentialTables"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<credentialTables>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "isUpdated",
        header: "Actualizado",
        cell:(props) => {
            const updated = props.getValue()
            return <div className="flex flex-row gap-1 justify-center">
                {
                    updated ?
                        <Check/> : 
                        <X/> 
                }
            </div>
        }
    },
    {
        accessorKey: "link",
        header:  "",
        cell:() => {
            // const playerId = props.getValue()
            return <div className="flex flex-row gap-1">
                <Button variant={'ghost'} size={'icon'} className="mx-auto cursor-pointer">
                    <Download/>
                </Button>
            </div>
        }
    },
]