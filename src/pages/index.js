import React from "react";
import { default as ToDoList } from './ToDoList';

export default function Home() {
  return (
    <>
      {/* Row1 */}
      <div className="h-44 bg-col1">
        <h1 className="text-3xl text-white font-bold text-center pt-4">Backed by the best</h1>
        <h2 className="text-lg text-white text-center ">Wealthup is backed and supported by</h2>
        <div className="flex justify-center">
          {/* Header img */}
          <img style={{ width: "30rem" }} src="/images/img1.png"></img>
        </div>
      </div>

      {/*  Row2 */}
      <div className="h-80 bg-col2">
        <h3 className="text-2xl text-white font-bold text-center pt-4">Transforming Lives-Financially!</h3>
        <div className="grid grid-cols-[2fr_1fr]">

          <div className="flex relative gap-5 ml-32 mt-12">
            <div>
              {/* Person img */}
              <img className="h-20 mt-2" src="/images/img2.png"></img>
            </div>
            <div className="text-white">
              <h5 className="text-lg">Simrin Sirur</h5>
              <h5 className="text-sm">Journalist</h5>
              <h5 className="text-sm leading-3">The Print, Gurugram</h5>
              <p style={{ width: "25rem" }} className="mt-3">"I was afraid to learn about investments and savings because
                it seemed to fly over my head, but Ankit was extremely patient
                and walked me through everything... I now feel more confident to handle my own money."
              </p>
            </div>
            {/* Arrow img */}
            <img className="h-6 absolute right-36 top-16" src="/images/img5.svg"></img>
          </div>
          <div>
            {/* List of people img */}
            <img className="h-72 mb-12" src="/images/img3.png"></img>
          </div>
        </div>

      </div>

      {/*  Row3 */}
      <div className="h-20 bg-col3">
        <div className="flex justify-center" >
          {/* footer imag */}
          <img style={{ height: "5rem", width: "60rem" }} src="/images/img4.png"></img>
        </div>
      </div>

      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <ToDoList />
    </div>
      </>
  );
        }




