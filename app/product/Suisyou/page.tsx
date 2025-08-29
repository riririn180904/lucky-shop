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
          <h1>【未来予知！水晶玉】</h1>
          <p className={styles.price}>
            <span className={styles.old}>￥59,800</span>→￥10,980
          </p>
          <p>★★★★★(5,0)</p>
          <p>
             未来を見ることができるとされる特製水晶玉。
        古来より伝わる神秘的な力を持ち、持つ人に未来のビジョンを与え、人生の選択をサポートします。
        使用方法は簡単で、静かな場所で水晶玉を見つめるだけ。
        あなたの未来を明るく照らすためのパートナーとしてお使いください。
          </p>
          <button className={styles.btn}>カートに入れる</button>
        </div>
      </main>

      <section className={styles.reviews}>
        <h2>お客様の声</h2>
        <ul>
<li>★★★★★「はっきりではないけど、確かに見えた。」60代男性</li>
        <li>★★★★★「これはすごい。友人にも勧めます。」40代女性</li>
        <li>★★★★★「インテリアにしてもきれいだから最高」30代女性</li>
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

