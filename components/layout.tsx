import Footer from './footer'
import Meta from './meta'
import SocialMeta from './social-meta'

type Props = {
  preview?: boolean
  title?: string
  description?: string
  path?: string
  type?: 'website' | 'article'
  children: React.ReactNode
}

const Layout = ({ children, title, description, path, type }: Props) => {
  return (
    <>
      <Meta />
      <SocialMeta
        title={title}
        description={description}
        path={path}
        type={type}
      />
      <div className="min-h-screen w-full text-ink font-body flex flex-col items-center">
        <main className="flex flex-col w-full max-w-xl md:max-w-2xl px-5 py-10 sm:py-16 md:py-24 gap-10">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
