import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Routes>
  );
};

export default Navigation;
