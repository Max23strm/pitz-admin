import { useState } from "react"

const useTheme = ( ) => {
    const [theme, setTheme] = useState('light')

    const switchTheme = () => {
        setTheme( prev => ( prev === 'light' ? 'dark' : 'dark' ))
    }
    return { theme, switchTheme }
}

export default useTheme