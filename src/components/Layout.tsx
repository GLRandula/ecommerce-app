'use client';

import { persistor, store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './Loader';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
      {children}
      </PersistGate>
    </Provider>
  )
}

export default Layout