import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
// import { Schedule } from '@/components/Schedule'
// import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { ToastContainer } from 'react-toastify'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Home() {
  return (
    <>
      <Head>
        <title>DevsNorte - A maior comunidade do norte do Brasil</title>
        <meta
          name="description"
          content="Comunidade de desenvolvedores do norte do Brasil. 🖥️💻🚀"
        />
      </Head>
      <Header />
      <main>
        <ToastContainer />
        <Hero />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pt', ['common'])),
  },
})

export default Home
