import Publication from "../Reusable/Publication"

const ResearchPublication = () => {
    const researchData = {
        title:"अनुसन्धात्मक",
        data:[
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121277539%20Internal%20and%20International%20Migration%20in%20Nepal.jpg",
                bookname:"Internal and International Migration in Nepal",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121277208%20Labour%20Market%20Development.jpg",
                bookname:"Labour Market Development",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121277037%20Effort%20at%20Promotion.jpg",
                bookname:"Efforts at Promotion of Women in Nepal",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121276805%20Nagariktako%20Byabastha%20Bartaman%20ra%20Bhavi%20Swarup.jpg",
                bookname:"नागरिकताको व्यवस्था वर्तमान र भावी स्वरूप",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121276424%20Nepalma%20Mahila%20vikaska%20Praytnaharu.jpg",
                bookname:"नेपालमा महिला विकासका प्रयत्नहरु",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121276063%20Vhavi%20Sambidhan%20......jpg",
                bookname:"भावी संबिधान",
                link:"#"
                
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121275202%20Nepalko%20Jatjatigat%20tatha%20langaik%20%20Aayam.jpg",
                bookname:"नेपालको जातजातिगत तथा लैंगिक आयाम",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/17121274671%20Nepalko%20Mahila%20Andolanka%20Paribartit%20Sandharva.jpg",
                bookname:"नेपालको महिला आन्दोलनका परिबर्तित संधर्व",
                link:"#"
            },
            {
                img:"https://tp-acharya.terracecafe.com.np/upload/images/publications/1708500580Caste%20Ethnicity.jpg",
                bookname:"Caste Ethnicity",
                link:"#"
            },
        ]
    }
  return (
    <div>
<Publication data={researchData}/>
    </div>
  )
}

export default ResearchPublication
