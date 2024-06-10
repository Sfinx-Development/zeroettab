import { useMediaQuery, useTheme } from "@mui/material";
import React, { createContext, useContext, ReactNode, Context } from "react";

interface ScreenSizeContextType {
  isMobile: boolean;
}

const ScreenSizeContext: Context<ScreenSizeContextType | undefined> =
  createContext<ScreenSizeContextType | undefined>(undefined);

interface ScreenSizeProviderProps {
  children: ReactNode;
}

export const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(821));

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = (): ScreenSizeContextType => {
  const context = useContext(ScreenSizeContext);
  if (context === undefined) {
    throw new Error("useScreenSize must be used within a ScreenSizeProvider");
  }
  return context;
};
