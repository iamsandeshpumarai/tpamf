import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';


const SubHeader = () => {
  
  const phoneData =  {category:"phone",
      data:"+९७७-०१५४२२६७९",
      phoneLogo:<FaPhoneAlt size="10px"/>
    }
    const emailData = {category:"email",
       data:"contact@tpamf.org.np",
       socialmedialogo:[<FaFacebookF size="13px"/>, <FaTwitter size="13px"/>,<FaInstagram size="13px"/>,<FaLinkedinIn size="13px"/>]

    }

  return (
    <div>
      <div className='sub-header  justify-around bg-[#0B0C26] text-white h-[50px] items-center hidden lg:flex'>

      <div className='flex'>
        <p className='p-2'>{phoneData.phoneLogo}</p>
        <p className='text-[13px] p-1'> सम्पर्क: <span>{phoneData.data}</span>
        </p>
      </div>

      <div className='flex'>
        <p className='p-2'><FaEnvelope size="13px"/></p>
        <p className='text-[13px] mr-12 p-1'>Email: <span className='hover:text-[#193283] cursor-pointer transition-colors duration-300 ease-in-out'>{emailData.data}</span> </p> 
        <div className='flex'>
          {
          emailData.socialmedialogo.map((logo)=>{
            return <p className='p-2 hover:text-[#193283] cursor-pointer transition-colors duration-300 ease-in-out'>{logo}</p>
          })
        }
        </div>
      </div>

      </div>

    </div>
  )
}

export default SubHeader
