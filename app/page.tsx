
import Navbar from "./component/Navber";
import Banner from "./component/Banner";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
  <div>
      <Navbar/>
    <Banner/>
            <ToastContainer />
  </div>
  );
}
