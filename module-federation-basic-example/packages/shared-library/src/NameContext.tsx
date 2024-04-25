import React from "react";

const NameContext = React.createContext<string | null>(null);

type NameProviderProps = React.PropsWithChildren<{ name: string }>;

const NameProvider: React.FC<NameProviderProps> = ({ name, children }) => {
  return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
};

export { NameContext, NameProvider };
