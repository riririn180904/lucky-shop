// app/product/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import "../../globals.css"; // 
import styles from "../product.module.css";

export default function ProductDetailPage() {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addComment = () => {
    const text = input.trim();
    if (!text) return;
    setComments([text, ...comments]);
    setInput("");
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>奇跡の開運ショップ</div>
        <nav>
          <Link href="/">ホーム</Link>
          <Link href="/">商品一覧</Link>
          <a href="#">お問い合わせ</a>
        </nav>
      </header>

      <main className={styles.productDetail}>
        <div className={styles.detailImg}>商品画像</div>
        <div className={styles.detailInfo}>
          <h1>【開運！霊験あらたか数珠】</h1>
          <p className={styles.price}>
            <span className={styles.old}>￥99,800</span>→￥23,000
          </p>
          <p>★★★★★(4.9)</p>
          <p>
            霊験あらたかなパワーが宿るとされる特製数珠。 代々伝わる職人技で一本一本手作りされています。
            持つ人に幸運をもたらし、心を落ち着け、願いを叶えるためのサポートをします。
            生年月日をご登録いただくと、それをもとにパワーストーンを選別し、あなただけの特別な数珠をお届けすることが可能です。
          </p>
          <button className={styles.btn}>カートに入れる</button>
        </div>
      </main>

      <section className={styles.reviews}>
        <h2>お客様の声</h2>
        <ul>
          <li>★★★★★「これを買ってから宝くじが当たりました！」30代男性</li>
          <li>★★★★☆「なんとなく運気が上がってる気がします。」40代女性</li>
          <li>★★★★★「毎日持ち歩いています。心が落ち着きます。」20代女性</li>
        </ul>
      </section>

      <section className={styles.commentSection}>
        <h2>コメントを投稿する</h2>
        <div className={styles.commentForm}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="コメントを入力してください"
          />
          <button onClick={addComment}>投稿</button>
        </div>
        <ul className={styles.commentList}>
          {comments.map((c, idx) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

