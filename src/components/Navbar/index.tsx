import Image from "next/image";
import styles from "./Navbar.module.css";
import { roboto } from "@/app/fonts";

export default function Navbar() {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["logo-container"]}>
        <Image src="./logo.svg" alt="logo" fill></Image>
      </div>
      <div className={styles["title-container"] + " " + roboto.className}>
        <h1>LiftTracker</h1>
        <h2>Gerencie seus treinos</h2>
      </div>
    </div>
  );
}
