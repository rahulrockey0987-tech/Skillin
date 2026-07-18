import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
}

export default App;