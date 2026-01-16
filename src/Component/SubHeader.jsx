import { Key } from 'lucide-react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SubHeader = () => {
  
  const phoneData =  {category:"phone",
      data:"+ ९७७-०१५४२२६७९",
      phoneLogo:<FaPhoneAlt size="10px"/>
    }
    const emailData = {category:"email",
       data:"tpamf93@gmail.com",
       socialmedialogo:[ {link:"#",logo: <FaFacebookF size="13px"/>}, {link:"#",logo:<FaTwitter size="13px"/>}, {link:"#",logo:<FaInstagram size="13px"/>},{logo:<FaLinkedinIn size="13px"/>,link:"#" }]

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
          emailData.socialmedialogo.map((logo,index)=>{
            return <Link to={logo.link} key={index} className='p-2 hover:text-[#193283] cursor-pointer transition-colors duration-300 ease-in-out'>{logo?.logo}</Link>
          })
        }
        </div>
      </div>

      </div>

    </div>
  )
}

export default SubHeader
