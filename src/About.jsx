import React from 'react'
import { Button } from 'react-bootstrap';

export const About = () => {
  const arr = [
    'test','sdhgfsdf','erutyuert'
  ]

let arrDisp = arr.map((i)=> <li>{i}</li>)
  return (
    <>
    <div>About Us Page</div>
    <Button className='btn btn-primary'>Click</Button>
    <ul>{arrDisp}</ul>
    </>
  )
}
