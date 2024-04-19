import React from 'react'

export default function HeroPage() {
  return (
    <>
    <div className='flex gap-6 mx-[5%] items-center flex-col md:flex-row'>
      <div className='p-4'>
        <h2 className='mb-5 font-bold text-[24px]'>Meet Our Team!</h2>
        <p className='leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum ac dui in dapibus. Etiam eget mi eget libero varius sodales. Cras dictum finibus velit, sed hendrerit felis dignissim a. Maecenas vel congue nibh. Nulla lacinia euismod condimentum. Duis pellentesque hendrerit nibh nec lacinia. In ultrices felis vitae dapibus dignissim. In.</p>
      </div>
      <div className='min-w-[65%] m-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] gap-4   *:rounded-[16px]  *:w-full *:h-full *:object-cover'>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/9.png" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/2.png" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/3.png" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/1.png" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/4.png" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/5.png" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/7.png" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/8.png" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/6.png" />
      </div>
    </div>
    </>
  )
}
