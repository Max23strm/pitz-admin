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
import { usePathname } from "next/navigation"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    displayHeader ?: boolean
}

export function DataTable<TData, TValue>({
    columns,
    data,
    displayHeader = true
}: DataTableProps<TData, TValue>) {

    const path = usePathname()
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

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
            <Card className="w-12/12 md:w-fit">
                <CardContent className="flex flex-row md:min-w-[500px] w-full justify-between gap-2">
                    <Input
                        placeholder="Encontrar jugador"
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value) }
                        className="max-w-12/12 md:max-w-12/12"
                    />
                    <Button variant={'secondary'} onClick={()=>table.resetColumnFilters()}>
                        <FunnelXIcon/> Limpiar filtro
                    </Button>
                </CardContent>
            </Card>
            <div className="rounded-md border ">
                <Table className="rounded-md bg-background">
                    {
                        displayHeader && 
                            <TableHeader className="rounded-md bg-card">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id} className="bg-card rounded-md">
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id} className="bg-card rounded-md text-center">
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
                    }
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} >
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
