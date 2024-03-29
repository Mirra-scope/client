import { Route, Routes } from "react-router-dom";
import HomeRoutes from "@/feature/Home/Home.routes";
import VideoUploadRoutes from "@/feature/Upload/VideoUpload.routes";
import FourOFourRoutes from "@/feature/FourOFourScreen/FourOFourScreen.routes";
import SeriesRoutes from "@/feature/Series/Series.routes";
import { LayoutAppBar } from "@/Layout/LayoutAppBar";
import { LayoutAppHeader } from "@/Layout/LayoutAppHeader";
import QuickRoutes from "@/feature/Quick/Quick.routes";
import { LayoutSidebar } from "@/Layout/LayoutSidebar";
import CineastRoutes from "@/feature/Cineast/cineast.routes";
import MovieRoutes from "@/feature/Movie/Movie.routes";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route element={[<LayoutSidebar />, <LayoutAppBar />, <LayoutAppHeader />]}>
        <Route path="home/*" Component={HomeRoutes} />
        <Route path="upload/*" Component={VideoUploadRoutes} />
        <Route path="series/*" Component={SeriesRoutes} />
        <Route path="movie/*" Component={MovieRoutes} />
        <Route path="cineats/*" Component={CineastRoutes} />
      </Route>
      <Route path="quick/*" Component={QuickRoutes} />
      <Route path="*" Component={FourOFourRoutes} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
