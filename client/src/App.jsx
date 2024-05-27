import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import BodyLayout from "./layouts/BodyLayout";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import DownloadPage from "./pages/DownloadPage";
import SupportPage from "./pages/SupportPage";
import ErrorPage from "./pages/ErrorPage";
import { AppContextProvider } from "./context/AppContext";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<BodyLayout />}>
      <Route index element={<HomePage />} />,
      <Route path="/info" element={<InfoPage />} />,
      <Route path="/downloads" element={<DownloadPage />} />,
      <Route path="/support" element={<SupportPage />} />,
      <Route path="*" element={<ErrorPage />} />,
    </Route>,
  ])
);

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
