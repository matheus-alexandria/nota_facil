import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemForm from './components/ItemForm';
import PrintPage from './components/PrintPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemForm />} />
        <Route path="/print" element={<PrintPage />} />
      </Routes>
    </Router>
  );
}
