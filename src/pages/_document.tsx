import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt" style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500&amp;display=swap" rel="stylesheet" />
        <meta
          name='description'
          content='Valtercio Ivulo Portfolio'
        />

        <meta name="Meu portfolio pessoal." content="Web site created using next" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
