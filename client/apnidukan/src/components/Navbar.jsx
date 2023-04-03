import React ,{useState}from 'react'
import './Navbar.css'
import logo from './Apni_dukan_logo.png'
import {Link,useNavigate} from 'react-router-dom'
import { Badge } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { HamburgerIcon } from "@chakra-ui/icons";
import SideMenuModal from './SideMenuModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const navigate = useNavigate();
  return (
   <header className='header'>
    <nav className='nav'>
      <div className="leftnav">
        <div className='hamicon'onClick={toggleModal}>
          <HamburgerIcon w={9} h={9} color='grey' backgroundColor={'#131921'}/>
          {isModalOpen && <SideMenuModal onClose={toggleModal} />}
        </div>
        <div className="logonav">
          <img onClick={()=>navigate("/")} src={logo} alt='logomissing'/>
        </div>
        <div className="navinput">
          <input type='text' name='' placeholder='Search Amazon.in'/>
          <div className="navsearch">
<SearchIcon w={8} h={8} className='navsearchicon'/>
          </div>

        </div>
      </div>
<div className="rightnav">
  <div className="navsignin">
    <Link to='/login'>Sign-In</Link>
  </div>
  
  <div className="navcart">
  <Badge colorScheme="black.900" w={"60%"} h={"80%"} onClick={()=>navigate("/cart")} >
      <FaShoppingCart className='carticon'  style={{ width: "100%", height: "100%" }} />
    </Badge>
    {/* <p>Cart</p> */}
  </div>

</div>
    </nav>
   </header>
  )
}

export default Navbar