import React from 'react'
import Link from "next/link"
const AboutPage = () => {
  return (
    <div className='text-7xl'>
      <h1>About page</h1>
      <Link href ="/" className= "text-2xl">Home Page</Link>
      <Link href ="/about/info" className= "text-2xl">info Page</Link>

    </div>
  )
}

export default AboutPage