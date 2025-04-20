"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getFilteredRowModel,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react"
import { Input } from "../ui/input"
import { playerStatus } from "@/interfaces/general/playerStatus"
import { positions, PositionsKey } from "@/interfaces/general/positions"
import { Button } from "../ui/button"
import { FunnelXIcon } from 'lucide-react'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
      )

    const table = useReactTable({
        data,
        columns,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        state:{
            columnFilters,
        }
    })
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between py-2">
                <Input
                    placeholder="Encontrar jugador"
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                /> 
                <div className="flex flex-row gap-2" >
                    <Select
                        value={(table.getColumn("rol")?.getFilterValue() as string) ?? ""}
                        onValueChange={(value : string) =>(table.getColumn("rol")?.setFilterValue(value))}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Rol" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                Object.keys(positions).map( pos => (
                                    <SelectItem value={pos}>{positions[pos as PositionsKey]}</SelectItem>
                                ) )
                            }
                        </SelectContent>
                    </Select>


                    <Select
                        value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
                        onValueChange={(value : string) =>{
                            const valueAsIndex  = playerStatus[value as any]
                            return table.getColumn("status")?.setFilterValue(playerStatus[valueAsIndex as unknown as number])
                        }}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Estado" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={playerStatus[0]}>{playerStatus[0]}</SelectItem>
                            <SelectItem value={playerStatus[1]}>{playerStatus[1]}</SelectItem>
                            <SelectItem value={playerStatus[2]}>{playerStatus[2]}</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button size={'icon'} variant={'secondary'} onClick={()=>table.resetColumnFilters()}>
                        <FunnelXIcon/>
                    </Button>
                </div>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                            )}
                                    </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                    ))}
                                </TableRow>
                            ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
