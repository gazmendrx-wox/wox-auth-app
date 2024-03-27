import { useRouter } from "next/router"
import { useAuthStore } from "@/context/authStore"
import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const restrictedPathnames = ['/restricted']

export default function App({Component, pageProps}) {
    const router = useRouter()
    const {authenticated, login, logout } = useAuthStore()

    useEffect(() => {
        const authStorage = JSON.parse(sessionStorage.getItem('auth-storage'))
        const previousAuth = authStorage?.state?.authenticated
        if(!authenticated && !previousAuth && restrictedPathnames.includes(router.pathname)) {
            console.log('restriction failed redirecting to login!!')
            router.push('/login')
            return
        }
    }, [authenticated])
    
    return (
        <Component {...pageProps} />
    )
}