import React from 'react'
import Timeline from './Timeline/Timeline';
import Suggestion from './Suggestion';
import './home.css'

export default function Home({user}) {
  return (
    <>
      <div className="home_contents">
        <Timeline user={user}></Timeline>
        <Suggestion></Suggestion>
      </div>
    </>
  )
}
