import React, { useContext, useEffect, useState ,useRef} from 'react';
import { AppContext } from '../../AppContext';
import axios from 'axios'
import api from '../../api'
import { useNavigate } from 'react-router-dom'
import BuildingPopup from '../BuildingPopup';
import Cookies from 'js-cookie'
import ExpandedHeader from './ExpandedHeader';
import style from './Header.module.css'

export default function Header() {
  // const navigate = useNavigate()

  // const { acc, setAcc, buildings, setBuildings, selectedBuilding, setSelectedBuilding } = useContext(AppContext);
  // const logOut = async () => {
  //   try {
  //     await api.post('/logout')
  //     localStorage.clear()
  //     setAcc({})
  //     navigate('/')
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  // useEffect(() => {
  //   console.log(acc)
  //   if (acc && acc._id) {
  //     api.get(`/building/${acc._id}`)
  //       .then(response => {
  //         setBuildings(response.data.buildings)
  //         setSelectedBuilding(response.data.buildings[0])
  //       })
  //       .catch(error => {
  //         console.error('Error fetching buildings by Owner ID:', error);
  //       })
  //   }
  // }, [acc?._id])

  // useEffect(() => {
  //   try {
  //     api.get('/acc/check-auth')
  //       .then(response =>
  //         setAcc(response.data.user)
  //       )
  //       .catch(error => {
  //         // navigate('/')
  //         console.log(error)
  //       }
  //       )
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   console.log(acc)
  // }, [])

  // const [isPopupVisible, setPopupVisible] = useState(false)
  // const hidePopup = () => setPopupVisible(false)
  // const showPopup = () => setPopupVisible(true)
  const vendors={
    categoryName:'Nhà Cung Cấp',
    categoryItems: [['Nhà Cung Cấp Của Bạn','Quản Lý Nhà Cung Cấp','Trò Chuyện Với Nhà Cung Cấp','Đánh Giá Nhà Cung Cấp'],
    
    ['Địa Điểm Tổ Chức','Nhiếp Ảnh Gia','Tiệc Cưới','Áo Cưới','Nhà Tổ Chức Đám Cưới','Bánh Cưới','DJ','Quay Phim'],
    [ "Cho Thuê Đồ Cưới",
      "Dịch Vụ Trang Điểm",
      "Hoa Cưới",
      "Ban Nhạc",
      "Dịch Vụ Quay Bar",
      "Rước Dâu", "Thiệp cưới"]]
  }
  const planningTools={
    categoryName:'Công cụ lập kế hoạch',
    categoryItems: [['Kế hoạch của bạn','Checklist','Ngân sách'],
    
    ['Khách mời','Gửi lời tới khách mời'],
    [ 'Online RSVP']]
  }
  const attireAndRings={
    categoryName:'Trang phục và Nhẫn',
    categoryItems: [['Váy cưới','Váy chữ A','Váy dạ hội','Váy nàng tiên cá','Váy body','Váy ngắn' ],
        ['Bộ vest và áo tuxedo','Váy phù dâu'],
    [ 'Nhẫn cưới',"Nhẫn cắt kiểu công chúa", "Nhẫn cắt kiểu Asscher", "Nhẫn cắt kiểu đệm", "Nhẫn cắt kiểu ngọc lục bảo", "Nhẫn cắt kiểu hình quả lê", "Nhẫn cắt kiểu rực rỡ", "Nhẫn cắt kiểu tròn", "Nhẫn cắt kiểu hình bầu dục"]]
  }
  const vendorsRef = useRef(null);
  const handleClickOutside = (event) => {
    if (vendorsRef.current && !vendorsRef.current.contains(event.target)) {
      setExpandedCategory(null);
    }
  };
  const [expandedCategory, setExpandedCategory] = useState(null);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleExpanded = (category) => {
    setExpandedCategory(prevCategory => (prevCategory === category ? null : category));
  };
  return (
    <div className='fixed-top d-flex flex-column' >
      <nav class="navbar  navbar-expand-lg bg-body-tertiary  
    shadow p-2  bg-body-tertiary rounded d-flex flex-row
    justify-content-around
    " style={{ width: '100vw', zIndex: '999', height: '10vh' }}>

        <div className='d-flex flex-column' >
          <div>
            Wedding Planner
          </div>
          <div className='d-flex' >
            <h4 className={`me-3 ${style.headeritem}`} onClick={()=>toggleExpanded('planningTools')} >Công cụ lập kế hoạch</h4>
            <h4 className={`me-3 ${style.headeritem}`} onClick={()=>toggleExpanded('vendors')} >Nhà cung cấp</h4>
              <h4 className={`me-3 ${style.headeritem}` } onClick={()=>toggleExpanded('attireAndRings')} >Trang phục, Nhẫn</h4>
            <h4 className={`me-3 ${style.headeritem}`}>Lập kế hoạch tự động</h4>
          </div>


        </div>
        <div className='d-flex'>
          <i class="bi bi-chat"></i>
          <div>Account</div>

        </div>
      </nav>
    
      {expandedCategory === 'vendors' && (
        <div ref={vendorsRef}>
          <ExpandedHeader category={vendors} />
        </div>
      )}
      {expandedCategory === 'planningTools' && (
        <div ref={vendorsRef}>
          <ExpandedHeader category={planningTools} />
        </div>
      )}
 {expandedCategory === 'attireAndRings' && (
        <div ref={vendorsRef}>
          <ExpandedHeader category={attireAndRings} />
        </div>
      )}


    </div>
  );
}
