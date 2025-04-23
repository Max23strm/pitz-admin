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
import { Card, CardContent } from "../ui/card"

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
        <div className="flex flex-col gap-5  px-2">
            <Card>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 w-full justify-between py-2 gap-2">
                    <Input
                        placeholder="Encontrar jugador"
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value) }
                        className="max-w-12/12 md:max-w-6/12"
                    /> 
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_36px] gap-2 w-12/12 md:w-fit justify-self-end" >
                        <Select
                            value={(table.getColumn("rol")?.getFilterValue() as string) ?? ""}
                            onValueChange={(value : string | null) =>(table.getColumn("rol")?.setFilterValue(value))}
                        >
                            <SelectTrigger className="w-[100%] md:w-[180px]">
                                <SelectValue placeholder="Rol" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    Object.keys(positions).map( (pos, key) => (
                                        <SelectItem key={`${key} - ${pos}`} value={pos}>{positions[pos as PositionsKey]}</SelectItem>
                                    ) )
                                }
                                <Button 
                                    className="w-full px-2"
                                    variant="outline"
                                    size="sm"
                                    onClick={()=>table.getColumn("status")?.setFilterValue(null)}
                                >
                                    Limpiar
                                </Button>

                            </SelectContent>
                        </Select>


                        <Select
                            value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
                            onValueChange={(value : string) =>{
                                const newValue = parseInt(value)
                                const valueAsIndex  = playerStatus[newValue]
                                return table.getColumn("status")?.setFilterValue(playerStatus[valueAsIndex as unknown as number])
                            }}
                        >
                            <SelectTrigger className="w-[100%] md:w-[180px]">
                                <SelectValue placeholder="Estado" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={playerStatus[0]}>{playerStatus[0]}</SelectItem>
                                <SelectItem value={playerStatus[1]}>{playerStatus[1]}</SelectItem>
                                <SelectItem value={playerStatus[2]}>{playerStatus[2]}</SelectItem>
                                <Button 
                                    className="w-full px-2"
                                    variant="outline"
                                    size="sm"
                                    onClick={()=>table.getColumn("status")?.setFilterValue(null)}
                                >
                                    Limpiar
                                </Button>
                            </SelectContent>
                        </Select>
                        <Button size={'icon'} className="hidden md:inline-flex" variant={'secondary'} onClick={()=>table.resetColumnFilters()}>
                            <FunnelXIcon/>
                        </Button>
                        <Button className="md:hidden" variant={'secondary'} onClick={()=>table.resetColumnFilters()}>
                            <FunnelXIcon/> Limpiar filtros
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <div className="rounded-md border ">
                <Table className="rounded-md bg-background">
                    <TableHeader className="rounded-md">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="bg-card rounded-md">
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="bg-card rounded-md">
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
