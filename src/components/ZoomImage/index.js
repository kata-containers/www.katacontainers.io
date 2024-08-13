import React from 'react'
import Zoom from 'react-medium-image-zoom'
import './index.css'

const ZoomImage = (props) => {
  return (
    <Zoom>
      <img {...props} />
    </Zoom>
  )
}

export default ZoomImage;