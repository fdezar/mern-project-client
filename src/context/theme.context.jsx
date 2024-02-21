import { createContext } from "react";

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {
 
    return (
      {/* SET UP THE PROVIDER */}
      <ThemeContext.Provider value={""}>
          {props.children}
      </ThemeContext.Provider>
    );
  }

export { ThemeContext, ThemeProviderWrapper };
