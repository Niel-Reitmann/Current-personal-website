import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen w-full bg-canvas text-ink font-body flex flex-col items-center">
        <main className="flex flex-col w-full max-w-xl md:max-w-2xl px-5 py-10 sm:py-16 md:py-24 gap-10">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
