import '../styles/globals.css';

import { AppProps } from 'next/app';
import Layout from 'components/common/layout';
import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';

const App = ({ Component, pageProps }: AppProps) => (
    <UserProvider supabaseClient={supabaseClient}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </UserProvider>
);

export default App;
