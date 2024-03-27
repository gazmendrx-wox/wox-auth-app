import { useAuthStore } from "@/context/authStore"

export default function RestrictedPage(){
    const {authenticated } = useAuthStore()

    if(!authenticated) {
        return null
    }
    
    return <h1>Only for logged in users!! Hoorrayyy</h1>
}