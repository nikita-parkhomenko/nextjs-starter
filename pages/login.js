
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    const onLogin = event => {
        event.preventDefault();

        router.push('/user');
    }
    return (
        <>
            <input placeholder="User Name" />
            <input placeholder="Password" type="password" />
            <button
                type="button"
                onClick={onLogin}
            >
                Log In
            </button>
        </>
    )
}
