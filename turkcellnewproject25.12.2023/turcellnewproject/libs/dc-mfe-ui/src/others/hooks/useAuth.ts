import {useEffect, useState} from 'react'


const useAuth=()=>{
    const [isAuth,setIsAuth]=useState<boolean>(false)
    const [user,setUser]=useState<any>()
    
    useEffect(()=>{
            setUser('')
        setIsAuth(false)
    },[])

    return {isAuth,user}
}
export  default  useAuth