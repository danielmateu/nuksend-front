import '@/styles/globals.css'
import AppState from 'context/app/appState'
import AuthState from 'context/auth/authState'


export default function App({ Component, pageProps }) {
  return (
    <AuthState>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  )
}
