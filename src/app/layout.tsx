import '@/styles/globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pt">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="WIVULO DEV | Personal Portifolio" />
          <meta name="author" content="Wivulo Dev" />
          <meta name="keywords" content="WIVULO, DEV, PORTIFOLIO" />
          <meta name="robots" content="index, follow" />
          <title>WIVULO DEV | Personal Portifolio</title>
        </head>
        <body>{children}</body>
      </html>
    )
  }