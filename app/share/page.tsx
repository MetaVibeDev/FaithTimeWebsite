// 在文件的顶部加上 "use client"
'use client';

import Home from "@/app/page";

export default function Share(){
  if (typeof window !== "undefined") {
    console.log("client")
    window.location.href = 'faithtime://';
  }
  return <Home />;
}
