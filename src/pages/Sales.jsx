import { useMemo, useState } from "react";
import { Header, Announce, Footer, FloatBtns } from "../components/Layout.jsx";
import { img, CURRENCIES } from "../data.js";

const DISCOUNTS = [
  {
    percent: "-15%",
    title: "Ձեղչ կախված ամրագրման օրերի քանակից",
    text: "Ստացիր 5-15% զեղչ կատարելով ամրագրում 3-ից մինչև 20 օր:",
  },
  {
    percent: "-10%",
    title: "Ամենահայտնի Reel-ը սոցիալական հարթակում",
    text: "Վիդեո տարբերակով ներկայացրու քո լավագույն օրերից մեկը amaranoc.am ի առանձնատներից մեկում և ստացիր 15% զեղչ",
  },
  {
    percent: "-5%",
    title: "Ավելացրու 5% զեղչ քո յուրաքանչյուր 3-րդ այցի համար",
    text: "Իրականացրու բազմաթիվ ամրագրումներ և յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ",
  },
];

const GIFT_AMOUNTS = [50000, 60000, 70000, 80000, 90000, 100000];

// Թեժ առաջարկներ (գնով աճման կարգով)
const HOT = [
  { id: 7, city: "Դիլիջան", guests: 10, price: 35000, rating: 5 },
  { id: 2, city: "Բջնի", guests: 6, price: 45000 },
  { id: 33, city: "Բջնի", guests: 25, price: 75000, rating: 5 },
  { id: 1, city: "Աշտարակ", guests: 60, price: 75000 },
  { id: 12, city: "Ծաղկաձոր", guests: 12, price: 80000 },
  { id: 5, city: "Պտղնի", guests: 30, price: 90000 },
  { id: 4, city: "Նոր Հաճն", guests: 30, price: 100000, rating: 5 },
  { id: 9, city: "Ծաղկաձոր", guests: 20, price: 130000 },
  { id: 19, city: "Արզնի", guests: 50, price: 140000, rating: 5 },
  { id: 20, city: "Դիլիջան", guests: 20, price: 150000, rating: 5 },
  { id: 10, city: "Դիլիջան", guests: 6, price: 155000 },
  { id: 14, city: "Ծաղկաձոր", guests: 8, price: 170000, rating: 5 },
];

const MAX = 400000;
const STEP = 5000;
const PAGE = 9;

