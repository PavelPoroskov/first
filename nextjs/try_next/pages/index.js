import React from 'react'
import Link from 'next/link'
 
function Home() {
  return <React.Fragment>
    <div>Welcome to Next.js!</div>
    <Link prefetch href="about"><a>About This Site</a></Link>;
  </React.Fragment>
}

export default Home