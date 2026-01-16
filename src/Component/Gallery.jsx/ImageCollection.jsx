import React from 'react'
import GalleryResuable from '../Reusable/GalleryResuable'

const ImageCollection = () => {
  const imgCollection = {
    title:"फोटो ग्यालरी",
    type:"image",
    collection:[
      {
title:"Speech on Nepal Prajaparisad and Democracy",
coverImage:"https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708502331.jpg",
imageCollection:["https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708502683020231215_085251.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708502683120231215_094421.jpg",
  "https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708502683220231215_094423.jpg",
  "https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708502683320231215_094426.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708502683420231215_094458.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708502683620231215_094507.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708502683620231215_094507.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708502683920231215_100226.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/17085026831120231215_101154.jpg"
],

      },
      {
        title:"Tanka Prasad Acharya",
        coverImage:"https://tp-acharya.terracecafe.com.np/upload/images/gallery/1704609055.jpg",
        imageCollection:[
          "https://tp-acharya.terracecafe.com.np/upload/images/gallery/170850119501.%20Tanka%20Prasad%20Acharyako%20Janma%20ghar.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/170850119512.%20Tanka%20Prasadki%20Mata.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/170850119523.%20Tanka%20Prasadka%20pita%20Tika%20Prasad.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/170850119534.%20Tanka%20Prasad%20Acharya%20in%20his%20step%20mother.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/170850119534.%20Tanka%20Prasad%20Acharya%20in%20his%20step%20mother.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/170850119545%20%20Baghka%20Damarusanga%20Tanka%20Prasad%20Acharya.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/170850119556.1975%20tira%20hat%20lagayera%20Tanka%20Prasad%20Chaurma%20Baseka%20unka%20pitajeeka%20office%20Staff%20at%20Biratnagar.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/170850119567.%20Tanka%20Prasad%20with%20his%20Fathar.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/170850119589.%20Tanka%20Prasadko%20Koteshwor%20stith%20Salik.JPG","https://tp-acharya.terracecafe.com.np/upload/images/gallery/1708501195911.%20Tanka%20Prasadlai%201997%20ma%20pakrera%20nel%20unkmGbLra%20hathkadi%20%20%20%20%20%20%20%20Lagai%20SinghaDarbarma%20Laida.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/17085011951012%20Aaafu%20Jhankhanbata%20chuteko%20Lagattaipachi%20Tanka%20Prasad%20Aafni%20patni%20Rewantakumarisanga.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/170460907907.jpg","https://tp-acharya.terracecafe.com.np/upload/images/gallery/17046090791TankaPrasadAcharya_20230114164417.jpg"
        ]
      }
    ]
  }
  return (
    <div>
      <GalleryResuable data={imgCollection}/>
    </div>
  )
}

export default ImageCollection
