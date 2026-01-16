import React from 'react'
import Publication from '../Reusable/Publication'

const HistoryPublication = () => {
    const historyandotherData = {
        title:"टंकप्रसादसंग-सम्बन्धित",
        data:[
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121280867%20Rastriya%20and%20Rastriya.jpg",
                bookname:"राष्ट्र र राष्ट्रियता",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121280326%201997%20to%202017%20Arbinda%20Rimal.jpg",
                bookname:"१९९७ - २०१७ एक अवोलोकन",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121279325%20Nepal%20Tharkaidine%2019%20din.jpg",
                bookname:"नेपाल थर्कैदिने १९ दिन",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121278954%20%20Rewantakumari%20Acharya%20parichaya%20ra%20Avibyakti.jpg",
                bookname:"रेवान्तकुमारी आचार्य परिचय र अविब्यक्ति",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121278583%20Why%20Social%20Democracy.jpg",
                bookname:"Why Social Democracy for Nepal",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121277961%20Delli%20bazako%20Laptonko%20hotel.jpg",
                bookname:"डेल्ली बाजाको लप्तोंको होटेल",
                link:"#"
                
            },
          
            
        ]
    }

  return (
    <div>
      <Publication data={historyandotherData}/>
    </div>
  )
}

export default HistoryPublication
