import React from 'react'

export default function Round2() {
  return (
    <div>
      <div className="w-[500px] h-[500px] ">
        <div className="w-full h-full  relative animate-reverse-spin">
          <div className="absolute -bottom-10 left-16 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
          <div className="absolute left-16 w-24 h-24 bg-purple-900 rounded-full blur-xl"></div>
          <div className="absolute w-28 h-28 top-32 -right-10 bg-pink-500 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
}
