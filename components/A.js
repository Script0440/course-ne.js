import Link from "next/link";
import styles from "../styles/A.module.css";

export default function A({ text, href }) {
  return (
    <Link legacyBehavior href={href}>
      <a className="styles">{text}</a>
    </Link>
  );
}
