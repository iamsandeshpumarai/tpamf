import { Routes,Route } from "react-router-dom"

import Header from "./Component/Header"
import Footer from "./Component/Footer"
import SubHeader from "./Component/SubHeader"
import Introduction from "./Component/Introudction/Introduction"
import Menu from "./Component/Menu"
import Primeminister from "./Component/Introudction/Primeminister"
import ScrolltoTop from './Component/ScrolltoTop'
import ImportantWork from "./Component/Introudction/ImportantWork"
import Timeline from "./Component/Introudction/Timeline"
import IntroOutlet from "./Component/Outlet/IntroOutlet"
import Organization from "./Component/Outlet/OrganizationOutlet"

import OrganizationPage from "./Component/Page/OrganizationPage"
import AllTeamSection from "./Component/Organization/AllTeamSection"
import LibrarySection from "./Component/Organization/LibrarySection"
import MueseumSection from "./Component/Organization/MueseumSection"


import ResearchPublication from "./Component/Category/ResearchPublication"
import CategoryOutlet from "./Component/Outlet/CategoryOutlet"
import HistoryPublication from "./Component/Category/HistoryPublication"
import TPARelatedPublication from "./Component/Category/TPARelatedPublication"
import ActivityOutlet from "./Component/Outlet/ActivityOutlet"
import DailyActivity from "./Component/Activity/DailyActivity"
import Home from "./Component/Page/Home"

import Activities from "./Component/Activity/Activities"
import SchoolarshipActivity from "./Component/Activity/SchoolarshipActivity"
import DiscussionActivity from "./Component/Activity/DiscussionActivity"
import Advertisement from "./Component/Notice/Advertisement"
import Notice from "./Component/Notice/Notice"
import NoticeOutlet from "./Component/Outlet/NoticeOutlet"
import GalleryOutlet from "./Component/Outlet/GalleryOutlet"
import ImageCollection from "./Component/Gallery.jsx/ImageCollection"
import VideoCollection from "./Component/Gallery.jsx/VideoCollection"
import ContactPage from "./Component/Page/Contact"
import ScrollTop from "./Component/ScrollTop"
import CompanyOutlet from "./Component/Outlet/CompanyOutlet"
import OrganizationalProfile from "./Component/Company/OrganizationalProfile"
import WorkshopTable from "./Component/Company/Workshopandseminar"
import ProfessionalRostrum from "./Component/Company/ProfessionalRostrum"
import BoardMembers from "./Component/Company/Currentboardandadvisory"
import LoadingScreen from "./Component/Loading"


const App = () => {
  return (
    <>
    <SubHeader/>
<Header/>
<Menu/>
<ScrolltoTop/>
<ScrollTop/>
    <Routes>

      
<Route path="/" element={<Home/>}/>

{/* introduction paths */}
<Route path="/tankaprasadacharya" element={<IntroOutlet/>}>
<Route index element={<Introduction/>}/>
<Route path="primeminister-period" element={<Primeminister/>}/>
<Route path="important-works" element={<ImportantWork/>}/>
<Route path="time-line" element={<Timeline/>}/>
</Route>

{/* organization path  */}

<Route path="/organization" element={<Organization/>}>
<Route index element={<OrganizationPage/>}/>
<Route path='goals' element={<OrganizationPage/>}/>
<Route path='all-teams' element={<AllTeamSection/>}/>
<Route path='management' element={<OrganizationPage/>}/>
<Route path='library' element={<LibrarySection/>}/>
<Route path='museum' element={<MueseumSection/>}/>
</Route>

{/* publication path  */}
<Route path="/category" element={<CategoryOutlet/>}  >
<Route index element={<ResearchPublication/>}/>
<Route path="TPA-Related" element={<TPARelatedPublication/>}/>
<Route path="History-and-other" element={<HistoryPublication/>}/>



</Route>

{/* Activity Path  */}
<Route path='/activity' element={<ActivityOutlet/>}>
<Route index element={<DailyActivity/>}/>
<Route path='scholarship-and-infrastructure' element={<SchoolarshipActivity/>}/>
<Route path='contemporary-discussions' element={<DiscussionActivity/>}/>
<Route path='activities/:slug' element={<Activities/>}/>
</Route>
    

    {/* announcement and the notice path  */}
<Route path='notification' element={<NoticeOutlet/>} >
<Route index element={<Advertisement/>}/>
<Route path='notice' element={<Notice/>}/>
</Route>

{/* gallery route  */}
<Route path='gallery' element={<GalleryOutlet/>}>
<Route index element={<ImageCollection/>}/>
<Route path='videos' element={<VideoCollection/>}/>
</Route>

{/* contact route  */}
<Route path='/contact' element={<ContactPage/>}/>

{/* foundation route  */}
<Route path='company' element={<CompanyOutlet/>}>
<Route index element={<OrganizationalProfile/>} />
<Route path='workshop-and-seminar' element={<WorkshopTable/>} />
<Route path='Professional-rostrum' element={<ProfessionalRostrum/>} />
<Route path='current-board-and-advisory-panel-members' element={<BoardMembers/>} />

</Route>

<Route path='/loading' element={<LoadingScreen/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
