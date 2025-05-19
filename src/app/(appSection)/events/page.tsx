import EventCard from '@/components/custom/EventCard'
import { Calendar } from '@/components/ui/calendar'
import { Separator } from "@/components/ui/separator"
import React from 'react'

const page = () => {




    return (
        <div className="w-screen min-h-screen flex justify-center">
            <div className="flex flex-col gap-5 md:grid md:grid-cols-[70%_30%] md:gap-2 w-full px-5 pt-5 min-h-fit">
                <section className='flex flex-col gap-3 w-full align-top min-h-fit backdrop-blur-md'>
                    <div className='mt-2'>
                        <Separator/>
                        <p className='text-2xl'>Mayo</p>
                    </div>
                    <EventCard
                        event={{
                            date: new Date(2025, 4, 23, 3, 0, 0),
                            location: 'Tulum',
                            type: 'tournament',
                            name:'Torneo Tulum'
                        }}
                    />
                    <EventCard
                        event={{
                            date: new Date(2025, 4, 23, 3, 0, 0),
                            location: 'Tulum',
                            type: 'tournament',
                            name:'Torneo Tulum'
                        }}
                    />
                    <div className='mt-2'>
                        <Separator/>
                        <p className='text-2xl'>Julio</p>
                    </div>

                    <EventCard
                        event={{
                            date: new Date(2025, 6, 30, 3, 0, 0),
                            location: 'Cancun',
                            type: 'tournament',
                            name:'Cancun Sevens'
                        }}
                    />
                </section>
                <section className='backdrop-blur-md min-h-fit relative'>
                    <Calendar className='w-full h-fit sticky top-1' showOutsideDays={false}/>
                </section>
            </div>
        </div>
  )
}

export default page