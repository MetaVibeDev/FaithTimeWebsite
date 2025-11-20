"use client";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Header from "@/components/header";
import Detail from "@/components/detail";

import "../styles/satr.css";
import "../styles/slider.css";

import Card from "@/components/card";
import Download from "@/components/download";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navigation />
      <div id="home">
        <Header />
      </div>
      <div id="card">
        <Card />
      </div>
      <div id="detail">
        <Detail />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="download">
        <Download />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
