import { useState } from "react"
import { PathsContext } from "./data"

export const PathsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [path, setPath] = useState('');

  const changeCurrentPath = (path: string) => {
    setPath(path);
  }

  return (
    <PathsContext.Provider value={{ path, changePath: changeCurrentPath }}>
      {children}
    </PathsContext.Provider>
  )
}