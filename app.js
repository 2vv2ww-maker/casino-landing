// Country Configuration Matrix with exact localized currencies and languages
const COUNTRY_CONFIGS = {
  // --- EUR REGION ---
  "DE": {
    lang: "de",
    bonus: "150% Bonus bis zu 1.000 € + 50 Freispiele + Glücksrad",
    ctaText: "JETZT BONUS SICHERN",
    currency: "EUR"
  },
  "AT": {
    lang: "de",
    bonus: "150% Willkommensbonus bis zu 1.000 € + 50 Freispiele + Glücksrad",
    ctaText: "JETZT SPIELEN",
    currency: "EUR"
  },
  "FR": {
    lang: "fr",
    bonus: "150% jusqu'à 1 000 € + 50 Tours Gratuits + Roue de la Fortune",
    ctaText: "OBTENIR LE BONUS",
    currency: "EUR"
  },
  "NL": {
    lang: "nl",
    bonus: "150% Welkomstbonus tot 1.000 € + 50 Gratis Spins + Rad van Fortuin",
    ctaText: "SPEEL NU",
    currency: "EUR"
  },

  // --- CHF (Switzerland) ---
  "CH": {
    lang: "de",
    bonus: "150% Bonus bis zu CHF 1'000 + 50 Freispiele + Glücksrad",
    ctaText: "JETZT ANMELDEN",
    currency: "CHF"
  },

  // --- PLN (Poland) ---
  "PL": {
    lang: "pl",
    bonus: "150% do 5 000 PLN + 50 Darmowych Spinów + Koło Fortuny",
    ctaText: "ZAGRAJ TERAZ",
    currency: "PLN"
  },

  // --- CZK (Czech Republic) ---
  "CZ": {
    lang: "cs",
    bonus: "150% až do 25 000 Kč + 50 Zatočení Zdarma + Kolo Štěstí",
    ctaText: "HRÁT NYNÍ",
    currency: "CZK"
  },

  // --- HUF (Hungary) ---
  "HU": {
    lang: "hu",
    bonus: "150% bónusz akár 400 000 Ft-ig + 50 Ingyenes Pörgetés + Szerencsekerék",
    ctaText: "BÓNUSZ BEVÁLTÁSA",
    currency: "HUF"
  },

  // --- DKK (Denmark) ---
  "DK": {
    lang: "da",
    bonus: "150% op til 10.000 kr. + 50 Free Spins + Lykkehjul",
    ctaText: "SPIL NU",
    currency: "DKK"
  },

  // --- NOK (Norway) ---
  "NO": {
    lang: "no",
    bonus: "150% opptil 10 000 kr + 50 Gratisspinn + Lykkehjul",
    ctaText: "HENT BONUS",
    currency: "NOK"
  },

  // --- RON (Romania) ---
  "RO": {
    lang: "ro",
    bonus: "150% până la 5.000 LEI + 50 Rotiri Gratuite + Roata Norocului",
    ctaText: "REVENDICĂ BONUSUL",
    currency: "RON"
  },

  // --- AUD / CAD / NZD (English Ocean / Americas) ---
  "AU": {
    lang: "en",
    bonus: "150% up to $1,500 AUD + 50 Free Spins + Lucky Wheel",
    ctaText: "CLAIM BONUS NOW",
    currency: "AUD"
  },
  "CA": {
    lang: "en",
    bonus: "150% up to $1,500 CAD + 50 Free Spins + Lucky Wheel",
    ctaText: "CLAIM BONUS NOW",
    currency: "CAD"
  },
  "NZ": {
    lang: "en",
    bonus: "150% up to $1,500 NZD + 50 Free Spins + Lucky Wheel",
    ctaText: "CLAIM BONUS NOW",
    currency: "NZD"
  },

  // --- KRW (South Korea) ---
  "KR": {
    lang: "ko",
    bonus: "최대 1,500,000 KRW 150% 보너스 + 50 프리스핀 + 럭키 휠",
    ctaText: "보너스 받기",
    currency: "KRW"
  },

  // --- BALKANS & SOUTHEAST EUROPE ---
  "BA": { // Bosnia & Herzegovina
    lang: "bs",
    bonus: "150% do 2.000 KM + 50 Besplatnih Spinova + Točak Sreće",
    ctaText: "PREUZMI BONUS",
    currency: "BAM"
  },
  "MK": { // North Macedonia
    lang: "mk",
    bonus: "150% до 50.000 МКД + 50 Бесплатни Спинови + Тркало на Sвездата",
    ctaText: "ЗЕМИ БОНУС",
    currency: "MKD"
  },
  "RS": { // Serbia
    lang: "sr",
    bonus: "150% do 100.000 RSD + 50 Besplatnih Spinova + Točak Sreće",
    ctaText: "PREUZMI BONUS",
    currency: "RSD"
  },
  "AL": { // Albania
    lang: "sq",
    bonus: "150% deri në 100.000 LEK + 50 Rrotullime Falas + Rrota e Fatit",
    ctaText: "MERR BONUSIN",
    currency: "ALL"
  },

  // --- DEFAULT FALLBACK ---
  "DEFAULT": {
    lang: "en",
    bonus: "150% up to €1,000 + 50 Free Spins + Lucky Wheel",
    ctaText: "CLAIM BONUS NOW",
    currency: "EUR"
  }
};

// Rendering Engine Function
function renderLandingPage(countryCode) {
  // Grab matching config or fallback to DEFAULT
  const geo = COUNTRY_CONFIGS[countryCode] ? countryCode : "DEFAULT";
  const config = COUNTRY_CONFIGS[geo];

  // Set document language
  document.documentElement.lang = config.lang;

  // Dynamically update text elements on the page
  const headlineElem = document.getElementById("bonus-headline");
  const ctaElem = document.getElementById("claim-btn");

  if (headlineElem) headlineElem.innerText = config.bonus;
  if (ctaElem) ctaElem.innerText = config.ctaText;

  // Append tracking parameters to outgoing affiliate URL
  if (ctaElem) {
    const baseUrl = "https://your-affiliate-link.com/click";
    ctaElem.href = `${baseUrl}?geo=${geo.toLowerCase()}&curr=${config.currency}`;
  }
}

// Automatically trigger on page load
document.addEventListener("DOMContentLoaded", () => {
  const userCountry = window.USER_COUNTRY || "DEFAULT";
  renderLandingPage(userCountry.toUpperCase());
});