import React from 'react'

export default function Round1() {
  return (
    <div>
      <div className="w-96 h-96 relative top-0 left-0 animate-spin-slow">
        <div className="absolute -bottom-10 left-16 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
        <div className="absolute left-16 w-24 h-24 bg-purple-900 rounded-full blur-xl"></div>
        <div className="absolute w-28 h-28 top-32 -right-10 bg-pink-500 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}

