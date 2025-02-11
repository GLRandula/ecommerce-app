'use client';

import { persistor, store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './Loader';
import { SessionProvider } from 'next-auth/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
      {children}
      </PersistGate>
    </Provider>
    </SessionProvider>
  )
}

export default Layout