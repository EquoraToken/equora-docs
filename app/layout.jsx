import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
// Required for theme styles, previously was imported under the hood
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // ... your metadata API
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 

const navbar = <Navbar logo={<b>Equora</b>} projectLink="https://github.com/EquoraToken/equora-docs" />
const footer = (
  <Footer className="flex-col items-center md:items-start">
     © {new Date().getFullYear()} EquoraToken.
  </Footer>
)
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        backgroundColor={{
          dark: 'rgb(15, 23, 42)',
          light: 'rgb(255, 255, 255)'
        }}
        color={{
          hue: { dark: 120, light: 120 },
          saturation: { dark: 100, light: 100 },
        }}
      >
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/EquoraToken/equora-docs/tree/main"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          // ...Your additional theme config options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}