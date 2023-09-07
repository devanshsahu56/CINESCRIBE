import React from 'react'
import Link from 'next/link'
const pagenotfound = () => {
  return (
    <div>
      <h1>page not found</h1>
      <Link href="/">Redirect to Home Page</Link>
    </div>
  )
}

export default pagenotfound