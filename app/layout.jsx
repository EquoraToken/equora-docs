import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Your Custom SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 375 375"
          preserveAspectRatio="xMidYMid meet"
        >
          <g clipPath="url(#c2acf60eae)">
            <path
              fill="#4af603"
              d="M 334.445312 90.160156 L 184.863281 23.105469 C 184.191406 22.804688 183.488281 22.65625 182.753906 22.65625 C 182.019531 22.65625 181.316406 22.804688 180.644531 23.105469 L 31.0625 90.160156 C 30.609375 90.363281 30.195312 90.628906 29.816406 90.949219 C 29.4375 91.273438 29.113281 91.644531 28.84375 92.0625 C 28.574219 92.480469 28.367188 92.925781 28.226562 93.40625 C 28.085938 93.882812 28.015625 94.371094 28.015625 94.867188 L 28.015625 270.238281 C 28.015625 270.738281 28.085938 271.222656 28.226562 271.699219 C 28.367188 272.179688 28.574219 272.625 28.84375 273.042969 C 29.113281 273.460938 29.4375 273.832031 29.816406 274.15625 C 30.195312 274.480469 30.609375 274.742188 31.0625 274.945312 L 180.644531 342 C 181.316406 342.300781 182.019531 342.453125 182.753906 342.453125 C 183.488281 342.453125 184.191406 342.300781 184.863281 342 L 334.445312 274.945312 C 334.898438 274.742188 335.316406 274.480469 335.691406 274.15625 C 336.070312 273.832031 336.394531 273.460938 336.664062 273.042969 C 336.9375 272.625 337.140625 272.179688 337.285156 271.699219 C 337.425781 271.222656 337.496094 270.738281 337.496094 270.238281 L 337.496094 94.867188 C 337.496094 94.371094 337.425781 93.882812 337.285156 93.40625 C 337.140625 92.929688 336.9375 92.480469 336.664062 92.0625 C 336.394531 91.644531 336.070312 91.273438 335.691406 90.949219 C 335.316406 90.628906 334.898438 90.363281 334.445312 90.160156 Z M 177.597656 329.332031 L 38.332031 266.898438 L 38.332031 103.183594 L 177.597656 165.617188 Z M 182.753906 156.621094 L 45.382812 95.039062 L 182.753906 33.46875 L 320.125 95.039062 Z M 327.179688 266.898438 L 187.914062 329.332031 L 187.914062 165.617188 L 327.179688 103.183594 Z M 327.179688 266.898438 "
            />
          </g>
        </svg>
        {/* Add a project name or text */}
        <span style={{ marginLeft: '0.5em', fontWeight: 700, fontSize: '1.2rem' }}>
          Equora
        </span>
      </div>
    }
    projectLink="https://github.com/EquoraToken/equora-docs"
  />
);

const footer = (
  <Footer className="flex-col items-center md:items-start">
    © {new Date().getFullYear()} EquoraToken.
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        backgroundColor={{
          dark: 'rgb(15, 23, 42)',
          light: 'rgb(255, 255, 255)',
        }}
        color={{
          hue: { dark: 120, light: 120 },
          saturation: { dark: 100, light: 100 },
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/EquoraToken/equora-docs/tree/main"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
