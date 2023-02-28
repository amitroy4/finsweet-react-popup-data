import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Work from "./components/work/Work";
import Project from "./components/project/Project";
import Service from "./components/service/Service";
import Client from "./components/client/Client";
import Faq from "./components/faq/Faq";
import Inquiry from "./components/inquiry/Inquiry";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <Project />
      <Service />
      <Client />
      <Faq />
      <Inquiry />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
