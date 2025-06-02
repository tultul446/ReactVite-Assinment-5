import React from 'react'

const Footer1 = () => {
  return (
    <section className='w-auto container m-6 h-auto overflow-hidden'>




      <div className='container flex flex-warp justify-between items-center px-1 lg:px-9 mb-4 md:w-[1020px] text-center lg:ml-28'>


  <div className='space-y-2 text-start '>
    <h2 className='text-[20px] text-[#1E1E1E] font-bold'>About</h2>
    <ul className='text-sm text-gray-600 font-medium space-y-1'>
        <li>About MyFeedback</li>
        <li>Investor Relations</li>
        <li>Trust & Safety</li>
        
    </ul>
  </div>

  <div className='space-y-2'>
    <h2 className='text-[20px] text-[#1E1E1E] font-bold'>MyFeedback</h2>
    <ul className='text-sm text-gray-600 font-medium lg:space-y-3'>
        <li>MyFeedback for business</li>
        <li>Collections</li>
        <li>Talk</li>
        <li>MyFeedback blog</li>
        <li>Events</li>
        <li>MyFeedback blog</li>
        <li>Support</li>
        <li>Developers</li>
    </ul>
  </div>

  <div className='lg:mr-9 sm:mr-5 space-y-8 '>
    <div className='space-y-1'>
        <h3 className='text-[18px] text-[#1E1E1E] font-bold'>Language</h3>
        <select name="text" id="" >
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
            <option value="Hindi">Hindi</option>
        </select>
    </div>

    <div className='  '>
        <h3 className='text-[18px] text-[#1E1E1E] font-bold'>Countries</h3>
         <select name="text" id="">
            <option value="Paris">Paris</option>
            <option value="Singapour">Singapour</option>
            <option value="Italic">Italic</option>
        </select>
    </div>
  </div>

 </div>
<hr className='mt-18 text-gray-300'/>
<div className='mt-5 p-5 text-center text-[#1E1E1E] font-medium'>
<p>Copyright
Septembre 2023 myfeedback, designed by scott</p>
</div>
    </section>
  )
}

export default Footer1
