import 'focus-visible'
import '@/styles/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import AOS from 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])
  return <Component {...pageProps} />
}
