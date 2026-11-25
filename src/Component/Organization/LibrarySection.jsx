import FoundationFooter from "../Company/FoudationFooter"
import BasicIntro from "../Reusable/BasicIntro"

const LibrarySection = () => {
    const libraryData = {
        image:"https://tp-acharya.terracecafe.com.np/upload/images/library/1708499556170849355410.%20Tanka%20Prasad%20Acharya%20Smriti%20Bhaban%20Katunje.jpg",
        title:"टंकप्रसाद आचार्य प्रतिष्ठान पुस्तकालय",
        information:[
            "टंकप्रसाद स्मृति वाचनालय भक्तपुरको कटुञ्जेमा रहेको टंकप्रसाद आचार्य स्मृति प्रतिष्ठानको कार्यालय भवनमा सञ्चालित थियो। वाचनालयले अध्ययन तथा ज्ञानको स्रोतका रूपमा सेवा प्रदान गर्दै आएको थियो।",
      "दुःखका साथ उल्लेख गर्नुपर्दछ कि वि.सं. २०८२ भदौ २३ र २४ गते भएको नवयुवाहरूको आन्दोलनका क्रममा भएको आगलागीमा वाचनालय जलेर नष्ट भयो। उक्त घटनामा प्रतिष्ठानमा सुरक्षित राखिएका महत्वपूर्ण ऐतिहासिक दस्तावेजहरू समेत नष्ट भएका छन्। यसबाट प्रतिष्ठानलाई ठूलो क्षति पुगेको छ।"
        ]
    }
  return (
    <div>
<BasicIntro data={libraryData}/>
<FoundationFooter/>
    </div>
  )
}

export default LibrarySection
