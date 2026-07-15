
import AboutPage from "./about/page";
import Banner from "./component/Banner";
import Explore from "./explore/page";
import BlogSection from "./blog/page";
import ContactPage from "./component/Contact";
import FeaturedBooks from "./component/Feature";
import HomePage from "./component/HomePage";

export default function Home() {
  return (
  <div>
    <Banner/>
    {/* <Explore/> */}
    <FeaturedBooks/>
    <HomePage/>
    <AboutPage/>
    <BlogSection/>
    <ContactPage/>
  </div>
  );
}
