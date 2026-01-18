import { createContext } from "react";

interface PathsContext {
  path: string;
  changePath: (path: string) => void;
}

export const PathsContext = createContext<PathsContext>({
  path: '',
  changePath: () => 0
});
