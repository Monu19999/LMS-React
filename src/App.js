import React from "react";
import Topbar from "./component/Basics/Topbar";
import HeaderMainnav from "./component/Basics/HeaderMainnav";
import Mainslider from "./component/Basics/Mainslider";
import QuickInformation from "./component/Basics/QuickInformation";
import AboutHome from "./component/Basics/AboutHome";
import OnboardDepartment from "./component/Basics/OnboardDepartment";
import OurCourses from "./component/Basics/OurCourses";
import FooterLogos from "./component/Basics/FooterLogos";
import Footer from "./component/Basics/Footer";

const App = () => {
  return (
    <>
     <Topbar />
     <HeaderMainnav />
     <Mainslider />
     <QuickInformation />
     <AboutHome />
     <OnboardDepartment />
     <OurCourses />
     <FooterLogos />
     <Footer />
    </>
  )
  
}
export default App