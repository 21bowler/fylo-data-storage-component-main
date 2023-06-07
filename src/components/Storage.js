import React from 'react'

const storage = () => {
  return (
    <div className='storage'>
      <p>You've used <span>815 GB</span> of your storage</p>
      <div className='text-container'>
          <div className='bg-bar'>
            <div className='storage-used'>
              <div className='circle-indicator'></div>
            </div>
          </div>
          <p className='zero'><strong>0 GB</strong></p>
          <p className='thousand'><strong>1000 GB</strong></p>
      </div>
      <p className='text-hover'><span className='big-bold'>185</span>GB LEFT</p>
  </div>
  )
}

export default storage
