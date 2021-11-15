import {
    Routes,
    Route
} from "react-router-dom";
import AuthProvider from './components/Auth/AuthProvider'
import Layout from './components/Layout'
import PublicPage from './routes/PublicPage'
import LoginPage from './routes/LoginPage'
import ProtectedPage from './routes/ProtectedPage'
import RequireAuth from './components/Auth/RequireAuth'

function App() {
    return (
        <AuthProvider>
            <h1>Auth Example</h1>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<PublicPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/protected"
                        element={
                            <RequireAuth>
                                <ProtectedPage />
                            </RequireAuth>
                        }
                    />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
