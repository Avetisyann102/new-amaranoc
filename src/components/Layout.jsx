import { useState } from "react";

export function Header({ page, search, onSearch }) {
  return (
      <header className="header">
        <a className="logo" href="#/">
          AMARAN<span className="logo-box" />C<small>.AM</small>
        </a>
        <nav className="nav">
          <a className={page === "home" ? "active" : ""} href="#/">Գլխավոր</a>
          <a className={page === "sales" ? "active" : ""} href="#/sales">Ձեղչեր</a>
          <a className={page === "services" ? "active" : ""} href="#/services">Ծառայություններ</a>
          <a className={page === "about" ? "active" : ""} href="#/about">Մեր մասին</a>
        </nav>
        <div className="header-right">
          <button className="icon-btn" aria-label="Լեզու">🌐</button>
          <button className="icon-btn" aria-label="Անձնական էջ">👤</button>
          <div className="search">
            <input
              placeholder="Որոնում"
              value={search ?? ""}
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
            <span>🔍</span>
          </div>
        </div>
      </header>
  );
}

export function Announce() {
  const [sent, setSent] = useState(false);
  return (
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
  );
}

export function Footer() {
  return (
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
  );
}

export function FloatBtns() {
  return (
      <div className="float-btns">
        <a href="tel:041611611" aria-label="Զանգել">📞</a>
        <a href="mailto:amaranoc.info@gmail.com" aria-label="Գրել">✉️</a>
      </div>
  );
}
