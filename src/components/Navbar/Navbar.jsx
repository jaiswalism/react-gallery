import React from 'react'


export default function Footer() {
  return (
    <div className='mb-10'>
    <div className='my-4 mx-8 flex justify-between items-center'>
      <a href="#">
        <img src="src\components\Navbar\Assets\logo.svg"  className='w-[140px] md:w-40' alt="logo" />
      </a>
      <div>
        <a href="#" className=' md:hidden'>
        <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>      
        </a>
        <div className="*:font-semibold *:mr-6 text-base hidden md:block">
          <a href="#" >Home</a>
          <a href="#" >About</a>
          <a href="#" >Events</a>
          <a href="#" >Teams</a>
          <a href="#" >Blogs</a>
          <a href="#" className='!mr-3 py-[12.5px] px-[14px] text-black bg-white rounded-xl'>Collab with us</a>
        </div>
      </div>
    </div>
    <hr className='w-[95%] mx-auto' />
  </div>
  )
}
