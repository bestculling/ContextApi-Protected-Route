import {
    useNavigate,
    useLocation,
} from "react-router-dom";

import { useAuth } from '../components/Auth/AuthProvider'

function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    //Optional chaining   
    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // event.currentTarget - <form> tag
        let formData = new FormData(event.currentTarget);
        // get form input artibute name
        let username = formData.get("username") as string;

        auth.signin(username, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>{" "}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage