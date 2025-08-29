// app/page.tsx
"use client";

import Link from "next/link";
import Header from "./components/header/header";
import "./globals.css"; 
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div>
      <Header />

      <section className={styles.hero}>
        <h1>人生を変える！奇跡のアイテムを期間限定で販売</h1>
        <p>あなたに必要なパワーを、今すぐお届けします。</p>
      </section>

      <main className={styles.products}>
        <div className={styles.card}>
          <h2>開運！霊験あらたか数珠</h2>
          <p className={styles.price}>
            <span className={styles.old}>￥99,800</span>→￥23,000
          </p>
          <p className={styles.rating}>★★★★★(4.9)</p>
          <Link href="/product/Juzu" className={styles.btn}>
            詳細を見る
          </Link>
        </div>

        <div className={styles.card}>
          <h2>邪気退散！幸運の壺</h2>
          <p className={styles.price}>
            <span className={styles.old}>￥150,000</span>→￥49,800
          </p>
          <p className={styles.rating}>★★★★☆(4.2)</p>
          <Link href="/product/Tsubo" className={styles.btn}>
            詳細を見る
          </Link>
        </div>

        <div className={styles.card}>
          <h2>未来予知！水晶玉</h2>
          <p className={styles.price}>
            <span className={styles.old}>￥59,800</span>→￥10,980
          </p>
          <p className={styles.rating}>★★★★★(5.0)</p>
          <Link href="/product/Suisyou" className={styles.btn}>
            詳細を見る
          </Link>
        </div>

        <div className={styles.card}>
          <h2>若返り！エネルギー水</h2>
          <p className={styles.price}>
            <span className={styles.old}>￥4,980</span>→￥880
          </p>
          <p className={styles.rating}>★★★★☆(4.3)</p>
          <Link href="/product/Water" className={styles.btn}>
            詳細を見る
          </Link>
        </div>
      </main>

      <footer>
        <p>会社概要｜利用規約｜特定商取引に基づく表記</p>
      </footer>
    </div>
  );
}
