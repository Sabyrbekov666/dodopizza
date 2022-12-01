import { LoginPage } from './login'
import { RegisterPage } from './register'
import { useLocation } from 'react-router-dom'

export const AuthRootComponenets = () => {
	const location = useLocation()

	return location.pathname === '/register' ? (
		<RegisterPage />
	) : location.pathname === '/login' ? (
		<LoginPage />
	) : null
}
