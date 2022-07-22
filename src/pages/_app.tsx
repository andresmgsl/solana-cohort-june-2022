import '../styles/globals.css';

import { AppProps } from 'next/app';
import Layout from 'components/common/layout';
import { ContextProvider } from 'components/common/context/ContextProvider';

const App = ({ Component, pageProps }: AppProps) => (
    <ContextProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ContextProvider>
);

export default App;
