import { createContext } from 'react';

interface IContextParameters {
  clientWidth: number;
}

const Context = createContext<IContextParameters>({ clientWidth: 0 });

export { Context };
