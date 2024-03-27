import { useAuthStore } from "@/context/authStore"

export default function LoginPage(){
    const {authenticated, login, logout } = useAuthStore()

    return authenticated ? <button onClick={() => logout()}>Logout</button> : <button onClick={() => login({id:1, name: 'gazmend'})}>Login</button>
}