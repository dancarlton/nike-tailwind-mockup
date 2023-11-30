import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className='text-white font-montserrat leading-7 sm:max-w-sm mt-6 text-base'>
            Get your shoes ready for the season ahead.
          </p>
          <div className='flex items-center gap-5 mt-8 '>
            {socialMedia.map(icon => (
              <div className='flex items-center justify-center h-12 w-12 bg-white rounded-full hover:bg-slate-gray hover:rounded-2xl cursor-pointer'>
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map(foot => (
            <div key={foot}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                {foot.title}
              </h4>
              <ul>
                {foot.links.map(link => (
                  <li
                    className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'
                    key={link.name}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='text-white-400 flex justify-between mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat'>
          <img
            src={copyrightSign}
            alt='copy right sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
