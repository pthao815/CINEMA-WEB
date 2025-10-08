import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

const DefaultComponent = ({children, selectedLocation, onOpenLocaionModal}) => {
  return (
    <div>
        <HeaderComponent
          selectedLocation={selectedLocation}
          onOpenLocaionModal={onOpenLocaionModal}
          />
        {children}
        <FooterComponent />
    </div>
  )
}

export default DefaultComponent

