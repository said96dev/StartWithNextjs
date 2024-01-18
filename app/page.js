import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="text-5xl mb-8 font-bold">
      <h1>Next.js</h1>
      <Link href="/client" className="btn btn-accent">
        Get started
      </Link>
    </div>
  )
}

export default Home
