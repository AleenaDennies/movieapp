import { Typography } from '@mui/material'
import React from 'react'
import Moviecard from './Moviecard'
import MovieList from './Movielist'

const Home = () => {
  return (
    <div>
     
      <MovieList/>
      <Moviecard/>
    </div>
  )
}

export default Home
