
import HeroSlider from '../Home/HeroSection.jsx'
import FeaturedBoxes from '../Home/FeatureBox'
import AboutSection from '../Home/AboutSection'
import PublicationSection from '../Home/PublicationSection'
import AboutFoundation from '../Home/AboutFoundation'
import OurGoals from '../Home/GoalSection'
import FeaturedObjectives from '../Home/FeatureObjective'
// import Testimonials from '../Testimonials'
// import TeamSection from '../ExecutiveBoard'
import NewsHeader from '../Home/NewsHeader'
import BlogSection from '../Home/BlogSection'
import Footerlogo from '../Footerlogo'
import FooterInfoBar from '../FooterBarInfo'
import NewsletterSubscription from '../Home/Newsletter'
import BoardOfTrusty from '../Home/Boardoftrusty'
import ExecutiveBoardSection from '../Home/ExecutiveBoard'


const Home = () => {
  return (
    <div>
      
  <HeroSlider/>
<FeaturedBoxes/>
<AboutSection/>
<PublicationSection/>
<AboutFoundation/>
<OurGoals/>
<FeaturedObjectives/>
{/* <Testimonials/> */}
<BoardOfTrusty/>
<ExecutiveBoardSection/>
<NewsHeader/>
<BlogSection/>
<Footerlogo/>
<FooterInfoBar/>
<NewsletterSubscription/>

    </div>
  )
}

export default Home
