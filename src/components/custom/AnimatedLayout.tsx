"use client"
import {motion} from 'motion/react'

const AnimatedLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <motion.main
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration: .3}}
        >
            {children}    
        </motion.main>
    )
}

export default AnimatedLayout