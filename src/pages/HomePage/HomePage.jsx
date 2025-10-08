import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg' 
import MovieListComponent from '../../components/MovieListComponent/MovieListComponent'

const HomePage = () => {
  return (
    <div>
      <SliderComponent arrImages={[slider1, slider2, slider3]}/>
      <MovieListComponent />
    </div>
  )
}

export default HomePage;