import { allNews } from '../utils/data'
import ActivityResuable from '../Reusable/ActivityResuable'

const DiscussionActivity = () => {
    const title = "समसामयिक बिषयमा छलफल कार्यक्रम"
    const Currdata = allNews?.currentAffairs
 
  return (
    <div>
        
      <ActivityResuable data={Currdata} title={title}/>
    </div>
  )
}

export default DiscussionActivity
