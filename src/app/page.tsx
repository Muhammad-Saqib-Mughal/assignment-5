import React from 'react'
import Header from "./components/Header";
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <Header></Header>
    <div className='flex'>
      <div className="left  my-[30px]  w-[60vw] justify-center items-center flex flex-col flex-start gap-[15px]">

        <h1 className='font-bold text-[40px] w-[370px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>


        <p className='text-[#787054] font-medium w-[530px] pl-[80px] text-[18px]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>


        <button className='text-white bg-[#A29875] w-[160px] rounded-lg h-[35px] relative right-[105px] '>Explore Now</button>
      </div>


      <div className="right my-[30px] w-[40vw] justify-center items-center flex" >
        <img src="/images/image.png" alt="Image" className='w-[300px]' />
      </div>



    </div>
    </>
    
  );
}
