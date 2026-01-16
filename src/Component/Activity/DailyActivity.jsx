import React from 'react';
import { allNews } from '../utils/data';
import ActivityResuable from '../Reusable/ActivityResuable';


const DailyActivity = () => {
  const ActivityData = allNews?.dailyActivity || []
  const title = "नियमित कार्यक्रम"
  return(
<>
    <ActivityResuable data={ActivityData} title={title}/>
</>
  )
};

export default DailyActivity;