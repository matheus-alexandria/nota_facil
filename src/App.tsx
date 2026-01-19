import { useContext } from 'react';
import ItemForm from './components/ItemForm';
import { PathsContext } from './contexts/PathContext/data';
import PrintPage from './components/PrintPage';

export default function App() {
  const pathsContext = useContext(PathsContext);
  let currentPage = <ItemForm />;
  
  switch(pathsContext.path) {
    case '/summary': {
      currentPage = <PrintPage />
      break;
    }
    default: {
      currentPage = <ItemForm />
      break;
    }
  }

  return (
    <>
      {currentPage}
    </>
  );
}
