
import AboutPage from "./about/page";
import Banner from "./component/Banner";
import Explore from "./explore/page";
import BlogSection from "./blog/page";
import ContactPage from "./component/Contact";
import FeaturedBooks from "./component/Feature";

export default function Home() {
  return (
  <div>
    <Banner/>
    {/* <Explore/> */}
    <FeaturedBooks/>
    <AboutPage/>
    <BlogSection/>
    <ContactPage/>
  </div>
  );
}
