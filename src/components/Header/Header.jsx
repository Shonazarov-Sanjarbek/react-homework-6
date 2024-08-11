import React from 'react'
import logo from "../../assets/logo.png"


const Header = ({items, about}) => {

    const headerItem =  items?.map((li, inx) => (
        <a href="#">
          <li key={inx} className='cursor-pointer hover:text-gray-600 font-bold'>
              {li}
          </li>
        </a>
    ))

    const call = about?.map((p, inx) => (
        <p key={inx} className='text-xl	s'>{p}</p>
    ))

  return (
    <div>
              <div className="header py-5">
        <div className="containers">
          <div className="flex items-center justify-between">
            <div className=''>
              <img src={logo} alt="" />
            </div> 
            <div className=''>
              <ul className='flex gap-8'>
                {headerItem}
              </ul>
            </div>
            <div className='flex flex-col items-end'>
              <div className='flex gap-2'>
                {call}
              </div>
              <div>
                <span className='text-sm	text-slate-300'>Заказать звонок</span>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Header
