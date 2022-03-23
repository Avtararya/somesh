import React from 'react'
import Image from "next/image"

export default function AboutSection({ img, title, para, isLeft }) {
  return (

    isLeft ? <div className="flex  border-b border-yellow-900-900 justify-between bg-slate-200 text-blue-400 px-20 py-20 h-100vh">
      <div class=" text-xl flex-1 pr-20 sm:text-6xl">
        <p className="mx-0 py-10 px-20 pt-0">{title}</p>
        <p class=" text-lg px-10 mx-10   text-blue-400">
          {para}

        </p>
      </div>
      <div className="flex">
        <Image height={600} width={400}
          src={img}
          alt=""
        />
      </div>
    </div> :
      <div className="flex  border-b border-yellow-900-900 justify-between bg-slate-200 text-blue-400 px-20 py-20 h-100vh">
        <div className="flex">
          <Image height={600} width={400}
            src={img}
            alt=""
          />
        </div>
        <div class=" text-6xl flex-1 pr-20 ">
          <p className="mx-0 py-10 px-20 pt-0">{title}</p>
          <p class=" text-lg px-10 mx-10   text-blue-400">
            {para}

          </p>
        </div>

      </div>
  )
}
