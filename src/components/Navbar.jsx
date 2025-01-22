import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gray-900 text-white py-2'>
        <div className='logo'>
            <span className='text-2xl font-bold mx-9'>iTask</span>
        </div>
        <ul className="flex mx-8 gap-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
