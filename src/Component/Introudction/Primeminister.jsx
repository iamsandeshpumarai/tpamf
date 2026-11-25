
import React from "react";
import BasicIntro from "../Reusable/Primeministershipresuable";

const Primeminister = () => {
  const introData = {
    eyebrow: {
      ne: "नेपालको राजनीतिक इतिहास",
      en: "Nepal's Political History",
    },

    header: {
      ne: "टंकप्रसाद आचार्यको प्रधानमन्त्रीत्व कालका मुख्य मुख्य उपलब्धिहरू",
      en: "Major Achievements During the Premiership of Tank Prasad Acharya",
    },

    subtitle: {
      ne: "१८ महिने कार्यकालका ऐतिहासिक उपलब्धिहरू",
      en: "Historical Achievements During His 18-Month Tenure",
    },

    image:
      "https://kids.kiddle.co/images/thumb/3/3f/Welcoming_Nepalese_PM.jpg/300px-Welcoming_Nepalese_PM.jpg",

    imageAlt: {
      ne: "टंकप्रसाद आचार्य",
      en: "Tank Prasad Acharya",
    },

    introduction: {
      ne: "राणा शासनको समाप्ति पछि बनेका अन्य मन्त्रिमण्डलले गरेका कामहरू भन्दा उल्लेख्य काम गरेको पाइन्छ टंकप्रसाद आचार्यको १८ महिने सरकारले । उनको समयमा भएका उल्लेखनीय कामहरूलाई यहाँ प्रस्तुत गरिएको छः",

      en: "The 18-month government of Tank Prasad Acharya is noted for making significant contributions compared with other governments formed after the end of Rana rule. His major achievements are presented below.",
    },

    highlightsTitle: {
      ne: "मुख्य उपलब्धिहरू",
      en: "Key Achievements",
    },

    highlights: [
      {
        id: "bank",
        title: {
          ne: "नेपाल राष्ट्र बैंकको स्थापना",
          en: "Establishment of Nepal Rastra Bank",
        },
        description: {
          ne: "नेपालको केन्द्रीय बैंकको स्थापना",
          en: "Establishment of Nepal's central bank",
        },
      },
      {
        id: "plan",
        title: {
          ne: "पञ्चवर्षीय योजनाको थालनी",
          en: "Beginning of Five-Year Planning",
        },
      },
      {
        id: "admin",
        title: {
          ne: "प्रशासनमा सुधार",
          en: "Administrative Reforms",
        },
      },
      {
        id: "court",
        title: {
          ne: "सर्वोच्च अदालतको स्थापना",
          en: "Establishment of the Supreme Court",
        },
      },
      {
        id: "foreign",
        title: {
          ne: "अन्तर्राष्ट्रिय सम्बन्ध विस्तार",
          en: "Expansion of International Relations",
        },
      },
    ],

    sections: {
      currency: {
        number: "क",
        title: {
          ne: "मुद्रा सम्बन्धी व्यवस्था र राष्ट्र बैंकको स्थापना",
          en: "Currency Management and Establishment of Nepal Rastra Bank",
        },
        content: [
          {
            ne: "टङ्कप्रसाद आचार्यको सरकार गठन हुनुभन्दा पहिले भारतीय मुद्रा नेपाली बजारमा छ्यापछ्याप्ती थियो । नेपाली मुद्रा कसरी चलाउने भन्ने कुनै आधार वा नियम थिएन । भारतीय मुद्राको मूल्य नेपाली बजारमा मनपरी थियो । मुलुकको सार्वभौमिकताको परिचय दिने एउटा माध्यम भनेको स्वतन्त्र मुद्रा पनि हो । अन्तर्राष्ट्रिय बजारमा मुद्रा (Currency) को मूल्य जति बलियो हुन्छ, त्यसले मुलुकको अर्थतन्त्र पनि त्यति नै बलियो छ भन्ने संकेत गर्दछ ।",
            en: "Before the formation of Tanka Prasad Acharya's government, Indian currency was widely circulated throughout the Nepali market. There was no established basis or regulation governing the use of Nepalese currency. The value of Indian currency in the Nepali market was determined arbitrarily. An independent currency is also one of the symbols of a nation's sovereignty. The stronger a country's currency is in the international market, the stronger its economy is perceived to be."
          },
          {
            ne: "देशको अर्थतन्त्रलाई निश्चित दिशा दिन देशको आफ्नो बैंक हुन जरुरी थियो । त्यसवेलासम्म नेपालको आफ्नो बैंक नहुँदा राष्ट्रिय अर्थतन्त्रले दिशा निर्देश गर्ने र दिगो अर्थतन्त्रको लागि योजना बनाउने आधार पनि थिएन । तसर्थ मूल्य स्थिरताका लागि, आर्थिक स्थिरताको निश्चितता र आर्थिक व्यवस्थाका अनुगमन, नगदको सुरक्षाको ग्यारेण्टी र प्रभावकारी भुक्तानी व्यवस्था, आर्थिक र मौद्रिक तथ्याङ्क उपलब्ध गराउन नेपालमा केन्द्रीय बैंकको आवश्यकता थियो । त्यसलाई पूरा गर्न टङ्कप्रसाद आचार्यको प्रधानमन्त्रीत्वकालमा नेपाल राष्ट्र बैंकको स्थापना भयो । यो नेपालको इतिहासमा एक उपलब्धीपूर्ण कार्य थियो ।",
            en: "A country's own bank was essential to provide clear direction to its economy. Until then, Nepal did not have its own bank, which meant there was no institutional foundation for guiding the national economy or developing plans for sustainable economic growth. Therefore, Nepal needed a central bank to maintain price stability, ensure economic stability, monitor financial systems, guarantee the security of cash, establish an effective payment system, and provide reliable economic and monetary statistics. To fulfill these needs, Nepal Rastra Bank was established during the premiership of Tanka Prasad Acharya. This was a remarkable achievement in the history of Nepal."
          },
          {

          }
        ],
      },

      planning: {
        number: "ख",
        title: {
          ne: "पञ्चवर्षीय योजनाको थालनी",
          en: "Beginning of the Five-Year Plan",
        },
        content: [
          {
            ne: "टङ्कप्रसाद आचार्य प्रधानमन्त्री हुनुभन्दा पहिले देश विकासको खाका कसैले कहिल्यै प्रस्तुत गरेनन् । टङ्कप्रसाद आचार्यको कार्यकालमा कार्यान्वयनको अभिभारा आइपर्‍यो । पञ्चवर्षीय योजना कार्यान्वयन गर्ने चुनौतीको सामना गर्न राष्ट्रिय योजना आयोग गठन भई २०१३ सालबाट योजनाबद्ध विकासको शुरुवात भएको पाइन्छ । यसका लागि टङ्कप्रसाद आचार्यको प्रधानमन्त्रीत्वकाल ऐतिहासिक उपलब्धिको रूपमा रहेको छ ।",
            en: "Before Tanka Prasad Acharya became Prime Minister, no one had ever presented a comprehensive blueprint for the country's development. During his tenure, the responsibility of implementing such a vision fell upon his government. To address the challenges of implementing the Five-Year Plan, the National Planning Commission was established, marking the beginning of planned development in Nepal in 2013 B.S. Therefore, Tanka Prasad Acharya's premiership stands as a historic achievement in Nepal's history."
          },
        ],
      },

      administration: {
        number: "ग",
        title: {
          ne: "प्रशासनमा सुधार",
          en: "Administrative Reforms",
        },
        content: [
          {
            ne: "२००७ सालको परिवर्तनपछि लोकसेवा अस्तित्वमा आएतापनि कर्मचारीको नियुक्ति सरकारको इच्छामा भर पर्दथ्यो । निजामती सम्बन्धी कानुन थिएन । निजामती सेवालाई व्यवस्थित गर्नका लागि टंकप्रसाद आचार्यको प्रधानमन्त्रीत्वकालमा उनकै अध्यक्षतामा प्रशासन पुनर्गठन योजना आयोग (Administrative Reorganization Planning Commission - ARPC) गठन भयो । यस आयोगले नेपालको निजामती सेवाका क्षेत्रमा ऐतिहासिक तथा उल्लेख्य काम गर्‍यो । यस आयोगले कर्मचारीहरूको स्थिति सुव्यवस्थित गराउन निजामती सेवा ऐनको मस्यौदा नै तयार गर्‍यो । सोही अनुरूप २०१३ साल भाद्र २२ गते नेपाल निजामती ऐन २०१३ जारी भयो । यसले कर्मचारी नियुक्ति, सरुवा, पदोन्नति, अन्यायमा परेमा उजुरी गर्ने उपाय, निजामती कर्मचारीको बचाउ आदिको व्यवस्था गर्‍यो । यसले कर्मचारीहरूलाई कामप्रति वफादारी र कार्यनिष्ठ बनाउनका लागि उपयुक्त वातावरण सिर्जना गर्‍यो ।",
            en: "Although the Public Service Commission came into existence after the political change of 2007 B.S., the appointment of government employees still depended on the government's discretion. There was no comprehensive civil service legislation in place. To organize and reform the civil service, the Administrative Reorganization Planning Commission (ARPC) was established during Tanka Prasad Acharya's premiership under his own chairmanship. The commission made significant and historic contributions to Nepal's civil service sector. It prepared a draft of the Civil Service Act to bring order and structure to the status and administration of government employees. Accordingly, the Nepal Civil Service Act, 2013 B.S., was promulgated on Bhadra 22, 2013 B.S. The Act introduced provisions regarding employee recruitment, transfers, promotions, grievance procedures in cases of injustice, and the protection of civil servants' rights. It also created an appropriate environment to encourage civil servants to perform their duties with loyalty, dedication, and professionalism."
          },
          {
            ne: "निजामती सेवाका निजामती सेवा ऐन, निजामती सेवा नियमावली, सचिवालय कार्यविधि, नेपाल प्रशासन सेवा नियम, नेपाल न्याय सेवा नियम, प्रशासन सेवामा श्रेणी विभाजन जस्ता कार्य गरेर नेपालको प्रशासन तथा न्याय सेवालाई आधुनिकीकरण उनकै कार्यकालमा भयो ।",
            en: "The modernization of Nepal's administrative and judicial services took place during his tenure through the introduction of the Civil Service Act, Civil Service Regulations, Secretariat Procedures, Nepal Administration Service Rules, Nepal Judicial Service Rules, and the classification of positions within the administrative service."
          },
          {
            ne: "नेपाल सरकारले निजामती सेवा ऐन २०१३ जारी भएको दिन भदौ २२ गतेलाई निजामती दिवसका रूपमा मनाउँदै आएको छ । यस दिन निजामती कर्मचारीहरूलाई सार्वजनिक बिदा हुन्छ । टंकप्रसाद आचार्यको दूरदर्शितामा मुलुकको निजामती संयन्त्रलाई आधुनिक रूप दिने जुन प्रयास भयो यसप्रति मुलुक अनुग्रहित हुनुपर्ने देखिन्छ ।",
            en: "The Government of Nepal has been observing Bhadra 22, the day the Civil Service Act, 2013 B.S. was promulgated, as Civil Service Day. Civil servants are granted a public holiday on this occasion. The country should recognize and appreciate the efforts made during Tanka Prasad Acharya's premiership, guided by his vision, to modernize Nepal's civil service administration."
          },
        ],
      },

      postal: {
        number: "घ",
        title: {
          ne: "विश्व हुलाक सङ्घको सदस्यता",
          en: "Membership in the Universal Postal Union",
        },
        content: [
          {
            ne: "आजको जस्तो सामाजिक सञ्जालदेखि सञ्चारका विभिन्न उपकरणहरू केही वर्षअघिसम्म नेपालमा थिएनन् । विश्वमै यस्ता विद्युतीय सामग्रीको विकास भइनसकेको अवस्थामा नेपालमा एक ठाउँबाट अर्को ठाउँमा सन्देश पुर्‍याउनु पर्‍यो भने मान्छे आफै जानुपर्ने हुन्थ्यो । नेपालमा एकले अर्कोलाई चिठीपत्र पठाई चिठीमार्फत सन्देश प्रवाह गर्ने कुरा वरिपरि बढीमा १/२ दिनको बाटो हिँड्न सकिने स्थानमा मात्र पत्राचार हुने गर्दथ्यो ।",
            en: "Until a few decades ago, Nepal did not have social media or the various communication technologies that we use today. At a time when such electronic devices had not yet been developed anywhere in the world, delivering a message from one place to another in Nepal required people to travel in person. Communication through letters was also limited to places that could generally be reached within one or two days of walking. As a result, correspondence between people was mostly confined to nearby locations."
          },
          {
            ne: "बाह्य जगत वा अन्य मुलुकसँग बलियो सम्बन्ध बनाउन अन्तर्राष्ट्रिय सङ्गठनसँग सम्बन्ध हुनुपर्दछ । यसलाई अघि बढाउन उनले २०१३ साल असोजमा नेपालको हुलाकलाई विश्व हुलाक सङ्घको सदस्यता दिलाए ।",
            en: "To establish strong relations with the outside world and other countries, it was essential for Nepal to maintain ties with international organizations. Taking this initiative forward, he secured Nepal's membership in the Universal Postal Union (UPU) in Ashoj 2013 B.S."
          },
        ],
      },

      court: {
        number: "ङ",
        title: {
          ne: "सर्वोच्च अदालतको स्थापना",
          en: "Establishment of the Supreme Court",
        },
        content: [
          {
            ne: "टंकप्रसाद आचार्यको प्रधानमन्त्री कालमा नेपालमा आधुनिक राज्य निर्माणका लागि धेरै ऐतिहासिक संस्थागत सुधारहरू भएका थिए । तीमध्ये सबैभन्दा महत्वपूर्ण उपलब्धिमध्ये एक थियो सर्वोच्च अदालतको स्थापना । टंकप्रसाद आचार्य प्रधानमन्त्री रहेको समयमा वि.सं. २०१३ साल जेठ ८ गते (२१ मे १९५६) सर्वोच्च अदालत ऐन, २०१३ लागू भयो । यसै ऐनद्वारा नेपालको सर्वोच्च अदालतको औपचारिक स्थापना भयो । यसअघि नेपालको सर्वोच्च न्यायिक निकाय प्रधान न्यायालय थियो । सर्वोच्च अदालत ऐन लागू भएपछि प्रधान न्यायालयलाई आधुनिक सर्वोच्च अदालतमा रूपान्तरण गरियो, जसले नेपालको न्यायपालिकालाई नयाँ संरचना र संवैधानिक आधार प्रदान गर्‍यो । टंकप्रसाद आचार्यले नेपालमा कानूनको शासन (Rule of Law) स्थापित गर्न स्वतन्त्र र सुदृढ न्यायपालिकाको आवश्यकता महसुस गरेका थिए । उनको नेतृत्वमा सर्वोच्च अदालत स्थापना हुनु आधुनिक न्याय प्रणालीको सुरुआतको महत्वपूर्ण चरण बन्यो ।",
            en: "During Tanka Prasad Acharya's premiership, several historic institutional reforms were introduced to support the development of a modern state in Nepal. One of the most significant achievements was the establishment of the Supreme Court. While Tanka Prasad Acharya was serving as Prime Minister, the Supreme Court Act, 2013 B.S., came into effect on Jestha 8, 2013 B.S. (May 21, 1956). This Act formally established Nepal's Supreme Court. Before this, the country's highest judicial body was the Pradhan Nyayalaya (Supreme Court of Justice). Following the implementation of the Supreme Court Act, the Pradhan Nyayalaya was transformed into a modern Supreme Court, providing Nepal's judiciary with a new institutional structure and constitutional foundation. Tanka Prasad Acharya recognized the importance of an independent and strong judiciary in establishing the rule of law in Nepal. The establishment of the Supreme Court under his leadership marked an important milestone in the development of Nepal's modern judicial system."
          },
          {
            ne: "नेपालमा आधुनिक न्यायपालिकाको संस्थागत विकासमा उनको योगदान अत्यन्त महत्वपूर्ण मानिन्छ । उनले कानूनको शासन, स्वतन्त्र न्यायपालिका र लोकतान्त्रिक संस्थाको विकासतर्फ नेपालको यात्रा अघि बढाउन निर्णायक राजनीतिक नेतृत्व प्रदान गरेका थिए ।",
            en: "His contribution to the institutional development of Nepal's modern judiciary is considered highly significant. He provided decisive political leadership in advancing Nepal's journey towards the rule of law, an independent judiciary, and the development of democratic institutions."
          },
        ],
      },

      communist: {
        number: "च",
        title: {
          ne: "नेकपा माथिको प्रतिबन्ध फुकुवा",
          en: "Lifting the Ban on the Communist Party of Nepal",
        },
        content: [
          {
            ne: "त्यस्तै विक्रम संवत् २००८ सालदेखि नेपाल कम्युनिष्ट पार्टीमाथि लागेको प्रतिबन्ध टङ्कप्रसाद आचार्य प्रधानमन्त्री भएपछि हटाइयो । प्रतिबन्ध हटाउनका लागि केही प्रक्रियाहरू अवलम्बन गरिएको थियो । प्रतिबन्धका अवस्थामा पनि नेकपाले केही आन्दोलन चलाएको थियो । आन्दोलन गर्दा पार्टीमाथि प्रतिबन्ध लागेकाले अखिल नेपाल किसान सङ्घको माध्यमबाट आन्दोलन चलाएको थियो ।",
            en: "Similarly, the ban imposed on the Communist Party of Nepal (CPN) in 2008 B.S. was lifted after Tanka Prasad Acharya became Prime Minister. Certain procedures were followed to remove the ban. Despite the restrictions, the Communist Party of Nepal continued to carry out various protest movements. Since the party itself was banned, it organized these movements through the All Nepal Peasants' Association.",
              
          },
        ],
      },

      agriculture: {
        number: "छ",
        title: {
          ne: "कृषिमा सुधार",
          en: "Agricultural Reforms",
        },
        content: [
          {
            ne: "कृषि विकासका लागि सर्वप्रथम त नेपालको इतिहासमै पहिलोपटक किसानहरूलाई ऋण दिने प्रबन्ध मिलाइएको थियो । यो ऋणको मूल लक्ष्य किसानहरूलाई जमिन्दारी प्रथाको पञ्जाबाट मुक्त गराउनु र कृषिमा उन्नति गरी कृषि उत्पादनलाई अन्तर्राष्ट्रिय बजारमा पठाउने थियो । त्यसका लागि ८० लाख रुपैयाँ आजको बजार मूल्यमा गणना गर्ने हो भने त्यो रकम (८० करोडभन्दा बढी हुन आउँछ) दिने निर्णय गरेको र आधाभन्दा बढी रकम सुरुमै दिने व्यवस्था मिलाइएको कुरा पनि उल्लेख भएको पाइन्छ ।",
             en: "As a first step towards agricultural development, arrangements were made for the first time in Nepal's history to provide loans to farmers. The primary objective of these loans was to free farmers from the grip of the landlord system, promote agricultural development, and increase agricultural production for export to international markets. It is reported that the government decided to provide 8 million rupees for this purpose, an amount equivalent to more than 800 million rupees in today's market value, with arrangements made to disburse more than half of the total amount at the outset."
          },
        ],
      },

      land: {
        number: "ज",
        title: {
          ne: "भूमिसुधार",
          en: "Land Reforms",
        },
        content: [
          {
            ne: "२०२१ सालको भूमिसुधार कार्यक्रम र कृषि क्षेत्रले गरेको उपलब्धि त्यसको परिणाम थियो भन्ने कुरा पछिल्लो समयमा मन्त्रालय सम्हालेका मन्त्रीहरू पनि स्मरण गर्दछन् ।",
             en: "Ministers who have subsequently held responsibility for the ministry have also recalled that the Land Reform Programme of 2021 B.S. and the achievements made in the agricultural sector were outcomes of these earlier initiatives."
          },
          {
            ne: "टङ्कप्रसाद आचार्य नेतृत्वको सरकारले गरेका काम कार्यान्वयनको स्पिरिट नेपालको इतिहासमा प्रशंसनीय मात्र होइन, एक प्रेरणादायी र उपलब्धिमूलक मानिन्छ । डेढ वर्ष अर्थात् १८ महिनाको अवधिमा आर्थिक, सामाजिक, राजनीतिक, प्रशासनिक अर्थात् मुलुकको आन्तरिक सुधारमा जुन काम भयो त्यो नेपालको सन्दर्भमा ऐतिहासिक मानिन्छ ।",
              en: "The determination and commitment with which the government led by Tanka Prasad Acharya implemented its initiatives are regarded not only as commendable but also as inspiring and productive in Nepal's history. The work accomplished over a period of one and a half years, or 18 months, in economic, social, political, and administrative sectors, particularly in improving the country's internal affairs, is considered historic in the context of Nepal."
          },
        ],
      },

      foreign: {
        number: "झ",
        title: {
          ne: "परराष्ट्र सम्बन्ध",
          en: "Foreign Relations",
        },
        content: [
          {
            ne: "विक्रम संवत् २००७ सालदेखि २०११ सालसम्म नेपालको नीतिले र नेपालप्रति भारतीय दृष्टिकोणका कारण नेपाल स्वतन्त्र देशको हैसियतबाट खुम्चिँदै गएको आभास हुन थालेको थियो । यस बेलासम्म नेपालको विदेश सम्बन्ध भारतको अतिरिक्त बेलायतसँग र बेलायती साम्राज्यले दक्षिण एसिया छोड्ने भएपछि पश्चिमको अर्को बलशाली राज्य अमेरिकासँग सन् १९४७ मा सम्बन्ध कायम भएको थियो भने सन् १९४९ मा नेपालले फ्रान्ससँग दौत्य सम्बन्ध कायम गरेको थियो ।",
            en: "Between 2007 B.S. and 2011 B.S., Nepal increasingly appeared to be losing some of its standing as an independent nation due to its foreign policy and India's attitude towards Nepal. By this time, Nepal had established foreign relations with countries beyond India, including the United Kingdom. As the British Empire withdrew from South Asia, Nepal also established relations with another major Western power, the United States, in 1947. Nepal subsequently established diplomatic relations with France in 1949."
          },
          {
            ne: "उनी प्रधानमन्त्री भएको दुई महिनापछि एक सार्वजनिक कार्यक्रममा नेपालको अन्तर्राष्ट्रिय क्षेत्रमा महत्व बढेको चर्चा गर्दै वैदेशिक सम्बन्ध विस्तारको सङ्केत गरेका थिए । नेपालको विदेश नीतिको विषयमा प्रधानमन्त्री टङ्कप्रसाद आचार्यले विनासर्त पाउने सहायता मात्र स्वीकार गर्ने उल्लेख गर्दै विदेशी स्वार्थको परिधिमा आउने सहायता अस्वीकार गर्ने सङ्केत पनि दिएका थिए । उक्त कुरा उनले आफ्नो चीन भ्रमणको अवसरमा पनि व्यक्त गरेका थिए ।",
              en: "Two months after becoming Prime Minister, he spoke at a public event about Nepal's growing importance in the international arena and indicated his intention to expand the country's foreign relations. Regarding Nepal's foreign policy, Prime Minister Tanka Prasad Acharya stated that Nepal would accept only unconditional foreign assistance and indicated that it would reject aid tied to foreign interests. He reiterated this position during his visit to China as well."
          },
        ],
      },

      russia: {
        number: "१",
        title: {
          ne: "नेपाल र रुसबीच दौत्य सम्बन्ध",
          en: "Diplomatic Relations Between Nepal and Russia",
        },
        content: [
          {
            ne: "नेपाल सदियौँदेखि एक स्वतन्त्र सार्वभौम राष्ट्र रहँदै आएको छ । नेपालमा भारतीय दबदबा रहेको कारण रुसले भिटो प्रयोग गरेर नेपाललाई संयुक्त राष्ट्रसंघको सदस्यता दिलाउनबाट वञ्चित गराएको थियो । तसर्थ टंकप्रसाद आचार्यले रुससितको सम्बन्ध राम्रो पार्न ठूलो भूमिका खेले । उनको वैदेशिक नीति सफा नीति थियो । उनले एक्लिएर रहेको नेपाललाई विश्वसामु चिनाए । विश्वका राष्ट्रहरूसँग आफ्नो मित्रता अगाडि बढाए । आचार्यले रुससित दौत्य सम्बन्ध कायम गर्ने निर्णय गर्दा भारतले प्रतिक्रिया जनाउने सम्भावनालाई ध्यानमा राख्दै सुरक्षात्मक नीति अपनाएका थिए । अन्ततः आचार्यले सन् १९५६ को २० जुलाईमा रुससित दौत्य सम्बन्ध कायम गराए ।",
              en: "Nepal has remained an independent and sovereign nation for centuries. Due to India's influence over Nepal, Russia had used its veto power to prevent Nepal from obtaining membership in the United Nations. Therefore, Tanka Prasad Acharya played a significant role in improving Nepal's relations with Russia. His foreign policy was guided by a clear and independent approach. He brought Nepal, which had remained relatively isolated, to the attention of the international community and strengthened its friendships with countries around the world. When deciding to establish diplomatic relations with Russia, Acharya adopted a cautious approach, taking into consideration the possibility of a reaction from India. Ultimately, Acharya established diplomatic relations with Russia on July 20, 1956."
          },
        ],
      },

      china: {
        number: "२",
        title: {
          ne: "नेपाल र चीनबीच दौत्य सम्बन्ध",
          en: "Diplomatic Relations Between Nepal and China",
        },
        content: [
          {
            ne: "नेपालको चीनसित २०१२ साल साउन १७ गते मित्रता कायम भएपछि २०१३ साल असोज ५ गतेका दिन पुनः काठमाडौंमा सम्झौता भयो । यो दौत्य सम्बन्धमा पञ्चशीलको सिद्धान्तलाई मूल सिद्धान्तको रूपमा अपनाइएको थियो । यसरी चन्द्र शमशेरको समयमा छुटेको नेपाल-चीनबीचको सम्बन्ध पुनः स्थापित हुन पुगेको हो । टंकप्रसाद आचार्यको कार्यकालमा आएर भएको यस सम्बन्धले नेपालको इतिहासमा मात्र नभएर वैदेशिक इतिहासमा नै ठूलो महत्व बोकेको छ ।",
              en: "After Nepal established friendly relations with China on Shrawan 17, 2012 B.S., another agreement was signed in Kathmandu on Ashoj 5, 2013 B.S. The Five Principles of Peaceful Coexistence (Panchsheel) were adopted as the fundamental principles guiding these diplomatic relations. In this way, the relationship between Nepal and China, which had been interrupted during the time of Chandra Shumsher, was re-established. The establishment of this relationship during Tanka Prasad Acharya's tenure holds great significance not only in Nepal's history but also in the history of its foreign relations."
          },
        ],
      },

      japan: {
        number: "३",
        title: {
          ne: "नेपाल जापानबीच दौत्य सम्बन्ध",
          en: "Diplomatic Relations Between Nepal and Japan",
        },
        content: [
          {
            ne: "एसियाको अर्को सम्पन्न देश जापानसँग टङ्कप्रसाद आचार्यको कार्यकालमा दौत्य सम्बन्ध कायम भयो । बुद्ध जन्मिएको देश नेपाल र बौद्ध धर्मको अनुयायी जापानबीच सांस्कृतिक सामीप्यता थियो । नेपाल जापानबीचको दौत्य सम्बन्धका विषयमा २०१३ साल श्रावण १३ गते बिहान ८ः४० मा नेपालको परराष्ट्र मन्त्रालयले एक प्रेस विज्ञप्ति जारी गरेको थियो । जापान र नेपालका बीचमा दौत्य सम्बन्ध स्थापना गर्न केही समयदेखि चलिरहेको प्रारम्भिक कार्य सफलतापूर्वक सम्पन्न भई नेपाल र जापानका बीच २०१३ साल साउन १३ गते दौत्य सम्बन्ध कायम भयो ।",
             en: "Diplomatic relations were established with Japan, another prosperous Asian country, during Tanka Prasad Acharya's tenure as Prime Minister. Nepal, the birthplace of Lord Buddha, and Japan, a country with a strong Buddhist tradition, shared close cultural ties. On Shrawan 13, 2013 B.S., at 8:40 a.m., Nepal's Ministry of Foreign Affairs issued a press statement regarding the establishment of diplomatic relations between Nepal and Japan. Following the successful completion of preliminary efforts that had been underway for some time, Nepal and Japan formally established diplomatic relations on Shrawan 13, 2013 B.S."
          },
        ],
      },

      srilanka: {
        number: "४",
        title: {
          ne: "नेपाल तथा सिलोनबीच दौत्य सम्बन्ध",
          en: "Diplomatic Relations Between Nepal and Ceylon",
        },
        content: [
          {
            ne: "यस्तैगरी अर्को बुद्ध धर्ममा विश्वास गर्ने देश थियो श्रीलंका । नेपाल र श्रीलंका बीच दौत्य सम्बन्धको स्थापना २०१४ साल असार १८ गते (सन् १९५७ जुलाई १) का दिन भएको थियो । यो समय प्रधानमन्त्री टङ्कप्रसाद आचार्यको प्रधानमन्त्रीत्वकालको अन्तिम अवस्था थियो । दक्षिण एसियाली राष्ट्रमा नेपालले सम्बन्ध राखेको भारतपछि अर्को राष्ट्र हुन गयो श्रीलंका ।",
              en: "Sri Lanka was another country with a strong Buddhist tradition. Diplomatic relations between Nepal and Sri Lanka were established on Ashar 18, 2014 B.S. (July 1, 1957). This took place towards the end of Tanka Prasad Acharya's tenure as Prime Minister. Following India, Sri Lanka became the next South Asian country with which Nepal established diplomatic relations."
          },
        ],
      },

      otherCountries: {
        number: "५",
        title: {
          ne: "अन्य राष्ट्रहरूसित दौत्य सम्बन्ध",
          en: "Diplomatic Relations with Other Countries",
        },
        content: [
          {
            ne: "यसै गरी २०१३ साल कार्तिक २६ गते नेपालको दौत्य सम्बन्ध स्विजरल्याण्डसँग हुन गयो । यसपछि २०१३ साल चैत्र २० गते नेपाल र मिश्रबीच दौत्य सम्बन्ध स्थापना भयो ।",
             en: "Similarly, Nepal established diplomatic relations with Switzerland on Kartik 26, 2013 B.S. Subsequently, diplomatic relations were established between Nepal and Egypt on Chaitra 20, 2013 B.S."
          },
        ],
      },
    },
  };

  return <BasicIntro data={introData} />;
};

export default Primeminister;
