// Amaranoc-ի ուղարկված իրական նկարները՝ քարտերի համար։
export const LISTING_IMAGES = [
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

export const img = (id) => LISTING_IMAGES[(id - 1) % LISTING_IMAGES.length];

export const LISTINGS = [
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

export const CURRENCIES = [
  { sign: "֏", rate: 1 },
  { sign: "$", rate: 1 / 390 },
  { sign: "€", rate: 1 / 420 },
  { sign: "₽", rate: 1 / 4.3 },
];

