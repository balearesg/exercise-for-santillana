import * as React from 'react';

export const HomeContext = React.createContext({} as any);
export const HomeUseContext = () => React.useContext(HomeContext);
