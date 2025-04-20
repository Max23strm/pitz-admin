"use client"

import { positions, PositionsKey } from "@/interfaces/general/positions"
import { PlayerInfo } from "@/interfaces/tables/playerInfo"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<PlayerInfo>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "rol",
        header: "Rol",
        filterFn: "arrIncludes",
        cell:({row}) => {
            const playerPositions : string[] = row.getValue('rol')
            const id = row.id
            return <div className="flex flex-row gap-1">
                {
                    playerPositions?.map( pos => {

                        const value : positions = positions[pos as PositionsKey] 
                        return <Badge key={`${pos}${id}`}>
                            {value}
                        </Badge>

                    })
                }
            </div>
        }
    },
    {
        accessorKey: "status",
        header:  "Estado",
        filterFn: 'equalsString',
        cell:({row}) => {
            const status: string = row.getValue('status')
            let variant : "activePlayer" | "injuredPlayer" | "inactivePlayer" = 'activePlayer'
            switch (status) {
                case "Activo" :
                    variant = "activePlayer"
                    break
                case "Lesionado" :
                    variant = 'injuredPlayer'
                    break
                case "Inactivo" :
                    variant = 'inactivePlayer'
                    break
            }
            return <div className="flex flex-row gap-1">
                <Badge variant={variant}>
                    {`${status}`}
                </Badge>
            </div>
        }
    },
    {
        accessorKey: "action",
        header:  "",
        filterFn: 'equalsString',
        cell:(props) => {
            const playerId = props.row.original.id
            return <div className="flex flex-row gap-1">
                <Button variant={'ghost'} size={'icon'} asChild>
                    <Link href={`player/${playerId}`}>
                        <ChevronRight/>
                    </Link>
                </Button>
            </div>
        }
    },
]