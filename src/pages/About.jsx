import { useState } from "react";
import { Header, Announce, Footer, FloatBtns } from "../components/Layout.jsx";

const REVIEWS = [
  {
    name: "Gurgen",
    avatarType: "dark",
    avatarText: "G",
    text: "Thanks for providing great service👍👍",
  },
  {
    name: "Armine",
    avatarType: "black",
    avatarText: "",
    text: "😍 Очень довольна, Они очень помогли мне с выбором дома, и дом был просто замечательным.",
  },
  {
    name: "Aghajanyan Zara",
    avatarType: "gray",
    avatarText: "👤",
    text: "Ավելի իդեալական չէր կարա լիներ)))",
  },
  {
    name: "Monika Sargsyan",
    avatarType: "blue",
    avatarText: "M",
    text: "Հիասքանչ սպասարկում😍",
  },
];

export default function About() {
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewSent, setReviewSent] = useState(false);

  return (
    <div className="app about-page">
      <Header page="about" />

      {/* 1. Վերևի մեծ Hero նկար */}
      <div className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=80"
          alt="Amaranoc About"
        />
      </div>

      <main className="about-main">
        {/* 2. ՄԵՐ ՄԱՍԻՆ */}
        <section className="about-row">
          <div className="about-img">
            <img
              src="https://api.amaranoc.am/compressed_images/compressed_1794746498651--0.5503574691841018image.webp"
              alt="Մեր մասին"
            />
          </div>
          <div className="about-card">
            <div className="about-card-head">
              <span className="dash" />
              <h2>ՄԵՐ ՄԱՍԻՆ</h2>
              <span className="line" />
            </div>
            <div className="about-scroll">
              <p>
                Amaranoc.am-ը վստահության, հավատարմության և գերազանցության ձգտման
                պատմություն է: Հանդիսանալով ամառանոցների վարձակալության ոլորտում
                համար մեկ ընկերությունը, մենք ձեզ առաջարկում ենք շքեղ
                առանձնատների, քոթեջների, վիլլաների և ամառանոցների լայն ու բազմազան
                ընտրություն: Մեր հիմնական առաքելությունն է սպասարկել մեր
                հաճախորդներին ամենաբարձր մակարդակով՝ ապահովելով անմոռանալի հանգիստ։
              </p>
            </div>
          </div>
        </section>

        {/* 3. ՄԵՐ ԹԻՄԸ */}
        <section className="about-row">
          <div className="about-card">
            <div className="about-card-head">
              <span className="dash" />
              <h2>ՄԵՐ ԹԻՄԸ</h2>
              <span className="line" />
            </div>
            <div className="about-text">
              <p>
                պարզապես չենք ստեղծում տեսացանց, մենք ստեղծում ենք պատմություններ,
                և յուրաքանչյուր առանձնատուն (որոնք դուք տեսնում եք մեր կայքում) այդ
                պատմության մի մասն է: Օրեցօր ընդլայնվելով՝ մենք ձգտում ենք
                նորագույն չափանիշներ սահմանել ոլորտում և որ ամենակարևորն է մենք օր
                օրի հստակ ու կայուն քայլերով շարժվում ենք առաջ՝ բարելավելով մեր
                երկրում սպասարկման ոլորտը՝ շքեղ առանձնատները հասանելի դարձնելով
                բոլորին:
              </p>
            </div>
          </div>
          <div className="about-img">
            <img
              src="https://api.amaranoc.am/compressed_images/compressed_1760001713184--0.39324297563530597image.webp"
              alt="Մեր թիմը"
            />
          </div>
        </section>
      </main>

      {/* 4. Միջանկյալ լայն նկար */}
      <div className="about-banner">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80"
          alt="Amaranoc"
        />
      </div>

      <main className="about-main">
        {/* 5. ԻՆՉՈՒ ՀԱՄԱԳՈՐԾԱԿՑԵԼ AMARANOC.AM -Ի ՀԵՏ */}
        <section className="about-row">
          <div className="about-img">
            <img
              src="https://api.amaranoc.am/compressed_images/compressed_1763196873802--0.32875657677659165image.webp"
              alt="Ինչու համագործակցել Amaranoc.am-ի հետ"
            />
          </div>
          <div className="about-card">
            <h2 className="about-card-big-title">
              ԻՆՉՈՒ
              <br />
              ՀԱՄԱԳՈՐԾԱԿՑԵԼ
              <br />
              AMARANOC.AM -Ի ՀԵՏ
            </h2>
            <div className="about-scroll">
              <p>
                Amaranoc.am-ի ընտրությունը երաշխավորում է շքեղության,
                անհատականացված սպասարկման բարձր մակարդակ և իհարկե վստահության հիմքի
                վրա կառուցված կայուն համագործակցություն.
              </p>
            </div>
          </div>
        </section>

        {/* 6. ՄԱՐՔԵԹԻՆԳ */}
        <section className="about-row">
          <div className="about-card">
            <div className="about-card-head">
              <span className="dash" />
              <h2>ՄԱՐՔԵԹԻՆԳ</h2>
              <span className="line" />
            </div>
            <div className="about-scroll">
              <p>
                Amaranoc.am-ում մենք գիտակցում ենք մարքեթինգի առանցքային դերը
                ամառանոցների վարձակալության ոլորտում: Մեր ռազմավարական
                մարքեթինգային նախաձեռնությունները ներառում են էքսկլյուզիվ
                համագործակցություններ և շեշտադրում են մեր ամառանոցների եզակի
                առանձնահատկությունները. 10 մասնագետից բաղկացած մեր պրոֆեսիոնալ
                մարքեթինգի թիմը աշխատում է բարձր արդյունավետությամբ։
              </p>
            </div>
          </div>
          <div className="about-img">
            <img
              src="https://api.amaranoc.am/compressed_images/compressed_1774603454003--0.8626553444149481image.webp"
              alt="Մարքեթինգ"
            />
          </div>
        </section>

        {/* 7. ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ */}
        <section className="about-row">
          <div className="about-img">
            <img
              src="https://api.amaranoc.am/compressed_images/compressed_1762850175455--0.6550219483737489image.webp"
              alt="Մեր պատմությունը"
            />
          </div>
          <div className="about-card">
            <h2 className="about-card-big-title">ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ</h2>
            <div className="about-scroll">
              <p>
                Amaranoc.am - ը հիմնադրվել է 2023 թվականի հուլիսի 1-ին և հենց այդ
                օրվանից սկսած մինչ օրս մենք չենք դադարում զարմացնել մեր
                հաճախորդներին և գոհացնել մեր գործընկերներին: Մենք հպարտ ենք, որ
                այս նախագիծը մեր ողջ թիմի համատեղ ջանքերի արդյունքն է և
                հանդիսանում է Hasce.am անշարժ գույքի ընկերության ամենակարևոր մաս:
                Յուրաքանչյուր քայլ ամրապնդել է մեր հիմնադիր սկզբունքները և տվել է
                մեզ մեծ ձեռքբերումներ։
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Ներքևի լայն նկար */}
      <div className="about-banner">
        <img
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1920&q=80"
          alt="Amaranoc Photographer"
        />
      </div>

      {/* 9. ԿԱՐԾԻՔՆԵՐ */}
      <section className="about-reviews">
        <h2 className="line-title">
          <span>ԿԱՐԾԻՔՆԵՐ</span>
        </h2>

        <div className="reviews-grid">
          {REVIEWS.map((r) => (
            <article key={r.name} className="review-item">
              <div className="review-head">
                <span className={"review-avatar " + r.avatarType}>
                  {r.avatarText}
                </span>
                <b>{r.name}</b>
              </div>
              <div className="review-stars">★★★★★</div>
              <p>{r.text}</p>
            </article>
          ))}
        </div>

        <div className="review-cta">
          <button onClick={() => { setReviewOpen(!reviewOpen); setReviewSent(false); }}>
            Թողնել կարծիք
          </button>
        </div>

        {reviewOpen && (
          <div className="review-form">
            {reviewSent ? (
              <p className="thanks" style={{ color: "var(--dark)", textAlign: "center" }}>
                Շնորհակալություն Ձեր կարծիքի համար։
              </p>
            ) : (
              <>
                <input placeholder="Ձեր անունը" />
                <textarea rows={3} placeholder="Գրեք Ձեր կարծիքը..." />
                <button onClick={() => setReviewSent(true)}>Ուղարկել</button>
              </>
            )}
          </div>
        )}
      </section>

      <Announce />
      <Footer />
      <FloatBtns />
    </div>
  );
}
