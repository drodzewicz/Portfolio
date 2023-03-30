import React, { createContext, useState } from "react";

interface IMenuContextState {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const INITIAL_STATE = { open: true, setOpen: () => {} };

export const MenuContext = createContext<IMenuContextState>(INITIAL_STATE);

export const MenuProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
