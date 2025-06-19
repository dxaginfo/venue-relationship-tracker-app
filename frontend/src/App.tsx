import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import VenueList from './pages/venues/VenueList';
import VenueDetail from './pages/venues/VenueDetail';
import ContactsList from './pages/contacts/ContactsList';
import PerformancesList from './pages/performances/PerformancesList';
import Analytics from './pages/analytics/Analytics';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/NotFound';
import { useAppSelector } from './hooks/redux';

const App: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
      <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
      
      <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<Dashboard />} />
        <Route path="venues" element={<VenueList />} />
        <Route path="venues/:id" element={<VenueDetail />} />
        <Route path="contacts" element={<ContactsList />} />
        <Route path="performances" element={<PerformancesList />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
