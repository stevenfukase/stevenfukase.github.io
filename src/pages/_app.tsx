import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '~/styles/globals.scss';
import { Layout } from '@/parts/organisms';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout
    || ((page: ReactElement) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />)
};

export default App;
