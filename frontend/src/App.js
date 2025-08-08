
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { SocketProvider } from './context/SocketContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AlumniDirectory from './pages/AlumniDirectory';
import Profile from './pages/Profile';
import Groups from './pages/Groups';
import GroupChat from './pages/GroupChat';
import AdminDashboard from './pages/AdminDashboard';
import Feedback from './pages/Feedback';
import AboutDeveloper from './pages/AboutDeveloper';
import Preloader from './components/layout/Preloader';
import { NotificationProvider } from './context/NotificationContext';
import NotificationsPage from './pages/NotificationsPage';
import PostPage from './pages/PostPage';
import ResetPassword from './pages/ResetPassword';
import { Analytics } from "@vercel/analytics/react"
function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // This logic ensures the preloader is only shown once per session
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setShowPreloader(false);
    } else {
      const timer = setTimeout(() => {
        setShowPreloader(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 3500); // Preloader will show for 3.5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  // Conditionally render the preloader
  if (showPreloader) {
    return <Preloader />;
  }

  return (
    <AuthProvider>
      <SocketProvider>
        <NotificationProvider>
          <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div className="flex flex-col min-h-screen bg-background">
              <Navbar />
              <MainContent />
              <Footer />
            </div>
          </Router>

        </NotificationProvider>
      </SocketProvider>
      <Toaster position="bottom-right" toastOptions={{
        className: 'bg-on-surface text-white rounded-lg shadow-lg',
        duration: 4000,
      }} />
      <Analytics />
    </AuthProvider>
  );
}

// This component remains unchanged
const MainContent = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <main className={`flex-grow ${isLandingPage ? '' : 'container mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<AboutDeveloper />} />
        <Route path="/directory" element={<PrivateRoute><AlumniDirectory /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/feedback" element={<PrivateRoute><Feedback /></PrivateRoute>} />
        <Route path="/groups" element={<PrivateRoute><Groups /></PrivateRoute>} />
        <Route path="/groups/:id" element={<PrivateRoute><GroupChat /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute adminOnly={true}><AdminDashboard /></PrivateRoute>} />
        <Route path="/notifications" element={<PrivateRoute><NotificationsPage /></PrivateRoute>} />
        <Route path="/posts/:id" element={<PrivateRoute><PostPage /></PrivateRoute>} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </main>
  )
}

// In your index.js or App.js
if (process.env.NODE_ENV === 'development') {
  // Suppress specific console warnings
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('Vercel Web Analytics')) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

export default App;









// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AuthProvider } from './context/AuthContext';
// import { SocketProvider, useSocket } from './context/SocketContext';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import PrivateRoute from './components/PrivateRoute';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import AlumniDirectory from './pages/AlumniDirectory';
// import Profile from './pages/Profile';
// import Groups from './pages/Groups';
// import GroupChat from './pages/GroupChat';
// import AdminDashboard from './pages/AdminDashboard';
// import Feedback from './pages/Feedback';
// import AboutDeveloper from './pages/AboutDeveloper';
// import Preloader from './components/layout/Preloader';
// import { NotificationProvider } from './context/NotificationContext';
// import NotificationsPage from './pages/NotificationsPage';
// import PostPage from './pages/PostPage';
// import ResetPassword from './pages/ResetPassword';
// import { Analytics } from "@vercel/analytics/react";

// function AppWrapper() {
//   return (
//     <AuthProvider>
//       <SocketProvider>
//         <NotificationProvider>
//           <App />
//         </NotificationProvider>
//       </SocketProvider>
//     </AuthProvider>
//   );
// }

// function App() {
//   const [showPreloader, setShowPreloader] = useState(true);
//   const [globalVisitorStats, setGlobalVisitorStats] = useState({
//     totalVisitors: 0,
//     pageViews: 0,
//     activeUsers: 0
//   });

//   const socket = useSocket();

//   // Fetch initial stats when app loads
//   useEffect(() => {
//     const recordVisit = async () => {
//       try {
//         const res = await fetch('/api/stats/visit', {
//           method: 'POST',
//           credentials: 'include'
//         });
//         const data = await res.json();
//         if (data && data.success) {
//           // Stats will also come through socket, but we can set here initially
//         }
//       } catch (err) {
//         console.error('Error recording visit: ', err);
//       }
//     };

//     recordVisit();
//   }, []);

//   // Listen for live stats updates from socket
//   useEffect(() => {
//     if (!socket) return;

//     const handleStatsUpdate = (stats) => {
//       setGlobalVisitorStats(stats);
//     };

//     socket.on('stats_update', handleStatsUpdate);

//     return () => {
//       socket.off('stats_update', handleStatsUpdate);
//     };
//   }, [socket]);

//   // Preloader logic
//   useEffect(() => {
//     const hasLoaded = sessionStorage.getItem('hasLoaded');
//     if (hasLoaded) {
//       setShowPreloader(false);
//     } else {
//       const timer = setTimeout(() => {
//         setShowPreloader(false);
//         sessionStorage.setItem('hasLoaded', 'true');
//       }, 3500);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   if (showPreloader) return <Preloader />;

//   return (
//     <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
//       <div className="flex flex-col min-h-screen bg-background">
//         <Navbar />
//         <MainContent />
//         <Footer visitorStats={globalVisitorStats} />
//       </div>
//       <Toaster position="bottom-right" toastOptions={{
//         className: 'bg-on-surface text-white rounded-lg shadow-lg',
//         duration: 4000,
//       }} />
//       <Analytics />
//     </Router>
//   );
// }

// const MainContent = () => {
//   const location = useLocation();
//   const isLandingPage = location.pathname === '/';

//   return (
//     <main className={`flex-grow ${isLandingPage ? '' : 'container mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8'}`}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/about" element={<AboutDeveloper />} />
//         <Route path="/directory" element={<PrivateRoute><AlumniDirectory /></PrivateRoute>} />
//         <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
//         <Route path="/feedback" element={<PrivateRoute><Feedback /></PrivateRoute>} />
//         <Route path="/groups" element={<PrivateRoute><Groups /></PrivateRoute>} />
//         <Route path="/groups/:id" element={<PrivateRoute><GroupChat /></PrivateRoute>} />
//         <Route path="/admin" element={<PrivateRoute adminOnly={true}><AdminDashboard /></PrivateRoute>} />
//         <Route path="/notifications" element={<PrivateRoute><NotificationsPage /></PrivateRoute>} />
//         <Route path="/posts/:id" element={<PrivateRoute><PostPage /></PrivateRoute>} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//       </Routes>
//     </main>
//   );
// };

// if (process.env.NODE_ENV === 'development') {
//   const originalWarn = console.warn;
//   console.warn = (...args) => {
//     if (typeof args[0] === 'string' && args[0].includes('Vercel Web Analytics')) {
//       return;
//     }
//     originalWarn.apply(console, args);
//   };
// }

// export default AppWrapper;
