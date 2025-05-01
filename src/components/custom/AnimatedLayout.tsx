"use client"
import {motion} from 'motion/react'

const AnimatedLayout = ({ children, type= 'standard' }: Readonly<{ children: React.ReactNode, type?: string }>) => {
    return (
        <motion.main
            initial={{opacity:0, y: type === 'vertical' ? 10 : 0}}
            animate={{opacity:1, y: 0}}
            transition={{duration: .3}}
        >
            {children}    
        </motion.main>
    )
}

export default AnimatedLayout