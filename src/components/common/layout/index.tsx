import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex grow flex-col gap-16 px-4 sm:px-8 md:gap-32 md:px-16 lg:px-32 xl:px-48">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
