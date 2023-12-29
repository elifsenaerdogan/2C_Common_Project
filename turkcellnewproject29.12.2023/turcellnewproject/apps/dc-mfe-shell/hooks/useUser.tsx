import { useSelector } from "react-redux"
import { RootState } from "../pages/_app"

export const useUser=()=>{
    const currentUser = useSelector((state:RootState)=>state.user)
    return currentUser ?? null;

}