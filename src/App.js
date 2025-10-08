// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
// import { routes } from "./routes";
// import LocationModal from "./components/LocationModal/LocationModal";
// import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";

// function AppContent() {
//   const location = useLocation();
//   const [showModal, setShowModal] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   useEffect(() => {
//     if (location.pathname === "/") {
//       setShowModal(true);
//     } else {
//       setShowModal(false);
//     }
//   }, [location]);

//   const handleConfirmLocation = (city, cinema) => {
//     setSelectedLocation({ city, cinema });
//     setShowModal(false);
//   };

//   return (
//     <>
//       {showModal && (
//         <LocationModal
//           onConfirm={handleConfirmLocation}
//           onClose={() => setShowModal(false)}
//         />
//       )}

//       <Routes>
//         <Route
//           path="/movie/:id"
//           element={
//             <DefaultComponent
//               selectedLocation={selectedLocation}
//               onOpenLocationModal={() => setShowModal(true)}
//             >
//               <MovieDetailPage />
//             </DefaultComponent>
//           }
//         />
//         {routes.map((route, index) => {
//           const Page = route.page;
//           const Layout = route.isShowHeader ? DefaultComponent : React.Fragment;

//           return (
//             <Route
//               key={index}
//               path={route.path}
//               element={
//                 <Layout
//                   selectedLocation={selectedLocation}
//                   onOpenLocationModal={() => setShowModal(true)}
//                 >
//                   <Page />
//                 </Layout>
//               }
//             />
//           );
//         })}
//       </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import AuthLayout from "./components/AuthLayout/AuthLayout"; 
import { routes } from "./routes";
import LocationModal from "./components/LocationModal/LocationModal";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";

function AppContent() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // Mở modal chọn rạp khi ở trang chủ
    if (location.pathname === "/") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [location]);

  const handleConfirmLocation = (city, cinema) => {
    setSelectedLocation({ city, cinema });
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <LocationModal
          onConfirm={handleConfirmLocation}
          onClose={() => setShowModal(false)}
        />
      )}

      <Routes>
        {/* Trang chi tiết phim */}
        <Route
          path="/movie/:id"
          element={
            <DefaultComponent
              selectedLocation={selectedLocation}
              onOpenLocationModal={() => setShowModal(true)}
            >
              <MovieDetailPage />
            </DefaultComponent>
          }
        />

        {/* Trang Đăng nhập / Đăng ký, header riêng */}
        <Route
          path="/auth"
          element={
            <AuthLayout>
              <AuthPage />
            </AuthLayout>
          }
        />
        {/* forget password */}
        <Route
          path="/forgot-password"
          element={
            <AuthLayout>
              <ForgotPasswordPage />
            </AuthLayout>
          }
        />

        {/* Các route khác */}
        {routes.map((route, index) => {
          const Page = route.page;
          const Layout = route.isShowHeader ? DefaultComponent : React.Fragment;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout
                  selectedLocation={selectedLocation}
                  onOpenLocationModal={() => setShowModal(true)}
                >
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
