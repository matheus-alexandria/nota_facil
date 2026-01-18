import { ItemsContextProvider } from "./ItemsContext/Provider"
import { PathsContextProvider } from "./PathContext/Provider"

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PathsContextProvider>
      <ItemsContextProvider>
        {children}
      </ItemsContextProvider>
    </PathsContextProvider>
  )
}