export default function Sales() {
  const [gift, setGift] = useState(null);
  const [ordered, setOrdered] = useState(false);
  const [currency, setCurrency] = useState(0);
  const [range, setRange] = useState([0, MAX]);
  const [shown, setShown] = useState(PAGE);
  const [likes, setLikes] = useState([]);

  const cur = CURRENCIES[currency];
  const fmt = (amd) => Math.round(amd * cur.rate).toLocaleString("en-US") + " " + cur.sign;

  const filtered = useMemo(
    () => HOT.filter((l) => l.price >= range[0] && l.price <= range[1]),
    [range]
  );
  const visible = filtered.slice(0, shown);

  const setMin = (v) => setRange([Math.min(Number(v), range[1] - STEP), range[1]]);
  const setMax = (v) => setRange([range[0], Math.max(Number(v), range[0] + STEP)]);

  const pct = (v) => (v / MAX) * 100;

  const order = () => {
    if (gift) setOrdered(true);
  };

  return (
    <div className="app sales">
      <Header page="sales" />

      <main className="sales-main">
        <h1 className="line-title"><span>ՀԱՏՈՒԿ ԶԵՂՋԵՐ</span></h1>

        <div className="discounts">
          {DISCOUNTS.map((d) => (
            <article key={d.percent} className="discount">
              <b>{d.percent}</b>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <section className="gift">
          <div className="gift-text">
            <h2>
              ՊԱՏՎԻՐԻ՛Ր <em>ՆՎԵՐ ՔԱՐՏ</em>
              <br />
              ՔՈ ԿԱՄ ԸՆԿԵՐԵՐԻԴ ՀԱՄԱՐ
            </h2>
            <hr />
            <p>
              Բաց մի թող մեր բացառիկ զեղչի քարտերը: Եթե պլանավորում ես քո հաջորդ արձակուրդը՝
              ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային քարտերը առաջարկում են
              անգերազանցելի խնայողություններ ամառանոցների և ծառայությունների լայն տեսականիով։
              Ընտրիր զեղչի չափը քարտի վրա:
            </p>
          </div>
          <div className="gift-card">
            <div className="gift-logo">
              AMARAN<span className="logo-box" />C<small>.AM</small>
              <div className="by">BY HASCE.AM</div>
            </div>
            <div className="amounts">
              {GIFT_AMOUNTS.map((a) => (
                <button
                  key={a}
                  className={gift === a ? "on" : ""}
                  onClick={() => { setGift(a); setOrdered(false); }}
                >
                  {a.toLocaleString("en-US")} ֏
                </button>
              ))}
            </div>
            <button className="gift-order" onClick={order}>
              {ordered ? "Շնորհակալություն ✓" : "Պատվիրել"}
            </button>
          </div>
        </section>

        <h1 className="line-title"><span>ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ</span></h1>

        <div className="price-filter">
          <div className="pf-left">
            <span>Տարադրամ</span>
            <div className="currencies">
              {CURRENCIES.map((c, i) => (
                <button key={c.sign} className={"circle" + (i === currency ? " on" : "")} onClick={() => setCurrency(i)}>
                  {c.sign}
                </button>
              ))}
            </div>
          </div>
          <div className="pf-slider">
            <div className="track">
              <div className="fill" style={{ left: pct(range[0]) + "%", right: 100 - pct(range[1]) + "%" }} />
              <span className="tag" style={{ left: pct(range[0]) + "%" }}>{fmt(range[0])}</span>
              <span className="tag" style={{ left: pct(range[1]) + "%" }}>{fmt(range[1])}</span>
            </div>
            <input type="range" min={0} max={MAX} step={STEP} value={range[0]} onChange={(e) => setMin(e.target.value)} aria-label="Նվազագույն գին" />
            <input type="range" min={0} max={MAX} step={STEP} value={range[1]} onChange={(e) => setMax(e.target.value)} aria-label="Առավելագույն գին" />
          </div>
        </div>

        {visible.length === 0 && <p className="empty">Այս գնային տիրույթում առաջարկներ չկան։</p>}

        <div className="grid sales-grid">
          {visible.map((l) => (
            <article key={l.id + l.city + l.price} className="card">
              <div className="photo">
                <img src={img(l.id)} alt={l.city} loading="lazy" />
                <button
                  className={"heart" + (likes.includes(l.id) ? " liked" : "")}
                  onClick={() => setLikes(likes.includes(l.id) ? likes.filter((x) => x !== l.id) : [...likes, l.id])}
                  aria-label="Ավելացնել ընտրյալներում"
                >
                  {likes.includes(l.id) ? "♥" : "♡"}
                </button>
                <div className="dots">
                  {Array.from({ length: 8 }).map((_, i) => <i key={i} className={i === 0 ? "on" : ""} />)}
                </div>
              </div>
              <div className="info">
                <div className="meta">
                  <span>📍 {l.city}</span>
                  <span>👥 {l.guests}</span>
                  {l.rating && <span className="rating">★ {l.rating}</span>}
                </div>
                <div className="price">🏷️ {fmt(l.price)}</div>
              </div>
            </article>
          ))}
        </div>

        {shown < filtered.length && (
          <div className="more">
            <button onClick={() => setShown(shown + PAGE)}>Ցուցադրել ավելին</button>
          </div>
        )}
      </main>

      <Announce />
      <Footer />
      <FloatBtns />
    </div>
  );
}
