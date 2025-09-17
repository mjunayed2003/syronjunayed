import { Routes, Route } from "react-router-dom";
import { MasterLayout } from "./layout/MasterLayout";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import BlogPage from "@/component/BlogPage";
import DataFace from "./component/DataFace"
import DetailPage from "./component/DtailsPage";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <MasterLayout>
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/datafatch" element={<DataFace />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </MasterLayout>
      <Footer />
    </div>
  );
}

export default App;
