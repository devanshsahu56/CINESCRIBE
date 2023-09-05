import React from 'react'
import Link from 'next/link'
import page from '../app/page'
const pagenotfound = () => {
  return (
    <div>
      <h1>page not found</h1>
      <Link href="page">Redirect to Home Page</Link>
    </div>
  )
}

export default pagenotfound