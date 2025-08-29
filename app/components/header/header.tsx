"use client";
import Link from "next/link";
import "@/app/globals.css"; 
import styles from "../../page.module.css";
export default function Header() {
    return ( <header>
        <div className={styles.logo}>開運の道は開けました！</div>
        <div>
          <nav className={styles.nav}>
            <Link href="/">ホーム</Link>
            <Link href="/">商品一覧</Link>
            <Link href="#">お問い合わせ</Link>
          </nav>
        </div>
      </header> );

}