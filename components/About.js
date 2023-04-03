import React from "react";

export default function About() {
  return (
    <div className="mt-[150px] min-h-[80vh] flex flex-col items-center">
      <div className="lg:w-[700px]">
        <h1 className="text-center text-3xl font-[500]">JIGIT+ О НАС</h1>
        <p className="mt-5 text-center">
          JIGIT+ был создан от небоходимости припомнить всем и самим себе то
          что, чтобы дотигнуть ностоящего успеха - это Делать Больше, Говоря
          Меньше.
        </p>
        <p className="mt-5 text-center font-[500]">Двигайся в тишине.</p>
      </div>
      <div className="mt-10 grid lg:grid-cols-2">
        <div>
          <img
            src="/assets/about-img.jpg"
            alt=""
            width={2000}
            height={2000}
            className="h-[80vh] object-cover"
          />
        </div>
        <div className="mt-32 sm:mt-0">
          <video
            src="/assets/about.mp4"
            autoPlay
            muted
            loop
            className="w-full h-[80vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
