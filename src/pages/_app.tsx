import '../styles/globals.css';

import { AppProps } from 'next/app';
import Layout from 'components/common/layout';

const App = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default App;
