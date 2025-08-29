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
        <div>
        <nav>
          <Link href="/">ホーム</Link>
          <Link href="/">商品一覧</Link>
          <a href="#">お問い合わせ</a>
        </nav>
        </div>
      </header>

      <main className={styles.productDetail}>
        <div className={styles.detailImg}>商品画像</div>
        <div className={styles.detailInfo}>
          <h1>【邪気退散！幸運の壺】</h1>
          <p className={styles.price}>
            <span className={styles.old}>￥150,000</span>→￥49,800
          </p>
          <p>★★★★☆(4.2)</p>
          <p>
            幸運を呼び寄せ、邪気を払いのけるとされる特製の壺。
        古来より伝わる秘伝の技術で作られ、持つ人に安らぎと幸運をもたらします。
        壺の中には特別なパワーストーンが入っており、あなたの運気を高めるためのサポートをします。
        家庭やオフィスに置くだけで、空間全体のエネルギーを浄化し、ポジティブな波動を引き寄せます。
        ぜひ、あなたの生活空間に取り入れて、幸運を手に入れてください。
          </p>
          <button className={styles.btn}>カートに入れる</button>
        </div>
      </main>

      <section className={styles.reviews}>
        <h2>お客様の声</h2>
        <ul>
          <li>★★★★☆「場所はとるけど、効果抜群！」30代女性</li>
        <li>★★★★☆「喧嘩していた娘と仲直りできました。」50代女性</li>
        <li>★★★★★「悪いことが起きなくなった。ありがとうございます。」50代男性</li>
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

