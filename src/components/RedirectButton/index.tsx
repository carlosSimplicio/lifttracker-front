import Link from "next/link";
import React from "react";
import styles from "./RedirectButton.module.css";

export default function RedirectButton({
  children,
  redirectUrl,
}: {
  children: React.ReactNode;
  redirectUrl: string;
}) {
  return (
    <Link className={styles["button"]} href={redirectUrl}>
      {children}
    </Link>
  );
}
