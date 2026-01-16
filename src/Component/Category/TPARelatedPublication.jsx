import React from 'react'
import Publication from '../Reusable/Publication'

const TPARelatedPublication = () => {
    const TPARelatedData = {
        title:"टंकप्रसादसंग-सम्बन्धित",
        data:[
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121249588%20Living%20Martyrs.jpg",
                bookname:"Living Martyrs",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121238177%20Acharyasita%20Kehi%20Kshyan.jpg",
                bookname:"अचार्यसिता केहि क्षेन",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121237016%20Tanka%20Prasad%20Acharya%20Smriti%20Grantha.jpg",
                bookname:"टंकप्रसाद आचार्य स्मृति ग्रन्थ",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121233865%20%20Tanka%20Prasad%20Acharyako%20Pararastra%20niti.jpg",
                bookname:"टंकप्रसाद आचार्यको पररास्ट्र नीति",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121233294%20Aadhunik%20Nepal%20Nijamati%20Sewako%20parikalpanakar.jpg",
                bookname:"आधुनिक नेपाल निजामती सेवाको परिकल्पनाकार",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121232573%20Tanka%20Prasad%20Acharya%20ra%20Aaajako%20Nepal.jpg",
                bookname:"टंकप्रसाद आचार्य र आजको नेपाल",
                link:"#"
                
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/1712119970tanka%20prasad.png",
                bookname:"टंकप्रसाद २०६९",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/1712119790Jiuda%20Sahidharu.png",
                bookname:"ज्युदा सहिदहरु",
                link:"#"
            },
            
        ]
    }
  return (
    <div>
      <Publication data={TPARelatedData}/>
    </div>
  )
}

export default TPARelatedPublication
