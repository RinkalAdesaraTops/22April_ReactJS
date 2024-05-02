import React from 'react'
import { Button } from 'react-bootstrap';

export const About = () => {
  const arr = [
    "abc","pqr","xyz"
  ];
  const listArr = arr.map((i,index)=> <li key={index}>{i}</li>)
  const arr_obj = [
    {
      name:"fg",
      price:20000
    },
    {
      name:"testing",
      price:20000
    },
    {
      name:"fg",
      price:22000
    },
    {
      name:"fg",
      price:21000
    }
  ]
  return (
    <>
    <div>About Us Page</div>
    <Button className='btn btn-primary'>Click</Button>
    <ul>
      {listArr}
    </ul>
    </>
  )
}
