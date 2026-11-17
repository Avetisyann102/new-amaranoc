import { useMemo, useState } from "react";
import { Header, Announce, Footer, FloatBtns } from "../components/Layout.jsx";
import { img, LISTINGS, CURRENCIES } from "../data.js";

const REGIONS = ["Դիլիջան", "Ծաղկաձոր", "Աշտարակ", "Գառնի", "Ջերմուկ"];

const CATEGORIES = [
  { icon: "🏠", label: "Առանձնատներ" },
  { icon: "⛺", label: "Frame houses" },
  { icon: "🛖", label: "Տնակներ" },
  { icon: "🏊", label: "Փակ լողավազան" },
  { icon: "🌊", label: "Աղմուկից հեռու" },
  { icon: "🏔️", label: "Ծփեղ տեսարան" },
];

const AMENITIES = ["Շոգեբաղնիք", "Ջակուզի", "Բիլիարդ", "Սեղանի թենիս", "Բացօթյա տաղավար", "Փակ տաղավար", "Մանղալ", "Թոնիր"];

const PER_PAGE = 12;

export default function Home() {
  const [regions, setRegions] = useState([]);
  const [currency, setCurrency] = useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [guests, setGuests] = useState(1);
  const [pool, setPool] = useState("Բոլորը");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [likes, setLikes] = useState([]);

  const cur = CURRENCIES[currency];

  const regionCount = (r) => LISTINGS.filter((l) => l.city === r).length;

  const filtered = useMemo(() => {
    return LISTINGS.filter((l) => {
      if (regions.length && !regions.includes(l.city)) return false;
      if (minPrice && l.price * cur.rate < Number(minPrice)) return false;
      if (maxPrice && l.price * cur.rate > Number(maxPrice)) return false;
      if (l.guests < guests) return false;
      if (pool !== "Բոլորը" && l.pool !== pool) return false;
      if (search && !l.city.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [regions, minPrice, maxPrice, guests, pool, search, cur]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const toggle = (arr, setArr, v) => {
    setArr(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
    setPage(1);
  };

  const formatPrice = (p) => Math.round(p * cur.rate).toLocaleString("en-US") + " " + cur.sign;

  return (
    <div className="app">
      <Header page="home" search={search} onSearch={(v) => { setSearch(v); setPage(1); }} />

      <div className="layout">
        <aside className="filters">
          <section>
            <h3>Տարածաշրջան</h3>
            {REGIONS.map((r) => (
              <label key={r} className="check">
                <input type="checkbox" checked={regions.includes(r)} onChange={() => toggle(regions, setRegions, r)} />
                {r} <span className="muted">{[180, 104, 38, 35, 27][REGIONS.indexOf(r)]}</span>
              </label>
            ))}
          </section>

          <section>
            <div className="row-between">
              <h3>Արժեք</h3>
              <div className="currencies">
                {CURRENCIES.map((c, i) => (
                  <button key={c.sign} className={"circle" + (i === currency ? " on" : "")} onClick={() => setCurrency(i)}>
                    {c.sign}
                  </button>
                ))}
              </div>
            </div>
            <div className="range">
              <input type="number" placeholder="Սկսած" value={minPrice} onChange={(e) => { setMinPrice(e.target.value); setPage(1); }} />
              <span>-</span>
              <input type="number" placeholder="Մինչև" value={maxPrice} onChange={(e) => { setMaxPrice(e.target.value); setPage(1); }} />
            </div>
          </section>

          <section>
            <h3>Մարդկանց թույլատրելի քանակ</h3>
            <div className="stepper">
              <button onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
              <span>{guests}</span>
              <button onClick={() => setGuests(guests + 1)}>+</button>
            </div>
          </section>

          <section>
            <h3>Լողավազան</h3>
            <div className="pills">
              {["Բոլորը", "Բաց", "Փակ", "Տաքացվող", "Առանց"].map((p) => (
                <button key={p} className={"pill" + (pool === p ? " on" : "")} onClick={() => { setPool(p); setPage(1); }}>
                  {p === "Առանց" ? "Առանց լողավազանի" : p}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3>Առավելություններ</h3>
            {AMENITIES.map((a) => (
              <label key={a} className="check">
                <input type="checkbox" /> {a}
              </label>
            ))}
          </section>
        </aside>

        <main className="content">
          <div className="toolbar">
            <button className="outline">Քարտեզ 🗺️</button>
            <button className="outline round" aria-label="Օրացույց">📅</button>
          </div>

          <div className="categories">
            {CATEGORIES.map((c) => (
              <button key={c.label} className="category">
                <span>{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>

          <div className="section-head">
            <h2>Լավագույն առաջարկներ</h2>
          </div>

          {visible.length === 0 && <p className="empty">Ոչինչ չգտնվեց։ Փոխիր ֆիլտրերը։</p>}

          <div className="grid">
            {visible.map((l) => (
              <article key={l.id} className="card">
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
                    {Array.from({ length: 6 }).map((_, i) => <i key={i} className={i === 0 ? "on" : ""} />)}
                  </div>
                </div>
                <div className="info">
                  <div className="meta">
                    <span>📍 {l.city}</span>
                    <span>👥 {l.guests}</span>
                    {l.rating && <span className="rating">★ {l.rating}</span>}
                  </div>
                  <div className="price">🏷️ {formatPrice(l.price)}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="pagination">
            <button disabled={current === 1} onClick={() => setPage(current - 1)}>←</button>
            {Array.from({ length: pages }).map((_, i) => (
              <button key={i} className={current === i + 1 ? "on" : ""} onClick={() => setPage(i + 1)}>
                {i + 1}
              </button>
            ))}
            <button disabled={current === pages} onClick={() => setPage(current + 1)}>→</button>
          </div>
        </main>
      </div>

      <Announce />

      <Footer />

      <FloatBtns />
    </div>
  );
}
