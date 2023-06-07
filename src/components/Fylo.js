import React from 'react'
import logo from 'images/logo.svg'
import iconDocument from 'images/icon-document.svg'
import iconFolder from 'images/icon-folder.svg'
import iconUpload from 'images/icon-upload.svg'

const fylo = () => {
  return (
    <div className='container-fylo'>
        <img src={logo} alt='logo image' />
        <div className='icons'>
            <img src={iconDocument} alt='document icon'  className='dark-icons'/>
            <img src={iconFolder} alt='folder icon' className='dark-icons'/>
            <img src={iconUpload} alt='upload icon' className='dark-icons'/>
        </div>
    </div>
  ) 
}

export default fylo
