import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-gray-300 p-10 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/">
          <a className="text-blue-600 text-2xl italic">PEASE</a>
        </Link>
        <p>Made with &#10084; by Peace Adeniji</p>
    </div>
  )
}

export default Footer