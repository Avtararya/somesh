import React from "react";
import Footer from "../Components/Layout/Footer";
import AboutSection from "../Components/AboutSection";
import { getData } from '../data/section-data'
export default function About() {
  const data = getData();
  console.log(data);
  return (
    <div>
      {data.map((a) => {
        return <AboutSection img={a.img} title={a.title} para={a.para} isLeft={a.isLeft} />
      })}
    </div >

  );
}













{/* <div className="flex  border-b border-yellow-900-900 justify-between bg-slate-200 text-blue-400 px-20 py-20 h-100vh">
          <div class=" text-6xl flex-1 pr-20 ">
            <p className="mx-0 py-10 px-20 pt-0">The quick brown fox ..</p>
            <p class=" text-lg px-10 mx-10   text-blue-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
              vel veritatis, dolores quo quos reiciendis consequatur fugit
              cupiditate! Culpa, dolor ea! Fuga aut error dolorum. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Explicabo vel
              veritatis, dolores quo quos reiciendis consequatur fugit cupiditate!
              Culpa, dolor ea! Fuga aut error dolorum. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Explicabo vel veritatis, dolores quo
              quos reiciendis consequatur fugit cupiditate! Culpa, dolor ea! Fuga
              aut error dolorum. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Explicabo vel veritatis, dolores quo quos
              reiciendis consequatur fugit cupiditate! Culpa, dolor ea! Fuga aut
              error dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Explicabo vel veritatis, dolores quo quos reiciendis
              consequatur fugit cupiditate! Culpa, dolor ea! Fuga aut error
              dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo vel veritatis, dolores quo quos reiciendis consequatur
              fugit cupiditate! Culpa, dolor ea! Fuga aut error dolorum. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Explicabo vel
              veritatis, dolores quo quos reiciendis consequatur fugit cupiditate!
              Culpa, dolor ea! Fuga aut error dolorum. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Explicabo vel veritatis, dolores quo
              quos reiciendis consequatur fugit.
              <p>
                vel veritatis, dolores quo quos reiciendis consequatur fugit
                cupiditate! Culpa, dolor ea! Fuga aut error dolorum. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Explicabo vel
                veritatis, dolores quo quos reiciendis consequatur fugit
                cupiditate! Culpa, dolor ea! Fuga aut error dolorum.
              </p>
            </p>
          </div>
          <div className="flex">
            <Image height={600} width={400}
              src="/s.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex  mx-0  justify-between bg-red-500-200 text-blue-400 px-20 py-20 h-100vh">
          <Image height={600} width={400}
            src="/s.jpg"
            alt=""
          />
          <div className="flex-1">
            <div class=" text-6xl flex-2 pl-20">
              <p className="mx-10 py-10 pt-0">The quick brown fox ..</p>
              <p class=" text-lg mx-10  text-blue-400 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
                vel veritatis, dolores quo quos reiciendis consequatur fugit
                cupiditate! Culpa, dolor ea! Fuga aut error dolorum. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Explicabo vel
                veritatis, dolores quo quos reiciendis consequatur fugit cupiditate!
                Culpa, dolor ea! Fuga aut error dolorum. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Explicabo vel veritatis, dolores quo
                quos reiciendis consequatur fugit cupiditate! Culpa, dolor ea! Fuga
                aut error dolorum. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Explicabo vel veritatis, dolores quo quos
                reiciendis consequatur fugit cupiditate! Culpa, dolor ea! Fuga aut
                error dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Explicabo vel veritatis, dolores quo quos reiciendis
                consequatur fugit cupiditate! Culpa, dolor ea! Fuga aut error
                dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo vel veritatis, dolores quo quos reiciendis consequatur
                fugit cupiditate! Culpa, dolor ea! Fuga aut error dolorum. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Explicabo vel
                veritatis, dolores quo quos reiciendis consequatur fugit cupiditate!
                Culpa, dolor ea! Fuga aut error dolorum. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Explicabo vel veritatis, dolores quo
                quos reiciendis consequatur fugit.
                <p>
                  vel veritatis, dolores quo quos reiciendis consequatur fugit
                  cupiditate! Culpa, dolor ea! Fuga aut error dolorum. Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Explicabo vel
                  veritatis, dolores quo quos reiciendis consequatur fugit
                  cupiditate! Culpa, dolor ea! Fuga aut error dolorum.
                </p>
              </p>
            </div>
          </div>

        </div>
      


      </div > */}