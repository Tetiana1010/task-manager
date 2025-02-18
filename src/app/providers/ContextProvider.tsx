"use client"

import React from 'react'
import { GlobalProvider } from '@/app/context/GlobalProvider'

interface Props {
  children: React.ReactNode
};

const ContextProvider = ({ children }: Props) => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 200);
  }, []);

  if(!isReady){
    return null;
  };

  return (
    <GlobalProvider>
      { children }
    </GlobalProvider>
  );
};

export default ContextProvider;



