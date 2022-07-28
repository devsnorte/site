import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="bg-white antialiased" lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=DM+Sans:wght@400;500;700&display=swap"
        />
        <meta property="og:url" content="https://devsnorte.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Comunidade de desenvolvedores do norte do Brasil. 🖥️💻🚀"
        />
        <meta name="theme-color" content="#41b883" />
        <meta
          property="og:description"
          content="Comunidade de tecnologia que realiza encontros presenciais e online para divulgação de novas tecnologias, padrões de projetos, startups, e todo tipo de inovação no mundo de TI."
        />
        <meta property="og:image" content="/devs_norte.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
