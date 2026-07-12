
import Navbar from "./component/Navber";
import Banner from "./component/Banner";
import { ToastContainer } from "react-toastify";
import Explore from "./explore/page";

export default function Home() {
  return (
  <div>
      <Navbar/>
    <Banner/>
    <Explore/>
            <ToastContainer />
  </div>
  );
}
