import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "./about/page";

export default function Home() {
  return (
    <main>
      <h1>Hello, World</h1>
      <AboutMe />
    </main>
  );
}