import React from 'react'
import Image from "next/image"

export default function AboutSection({ img, title, para, isLeft }) {
  return (
    <div className=" flex flex-col justify-center bg-red-200 text-blue-400 px-10 lg:px-25  py-10 lg:flex-row text-2xl">
      <div class="flex-1 flex flex-col items-start lg:px-28">
        <h1 className="text-2xl font-bold mb-4 lg:text-5xl">{title}</h1>
        <p class=" text-lg  text-blue-400 mb-2 md:text-xl lg:text-2xl">
          {para}
        </p>
      </div>
      <div className=" flex md:justify-center">
        <Image height={600} width={500}
          src={img}
          alt=""
        />
      </div>
    </div>
  )
}

  // :
  //       <div className="flex  border-b border-yellow-900-900 justify-between bg-slate-200 text-blue-400 px-20 py-20 h-100vh">
  //         <div className="flex">
  //           <Image height={600} width={400}
  //             src={img}
  //             alt=""
  //           />
  //         </div>
  //         <div class=" text-6xl flex-1 pr-20 ">
  //           <p className="mx-0 py-10 px-20 pt-0">{title}</p>
  //           <p class=" text-lg px-10 mx-10   text-blue-400">
  //             {para}

  //           </p>
  //         </div>

  //       </div>