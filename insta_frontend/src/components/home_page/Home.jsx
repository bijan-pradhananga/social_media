import React from 'react'
import Timeline from './Timeline';
import Suggestion from './Suggestion';
import './home.css'

export default function Home() {
  return (
    <>
      <div className="home_contents">
        <Timeline ></Timeline>
        <Suggestion></Suggestion>
      </div>
    </>
  )
}
