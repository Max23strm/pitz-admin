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
        cell:({row})=>{
            const name : string= row.getValue('name')
            const playerPositions : string[] = row.original.rol
            const email : string = row.original.email

            const status: string = row.original.status
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
            return (
                <div className="flex flex-col gap-2 pl-5">
                    <div className="flex flex-row gap-2">
                        <h5>{name}</h5>
                        <Badge variant={variant}>
                            {`${status}`}
                        </Badge>
                    </div>
                    <p className="text-muted-foreground">{email}</p>
                    <div className="flex flex-row gap-2">
                    {
                        playerPositions?.map( pos => {

                            const value : positions = positions[pos as PositionsKey] 
                            return <Badge key={`${pos}${name}`}>
                                {value}
                            </Badge>

                        })
                    }
                    </div>
                </div>
            )
        }
    },
    {
        id: "actions",
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