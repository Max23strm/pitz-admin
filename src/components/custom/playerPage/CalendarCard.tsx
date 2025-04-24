"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"

import React from 'react'
import { Button } from "@/components/ui/button"

const CalendarCard = () => {
    
    const handleClick= (dateFormart :string) => {
        console.log(new Date(dateFormart))
    }

    const markedDays ={ 
    
        tarde:[
            new Date(2025, 5, 17),
        ],
        falta:[
            new Date(2025, 5, 22),
        ],
        asistido:[
            new Date(2025, 5, 25),
        ]
    }

    return (
        <Card className="w-full md:w-6/12">
            <CardHeader>
                <CardTitle className="text-primary text-1xl font-bold">
                    Asistencia mensual
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-col lg:flex-row justify-between gap-4">
                <div className="flex flex-col gap-2 w-full md:w-fit" onClick={()=>handleClick("2025-05-25")}>
                    <Button variant={'ghost'} className="w-full flex flex-row gap-3 justify-between bg-muted rounded p-2 cursor-pointer">
                        <h5>Jueves 25/05/2025</h5>
                        <Badge variant={'default'}>
                            Presente
                        </Badge>
                    </Button>
                    <Button variant={'ghost'} className="w-full flex flex-row gap-3 justify-between bg-muted rounded p-2 cursor-pointer" onClick={()=>handleClick("2025-05-22")}>
                        <h5>Martes 22/05/2025</h5>
                        <Badge variant={'secondary'}>
                            Ausente
                        </Badge>
                    </Button>
                    <Button variant={'ghost'} className="w-full flex flex-row gap-3 justify-between bg-muted rounded p-2 cursor-pointer" onClick={()=>handleClick("2025-05-17")}>
                        <h5>Jueves 17/05/2025</h5>
                        <Badge variant={'inactivePlayer'}>
                            Tarde
                        </Badge>
                    </Button>
                </div>
                <Calendar
                    defaultMonth={new Date()}
                    modifiers={{
                        asistido: markedDays.asistido,
                        tarde: markedDays.tarde,
                        falta: markedDays.falta,
                    }}
                    modifiersClassNames={{
                        asistido: "asistido-class",
                        tarde: "asistido-class",
                        falta: "asistido-class",
                    }}
                    className="rounded-md border"
                />
            </CardContent>
        </Card>
    )
}

export default CalendarCard