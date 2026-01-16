import React from 'react'
import NoticeResuable from '../Reusable/NoticeResuable'

const Advertisement = () => {
    const adData = {
        title:"विज्ञप्ति",
    images:["https://tp-acharya.terracecafe.com.np/upload/images/notices/1708500891Invitaiton%20Card.jpg"],
    text:"हार्दिक निमन्त्रणा"
    }
  return (
    <div>
      <NoticeResuable data={adData}/>
    </div>
  )
}

export default Advertisement
