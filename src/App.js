import { Route, Routes } from "react-router-dom";
import PrimaryLayout from "./layout/primary-layout/PrimaryLayout";
import Home from "./home/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </>
  );
}
