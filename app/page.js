import Image from "next/image";
import Header from "./_components/Header";
import Dashboard from "./dashboard/page";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}
