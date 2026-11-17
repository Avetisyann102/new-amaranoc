import { useRef, useState } from "react";
import { Header, Announce, Footer, FloatBtns } from "../components/Layout.jsx";
import waiter from "../assets/services/waiter.jpg";
import bartender from "../assets/services/bartender.jpg";
import chef from "../assets/services/chef.jpg";
import host from "../assets/services/host.jpg";
import foam from "../assets/services/foam.jpg";

const TABS = [
  { key: "catering", icon: "🍽️", label: "Սպասարկում" },
  { key: "show", icon: "✨", label: "Շոու" },
  { key: "events", icon: "🎉", label: "Միջոցառումներ" },
  { key: "tech", icon: "🚀", label: "Տեխնիկա" },
  { key: "rent", icon: "🏡", label: "Օրավարձ" },
];

// Նկարները համապատասխանում են ծառայությանը (մատուցող՝ մատուցողի, բարմեն՝ բարմենի և այլն)
const SERVICES = {
  catering: [
    {
      id: "waiter", img: waiter, title: "Մատուցող", price: 25000,
      text: "Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի: Ծառայության արժեքը կախված է միջոցառման անցկացման վայրից: Մեր մատուցողները փորձառու են և ուշադիր։",
    },
    {
      id: "bartender", img: bartender, title: "Բարմեն", price: 25000,
      text: "Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին: Մեր թիմը կստեղծի ամենաուշագրավ կոկտեյլները։",
    },
    {
      id: "chef", img: chef, title: "Խոհարար", price: 35000,
      text: "Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից: Ունենալով հարուստ փորձ և տաղանդ, Մեր խոհարարները կպատրաստեն համեղ ուտեստներ։",
    },
    {
      id: "host", img: host, title: "Հանդիսավար", price: 60000,
      text: "Այս բաժնում մենք կփորձենք օգնել Ձեզ հանդիսավարի (թամադայի) ընտրության հարցում, քանի որ միայն իսկական պրոֆեսիոնալն է ապահովում լավ տրամադրություն։",
    },
    {
      id: "foam", img: foam, title: "Փրփուր Փարթի", price: 26900,
      text: "Նյութերը սերտիֆիկացված են, աչքերը չեն մռայլում, ալերգիա չեն առաջացնում, անվնաս են նաև բույսերի և լողավազանի ջրի համար։",
    },
  ],
};

export default function Services() {
  const [tab, setTab] = useState("catering");
  const [booked, setBooked] = useState([]);
  const tabsRef = useRef(null);
  const items = SERVICES[tab] || [];

  const toggle = (id) =>
    setBooked(booked.includes(id) ? booked.filter((x) => x !== id) : [...booked, id]);

  return (
    <div className="app services">
      <Header page="services" />

      <main className="services-main">
        <div className="svc-tabs-wrap">
          <div className="svc-tabs" ref={tabsRef}>
            {TABS.map((t) => (
              <button key={t.key} className={"svc-tab" + (tab === t.key ? " on" : "")} onClick={() => setTab(t.key)}>
                <span>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
          <button
            className="svc-next"
            aria-label="Հաջորդը"
            onClick={() => tabsRef.current && tabsRef.current.scrollBy({ left: 240, behavior: "smooth" })}
          >
            →
          </button>
        </div>

        {items.length === 0 && <p className="empty">Այս բաժնի ծառայությունները շուտով կավելացվեն։</p>}

        <div className="svc-grid">
          {items.map((s) => (
            <article key={s.id} className="svc-card">
              <img src={s.img} alt={s.title} loading="lazy" />
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="svc-foot">
                  <b>🏷️ {s.price.toLocaleString("en-US")} ֏</b>
                  <button className={booked.includes(s.id) ? "on" : ""} onClick={() => toggle(s.id)}>
                    {booked.includes(s.id) ? "Ամրագրված ✓" : "Ամրագրել"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Announce />
      <Footer />
      <FloatBtns />
    </div>
  );
}
