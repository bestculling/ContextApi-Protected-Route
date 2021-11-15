import { Link, Outlet } from "react-router-dom";
import AuthStatus from './Auth/AuthStatus'

function Layout() {
    return (
        <div>
            <AuthStatus />

            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>
            {/* Nested Route ซ้อนกัน ทำงานคล้ายๆกับ children */}
            <Outlet /> 
        </div>
    );
}

export default Layout