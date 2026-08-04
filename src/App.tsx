import { Route, Routes, useLocation } from 'react-router-dom'; import { useEffect } from 'react'; import { Footer } from './components/layout/Footer'; import { Navbar } from './components/layout/Navbar'; import { Home } from './pages/Home'; import { NotFound } from './pages/NotFound';
function ScrollTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [pathname]); return null; }
export default function App() { return <><ScrollTop/><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></>; }
