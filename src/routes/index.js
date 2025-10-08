import HomePage from '../pages/HomePage/HomePage'
import BookingPage from '../pages/BookingPage/BookingPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import MovieDetailPage from '../pages/MovieDetailPage/MovieDetailPage'
import AuthPage from '../pages/AuthPage/AuthPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage'
import CinemaFacilityPage from '../pages/CinemaFacilityPage/CinemaFacilityPage'
import MoviePage from '../pages/MoviePage/MoviePage'
export const routes = [
  { 
    path: '/',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: '/booking',
    page: BookingPage,
    isShowHeader: true
  },
  {
    path: '/cinema-facility',
    page: CinemaFacilityPage,
    isShowHeader: true
  },
  {
    path: 'movie-info',
    page: MoviePage,
    isShowHeader: true
  },
  {
    path: '/movie/:id',
    page: MovieDetailPage,
    isShowHeader: true
  },
  {
    path: '/auth',
    page: AuthPage,
  },
  
  {
    path: '/forgot-password',
    page: ForgotPasswordPage,
  },

  {
    path: '*',
    page: NotFoundPage
  }
]
