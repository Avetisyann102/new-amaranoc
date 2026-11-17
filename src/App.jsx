import { useMemo, useState } from "react";
import "./App.css";

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

// Amaranoc-ի ուղարկված իրական նկարները՝ քարտերի համար։
const LISTING_IMAGES = [
  "https://api.amaranoc.am/compressed_images/compressed_1794746498651--0.5503574691841018image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1760001713184--0.39324297563530597image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1763196873802--0.32875657677659165image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1774603454003--0.8626553444149481image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1762850175455--0.6550219483737489image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1764500077731--0.12333157753130175image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1758095203425--0.034694092059661896image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1786016384446--0.5674212438235726image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1764083598180--0.6582491079586374image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1794920560158--0.55456357006747image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1794045359882--0.10667854956158696image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1793966264844--0.07420987715778882image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1794741132844--0.4038665335477851image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1794746397915--0.5205697760783368image.webp",
  "https://api.amaranoc.am/compressed_images/compressed_1792592255894--0.541534662904487image.webp"
];

const img = (id) => LISTING_IMAGES[(id - 1) % LISTING_IMAGES.length];

const LISTINGS = [
  { id: 1, city: "Ծաղկաձոր", guests: 12, price: 80000, rating: 5, pool: "Փակ" },
  { id: 2, city: "Բջնի", guests: 4, price: 45000, rating: 5, pool: "Առանց" },
  { id: 3, city: "Բյուրական", guests: 3, price: 35000, pool: "Առանց" },
  { id: 4, city: "Նորք", guests: 30, price: 100000, rating: 5, pool: "Փակ" },
  { id: 5, city: "Պտղնի", guests: 30, price: 90000, pool: "Փակ" },
  { id: 6, city: "Բյուրական", guests: 3, price: 35000, pool: "Առանց" },
  { id: 7, city: "Դիլիջան", guests: 10, price: 35000, rating: 5, pool: "Առանց" },
  { id: 8, city: "Ծաղկաձոր", guests: 2, price: 50000, rating: 5, pool: "Առանց" },
  { id: 9, city: "Ծաղկաձոր", guests: 20, price: 130000, pool: "Փակ" },
  { id: 10, city: "Դիլիջան", guests: 6, price: 25000, pool: "Բաց" },
  { id: 11, city: "Օհանավան", guests: 8, price: 100000, pool: "Բաց" },
  { id: 12, city: "Ջերմուկ", guests: 2, price: 38000, pool: "Առանց" },
  { id: 13, city: "Ջերմուկ", guests: 8, price: 30000, pool: "Առանց" },
  { id: 14, city: "Դսեղ", guests: 6, price: 30000, pool: "Առանց" },
  { id: 15, city: "Դսեղ", guests: 4, price: 20000, pool: "Առանց" },
  { id: 16, city: "Աղվերան", guests: 3, price: 70000, pool: "Առանց" },
  { id: 17, city: "Աղվերան", guests: 4, price: 40000, pool: "Առանց" },
  { id: 18, city: "Էջմիածին", guests: 60, price: 70000, pool: "Բաց" },
  { id: 19, city: "Դիլիջան", guests: 20, price: 150000, pool: "Փակ" },
  { id: 20, city: "Ձովունի", guests: 40, price: 50000, pool: "Բաց" },
  { id: 21, city: "Դիլիջան", guests: 18, price: 35000, pool: "Առանց" },
  { id: 22, city: "Դիլիջան", guests: 6, price: 40000, pool: "Առանց" },
  { id: 23, city: "Ապարան", guests: 2, price: 58000, pool: "Առանց" },
  { id: 24, city: "Արովյան", guests: 30, price: 90000, pool: "Բաց" },
  { id: 25, city: "Դիլիջան", guests: 4, price: 35000, pool: "Առանց" },
  { id: 26, city: "Գառնի", guests: 50, price: 60000, pool: "Առանց" },
  { id: 27, city: "Արզական", guests: 25, price: 25000, pool: "Առանց" },
  { id: 28, city: "Էջմիածին", guests: 70, price: 60000, pool: "Բաց" },
  { id: 29, city: "Դիլիջան", guests: 4, price: 33000, pool: "Առանց" },
  { id: 30, city: "Ծաղկաձոր", guests: 4, price: 45000, pool: "Առանց" },
  { id: 31, city: "Դիլիջան", guests: 20, price: 100000, pool: "Բաց" },
  { id: 32, city: "Ակունք", guests: 25, price: 45000, pool: "Առանց" },
  { id: 33, city: "Աշտարակ", guests: 60, price: 75000, rating: 5, pool: "Փակ" },
  { id: 34, city: "Երևան", guests: 100, price: 120000, pool: "Բաց" },
];

const CURRENCIES = [
  { sign: "֏", rate: 1 },
  { sign: "$", rate: 1 / 390 },
  { sign: "€", rate: 1 / 420 },
  { sign: "₽", rate: 1 / 4.3 },
];

const PER_PAGE = 12;

export default function App() {
  const [regions, setRegions] = useState([]);
  const [currency, setCurrency] = useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [guests, setGuests] = useState(1);
  const [pool, setPool] = useState("Բոլորը");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [likes, setLikes] = useState([]);
  const [sent, setSent] = useState(false);

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
      <header className="header">
        <a className="logo" href="#">
          AMARAN<span className="logo-box" />C<small>.AM</small>
        </a>
        <nav className="nav">
          <a className="active" href="#">Գլխավոր</a>
          <a href="#">Ձեղչեր</a>
          <a href="#">Ծառայություններ</a>
          <a href="#">Մեր մասին</a>
        </nav>
        <div className="header-right">
          <button className="icon-btn" aria-label="Լեզու">🌐</button>
          <button className="icon-btn" aria-label="Անձնական էջ">👤</button>
          <div className="search">
            <input
              placeholder="Որոնում"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
            <span>🔍</span>
          </div>
        </div>
      </header>

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

      <section className="announce">
        <div className="announce-box">
          <h2>ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ</h2>
          <p>Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ</p>
          {sent ? (
            <p className="thanks">Շնորհակալություն, մենք կկապնվենք Ձեզ հետ։</p>
          ) : (
            <div className="announce-form">
              <input placeholder="Անուն Ազգանուն" />
              <input placeholder="Հեռախոսահամար" />
              <input placeholder="Էլ. հասցե" />
              <button onClick={() => setSent(true)}>Ուղարկել</button>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <h2>ԿՈՆՏԱԿՏՆԵՐ</h2>
        <div className="contacts">
          <span>📞 041-611-611</span>
          <span>✉️ amaranoc.info@gmail.com</span>
          <span>📷 amaranoc.am</span>
          <span>📘 amaranoc.am</span>
          <span>📍 Թումանյան 5</span>
        </div>
        <a className="policy" href="#">Գաղտնիության քաղաքականություն</a>
        <p className="company">Ամառանոց ՍՊԸ | Amaranoc LLC | Амараноц ООО</p>
      </footer>

      <div className="float-btns">
        <a href="tel:041611611" aria-label="Զանգել">📞</a>
        <a href="mailto:amaranoc.info@gmail.com" aria-label="Գրել">✉️</a>
      </div>
    </div>
  );
}
