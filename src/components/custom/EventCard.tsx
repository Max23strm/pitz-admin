import { Trophy, LandPlot } from 'lucide-react'
import React from 'react'

interface Event {
    type: 'tournament' | 'match',
    name: string,
    date: Date,
    location: string
}

const EventCard = ({ event  } : {event: Event}) => {

    const { date, location, type, name } = event

    return (
        <div>
            <div className='block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                <div className="flex gap-2 items-center">
                    {
                        type === 'tournament' ? <Trophy/> : <LandPlot/>
                    }
                    
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{name}</h5>
                </div>
                <p className='font-normal text-gray-700 dark:text-gray-400'>{date.toLocaleDateString('es-MX')} - {location}</p> 
            </div>
        </div>
    )
}

export default EventCard