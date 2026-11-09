import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Sparkles, Flower2, Music, Users, Flame, UtensilsCrossed, Play, Pause,
  MapPin, Clock, Shirt, X, Heart, Send, Hotel, ChevronLeft, ChevronRight,
  CalendarDays, Check, Bus, Crown, Calendar, Gift, Compass
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DEFAULT DATA – RASHMI & ARPIT                                      */
/*  colorTheme: ganesh | haldi | sangeet | baraat | shaadi | reception */
/* ------------------------------------------------------------------ */
export const defaultWeddingData = {
  couple: {
    bride: "रश्मि ठाकुर (Rashmi)",
    groom: "अर्पित मरावी (Arpit)",
    hashtag: "#RashmiWedsArpit",
    date: "2026-11-26T19:00:00+05:30",
    bannerImage: "/images/couple-hero.jpg",
    blessing: "परमपिता परमात्मा एवं कुलदेवता के शुभाशीर्वाद से, हम आपको हमारे विवाह के मांगलिक अवसर पर सादर आमंत्रित करते हैं।",
    families: "श्रीमति जानकी एवं श्री मान सिंह ठाकुर (जबेरा, दमोह)  •  श्री बल्देव प्रसाद मरावी (मंडला)",
  },
  audioSrc: "/Aaj Sajeya Goldie Sohel 128 Kbps.mp3",
  events: [
    {
      id: "mehendi",
      name: "मेहंदी उत्सव (Mehendi Ceremony)",
      englishTitle: "Mehendi Ceremony",
      tagline: "सतरंगी मेहंदी, मधुर संगीत एवं सखियों का उल्लास",
      date: "2026-11-24",
      dayName: "मंगलवार, 24 नवम्बर 2026",
      time: "दोपहर 02:00 बजे से (2:00 PM Onwards)",
      venue: "निज निवास जबेरा, जिला दमोह (म.प्र.)",
      locationName: "जबेरा (जिला दमोह)",
      mapLink: "https://maps.google.com/?q=Jabera+Damoh",
      dressCode: "हरा / टील एवं उत्सव परिधान (Green / Teal)",
      colorTheme: "sangeet",
      phase: "home",
      description: "रश्मि के हाथों में रचेगी अर्पित के नाम की मेहंदी। सखियों संग लोकगीत, ढोलक की थाप एवं सतरंगी मेहंदी उत्सव।",
      quote: "“हाथों में रचेगी पिया नाम की मेहंदी, खिलेगा खुशियों का संसार”"
    },
    {
      id: "haldi",
      name: "मण्डप एवं हल्दी (Mandap & Haldi)",
      englishTitle: "Mandap & Haldi Ceremony",
      tagline: "मण्डपाच्छादन, मातृकापूजन एवं तेल-हल्दी की शुभ रस्म",
      date: "2026-11-25",
      dayName: "बुधवार, 25 नवम्बर 2026",
      time: "दोपहर 12:00 बजे से (12:00 PM Onwards)",
      venue: "निज निवास जबेरा, जिला दमोह (म.प्र.)",
      locationName: "जबेरा (जिला दमोह)",
      mapLink: "https://maps.google.com/?q=Jabera+Damoh",
      dressCode: "पीला / केसरिया पारंपरिक परिधान (Yellow / Mustard)",
      colorTheme: "haldi",
      phase: "home",
      description: "वैदिक विधि से मण्डप प्रतिष्ठा, कुलदेवता पूजन एवं परिजनों व स्नेहीजनों द्वारा हल्दी-उबटन का पावन संस्कार।",
      quote: "“हल्दी का उबटन, मंगलमय गान, खुशियों से महकेगा सारा जहान”"
    },
    {
      id: "prasthan",
      name: "प्रस्थान जबलपुर (Departure to Jabalpur)",
      englishTitle: "Departure for Wedding Venue",
      tagline: "निज निवास जबेरा से जबलपुर मैरिज गार्डन हेतु प्रस्थान",
      date: "2026-11-26",
      dayName: "गुरूवार, 26 नवम्बर 2026",
      time: "सुबह 10:00 बजे",
      venue: "निज निवास जबेरा से रिद्धि-सिद्धि मैरिज गार्डन, जबलपुर",
      locationName: "जबेरा से जबलपुर",
      mapLink: "https://maps.google.com/?q=Jabera+Damoh",
      dressCode: "उत्सव यात्रा परिधान (Festive wear)",
      colorTheme: "baraat",
      phase: "wedding",
      description: "समस्त स्नेही स्वजनों के साथ जबेरा से जबलपुर विवाह स्थल के लिए बस द्वारा मंगलमय प्रस्थान।",
      quote: "“जबेरा से जबलपुर की ओर मंगल यात्रा, खुशियों की सौगात लिए”"
    },
    {
      id: "shaadi",
      name: "मुख्य विवाह एवं पाणिग्रहण (Pheras)",
      englishTitle: "Wedding Ceremony & Seven Vows",
      tagline: "पाणिग्रहण संस्कार — सात फेरे एवं पवित्र वैदिक वचन",
      date: "2026-11-26",
      dayName: "गुरूवार, 26 नवम्बर 2026 (शुभ लग्न)",
      time: "शाम 07:00 बजे से (शुभ मुहूर्त)",
      venue: "रिद्धि-सिद्धि मैरिज गार्डन, पाटन बाईपास के पास, ग्रिड कॉर्पोरेशन के सामने, जबलपुर",
      locationName: "जबलपुर (Jabalpur)",
      mapLink: "https://maps.google.com/?q=Riddhi+Siddhi+Marriage+Garden+Jabalpur",
      dressCode: "सिन्दूरी लाल, मैरून एवं ज़री गोल्ड",
      colorTheme: "shaadi",
      phase: "wedding",
      isMainWedding: true,
      description: "पवित्र अग्नि के समक्ष सात वचनों के साथ दाम्पत्य जीवन का शुभारम्भ। वरमाला, कन्यादान एवं सिन्दूरदान।",
      quote: "“अग्नि के फेरे, सात वचन, सात जन्मों का पावन संगम”"
    },
    {
      id: "reception",
      name: "स्वरूचिभोज (Wedding Dinner & Reception)",
      englishTitle: "Grand Reception & Dinner",
      tagline: "प्रीतिभोज समारोह — शाम 7:30 बजे से आपके आगमन तक",
      date: "2026-11-26",
      dayName: "गुरूवार, 26 नवम्बर 2026",
      time: "शाम 07:30 बजे से आपके आगमन तक",
      venue: "रिद्धि-सिद्धि मैरिज गार्डन, पाटन बाईपास, जबलपुर",
      locationName: "जबलपुर (Jabalpur)",
      mapLink: "https://maps.google.com/?q=Riddhi+Siddhi+Marriage+Garden+Jabalpur",
      dressCode: "पारंपरिक उत्सव वेशभूषा (Wedding attire)",
      colorTheme: "reception",
      phase: "wedding",
      description: "शाही प्रीतिभोज एवं स्वागत समारोह। नवदम्पति को सस्नेह शुभाशीर्वाद देकर इस शाम को स्मरणीय बनाएं।",
      quote: "“स्नेह की महक, स्वाद की मिठास, आपका आगमन ही हमारा उल्लास”"
    },
  ],
  stay: {
    title: "विवाह स्थल एवं मार्ग दर्शन (Venue & Welcome)",
    note: "विवाह स्थल: रिद्धि-सिद्धि मैरिज गार्डन, पाटन बाईपास के पास, ग्रिड कॉर्पोरेशन के सामने, जबलपुर। 26 नवम्बर को सुबह 10:00 बजे जबेरा से बस द्वारा जबलपुर प्रस्थान की विशेष व्यवस्था है। आप सभी का आगमन हमारे लिए परम हर्ष का विषय होगा।",
  },
  gallery: [
    "/images/couple-hero.jpg",
    "/images/couple-portrait.jpg",
    "/images/couple-standing.png",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  ],
  wishes: [
    { name: "ठाकुर परिवार (जबेरा)", message: "हमारी प्यारी रश्मि और अर्पित को वैवाहिक जीवन की अनन्त मंगलकामनाएं। सदा खुश रहो।" },
    { name: "मरावी परिवार (मंडला)", message: "अर्पित और रश्मि के पाणिग्रहण संस्कार पर दोनों को हार्दिक बधाई एवं शुभाशीर्वाद।" },
    { name: "समस्त स्नेहीजन एवं मित्र", message: "दो परिवारों का यह पावन मिलन सदा हर्षित एवं मंगलमय रहे। 26 नवम्बर को जबलपुर में मिलेंगे!" },
  ],
};

/* ------------------------------------------------------------------ */
/*  THEMES                                                             */
/* ------------------------------------------------------------------ */
const THEMES = {
  ganesh:    { icon: Sparkles,        accent: "#B45309", soft: "#FEF3E2", badge: "मातृकापूजन" },
  haldi:     { icon: Flower2,         accent: "#D97706", soft: "#FEF3C7", badge: "मण्डप व हल्दी" },
  sangeet:   { icon: Music,           accent: "#0F766E", soft: "#E6F7F5", badge: "संगीत", alt: "#C026D3" },
  baraat:    { icon: Bus,             accent: "#065F46", soft: "#F0FDF4", badge: "प्रस्थान" },
  shaadi:    { icon: Flame,           accent: "#8B0000", soft: "#FBEAEA", badge: "पाणिग्रहण (सात फेरे)" },
  reception: { icon: UtensilsCrossed, accent: "#991B1B", soft: "#FEF2F2", badge: "स्वरूचिभोज" },
};
const GOLD = "linear-gradient(135deg,#FDE68A,#D4AF37 50%,#B8860B)";
const parseDay = (s) => { const [y, m, d] = s.slice(0, 10).split("-").map(Number); return new Date(y, m - 1, d); };

/* ------------------------------------------------------------------ */
/*  SMALL PIECES                                                       */
/* ------------------------------------------------------------------ */
const Mandala = ({ className = "", size = 56 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true" fill="none" stroke="#D4AF37" strokeWidth="1.4">
    <circle cx="50" cy="50" r="6" fill="#D4AF37" />
    <circle cx="50" cy="50" r="46" strokeDasharray="2 4" />
    <circle cx="50" cy="50" r="30" />
    {Array.from({ length: 12 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 50 50)`}>
        <path d="M50 20 C44 32 44 40 50 46 C56 40 56 32 50 20Z" />
        <circle cx="50" cy="12" r="2.2" fill="#D4AF37" />
      </g>
    ))}
  </svg>
);

const Divider = () => (
  <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
    <span className="h-px w-16 sm:w-32" style={{ background: "linear-gradient(90deg,transparent,#D4AF37)" }} />
    <Mandala size={44} className="wt-spin" />
    <span className="h-px w-16 sm:w-32" style={{ background: "linear-gradient(270deg,transparent,#D4AF37)" }} />
  </div>
);

const Corner = ({ pos }) => {
  const map = { tl: "top-2 left-2", tr: "top-2 right-2 rotate-90", br: "bottom-2 right-2 rotate-180", bl: "bottom-2 left-2 -rotate-90" };
  return (
    <svg viewBox="0 0 40 40" className={`absolute w-8 h-8 ${map[pos]}`} fill="none" stroke="#D4AF37" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 38V10C2 5 5 2 10 2H38" />
      <path d="M8 38V14C8 11 11 8 14 8H38" opacity=".5" />
      <circle cx="10" cy="10" r="2" fill="#D4AF37" />
    </svg>
  );
};

const SectionTitle = ({ title, sub }) => (
  <Reveal className="text-center mb-10 px-4">
    <h2 className="font-serif text-3xl sm:text-5xl text-[#720917] tracking-wide">{title}</h2>
    <span className="block mx-auto mt-3 h-0.5 w-24 rounded" style={{ background: GOLD }} />
    {sub && <p className="mt-3 text-stone-600 max-w-xl mx-auto font-sans">{sub}</p>}
  </Reveal>
);

const Toran = () => (
  <div className="absolute top-0 inset-x-0 z-20 flex justify-between px-1 pointer-events-none" aria-hidden="true">
    {Array.from({ length: 15 }).map((_, i) => (
      <div key={i} className="wt-swing flex flex-col items-center" style={{ animationDelay: `${(i % 5) * 0.35}s` }}>
        <span className="block w-px bg-amber-300/80" style={{ height: i % 2 ? 14 : 30 }} />
        <span className="block rounded-full" style={{ width: 15, height: 15, background: i % 2 ? "#F59E0B" : "#FB923C", boxShadow: "0 0 10px rgba(245,158,11,.8)" }} />
        <span className="block rounded-full mt-0.5" style={{ width: 9, height: 9, background: i % 2 ? "#FB923C" : "#F59E0B" }} />
      </div>
    ))}
  </div>
);

function EventCard({ ev, onFlowerShower }) {
  const th = THEMES[ev.colorTheme] || THEMES.shaadi;
  const Icon = th.icon;
  const isMainWedding = ev.colorTheme === "shaadi" || ev.id === "shaadi";

  const googleCalLink = () => {
    const title = encodeURIComponent(`${ev.name} | रश्मि एवं अर्पित विवाह`);
    const details = encodeURIComponent(`${ev.tagline}\nसमय: ${ev.time}\nस्थान: ${ev.venue}\nवेशभूषा: ${ev.dressCode || ""}\n#RashmiWedsArpit`);
    const loc = encodeURIComponent(ev.venue);
    const dStr = ev.date.replace(/-/g, "");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dStr}T133000Z/${dStr}T183000Z&details=${details}&location=${loc}`;
  };

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-white border-2 transition-all duration-300 flex flex-col justify-between ${
        isMainWedding
          ? "border-amber-400 ring-4 ring-amber-400/40 shadow-2xl scale-[1.01]"
          : "border-amber-200/90 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-amber-300"
      }`}
    >
      {/* Top Scalloped Color Banner */}
      <div
        className="h-3.5 w-full"
        style={{
          background: isMainWedding
            ? "linear-gradient(90deg, #720917, #D4AF37 35%, #8B0000 70%, #D4AF37, #720917)"
            : th.alt
            ? `linear-gradient(90deg, ${th.accent}, ${th.alt})`
            : `linear-gradient(90deg, ${th.accent}, #F59E0B)`
        }}
      />

      {/* Main Wedding Highlight Ribbon */}
      {isMainWedding && (
        <div className="bg-gradient-to-r from-[#720917] via-[#8B0000] to-[#720917] text-amber-200 px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center justify-between border-b border-amber-400/40">
          <span className="flex items-center gap-1.5 font-bold">
            <Crown size={15} className="text-amber-300 animate-bounce" />
            ★ मुख्य विवाह एवं पाणिग्रहण संस्कार ★
          </span>
          <span className="text-[10px] bg-amber-400 text-[#720917] font-extrabold px-2.5 py-0.5 rounded-full shadow">
            शुभ लग्न
          </span>
        </div>
      )}

      {/* Decorative Ornate Corners */}
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      {/* Card Content Area */}
      <div
        className="p-6 sm:p-7 flex-1 flex flex-col justify-between"
        style={{
          background: isMainWedding
            ? "linear-gradient(180deg, #FFFDF8 0%, #FFFFFF 50%)"
            : `linear-gradient(180deg, ${th.soft} 0%, #FFFFFF 45%)`
        }}
      >
        <div>
          {/* Header Row: Circular Emblem + Date Pill */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <span
                className="grid place-items-center h-13 w-13 rounded-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0"
                style={{
                  background: isMainWedding
                    ? "linear-gradient(135deg, #720917, #8B0000)"
                    : th.accent,
                  border: "2px solid #D4AF37"
                }}
              >
                <Icon size={24} />
              </span>
              <div>
                <span
                  className="inline-block px-3 py-0.5 rounded-full text-xs font-bold border shadow-xs"
                  style={{
                    color: th.accent,
                    borderColor: th.accent,
                    background: th.soft
                  }}
                >
                  {th.badge}
                </span>
                <span className="block text-[11px] font-semibold text-stone-600 mt-0.5">
                  📅 {ev.dayName || ev.date}
                </span>
              </div>
            </div>

            {/* Interactive Flower Shower Button */}
            <button
              type="button"
              onClick={onFlowerShower}
              title="पुष्प वर्षा करें"
              className="px-2.5 py-1 rounded-full bg-amber-100/90 hover:bg-amber-200 text-[#720917] text-xs font-bold border border-amber-300 transition flex items-center gap-1 shadow-xs cursor-pointer active:scale-95"
            >
              <span>🌸</span>
              <span className="text-[11px]">पुष्प वर्षा</span>
            </button>
          </div>

          {/* Titles */}
          <h3
            className="font-serif text-2xl sm:text-3xl font-bold tracking-wide"
            style={{ color: isMainWedding ? "#720917" : th.accent }}
          >
            {ev.name}
          </h3>
          <p className="font-serif italic text-amber-900/90 text-sm sm:text-base mt-1">
            {ev.tagline}
          </p>

          {/* Quote / Couplet */}
          {ev.quote && (
            <p className="mt-2 text-xs italic text-stone-700 font-serif bg-amber-50/90 border-l-2 border-amber-400 py-1.5 px-3 rounded-r shadow-2xs">
              {ev.quote}
            </p>
          )}

          {/* Description */}
          {ev.description && (
            <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {ev.description}
            </p>
          )}

          {/* Structured Info Box */}
          <div className="mt-5 space-y-2.5 text-xs sm:text-sm">
            {/* Time Box */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-amber-200/80 shadow-2xs">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-amber-100 text-[#720917] shrink-0 font-bold">
                <Clock size={16} />
              </span>
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-500 block">शुभ मुहूर्त / समय</span>
                <span className="font-bold text-stone-900">{ev.time}</span>
              </div>
            </div>

            {/* Venue Box */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/90 border border-amber-200/80 shadow-2xs">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-red-100 text-[#8B0000] shrink-0 mt-0.5">
                <MapPin size={16} />
              </span>
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-500 block">स्थान (Venue)</span>
                <span className="font-medium text-stone-800 leading-snug block">{ev.venue}</span>
              </div>
            </div>

            {/* Dress Code Box */}
            {ev.dressCode && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-amber-200/80 shadow-2xs">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-emerald-100 text-[#065F46] shrink-0">
                  <Shirt size={16} />
                </span>
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-500 block">वेशभूषा (Dress Code)</span>
                  <span className="font-medium text-stone-800">{ev.dressCode}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-amber-200/70 flex flex-wrap items-center gap-2.5">
          <a
            href={ev.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 px-4 text-xs font-bold text-[#3b2a00] shadow transition hover:brightness-105 cursor-pointer"
            style={{ background: GOLD }}
          >
            <MapPin size={14} />
            <span>Google Maps पर लोकेशन</span>
          </a>

          <a
            href={googleCalLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 px-3.5 text-xs font-bold text-[#720917] bg-white border border-amber-400 hover:bg-amber-50 shadow-xs transition cursor-pointer"
            title="Google Calendar में जोड़ें"
          >
            <CalendarDays size={14} />
            <span className="hidden sm:inline">Calendar</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function MiniCalendar({ dateStr, eventDays }) {
  const d0 = parseDay(dateStr);
  const y = d0.getFullYear(), m = d0.getMonth(), wed = d0.getDate();
  const first = new Date(y, m, 1).getDay();
  const total = new Date(y, m + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: total }, (_, i) => i + 1)];
  const ev = new Set(eventDays.filter((k) => k.slice(0, 7) === dateStr.slice(0, 7)).map((k) => Number(k.slice(8, 10))));
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-amber-300 bg-[#FAF5EF] p-4 shadow-inner">
      <div className="mb-3 text-center font-serif text-2xl text-[#720917]">{d0.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</div>
      <div className="mb-1 grid grid-cols-7 gap-1 text-center text-xs text-stone-500">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((x) => <div key={x}>{x}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {cells.map((c, i) => c === null ? <div key={i} /> : (
          <div key={i} className="wt-cell aspect-square grid place-items-center text-sm" style={{ animationDelay: `${i * 28}ms` }}>
            {c === wed ? (
              <span className="wt-beat grid h-full w-full place-items-center rounded-full font-semibold text-white" style={{ background: "linear-gradient(135deg,#8B0000,#720917)", border: "2px solid #D4AF37" }}>{c}</span>
            ) : ev.has(c) ? (
              <span className="grid h-[88%] w-[88%] place-items-center rounded-full bg-amber-200 font-medium text-amber-900">{c}</span>
            ) : <span className="text-stone-600">{c}</span>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-stone-600">
        <span className="flex items-center gap-1.5"><i className="h-3 w-3 rounded-full" style={{ background: "#8B0000", border: "1.5px solid #D4AF37" }} />विवाह दिवस (26 Nov)</span>
        <span className="flex items-center gap-1.5"><i className="h-3 w-3 rounded-full bg-amber-200" />मांगलिक कार्यक्रम</span>
      </div>
    </div>
  );
}

function SaveTheDate({ couple, events, daysLeft }) {
  const wd = parseDay(couple.date);
  const main = events.find((e) => e.colorTheme === "shaadi") || events[0];
  const start = new Date(couple.date);
  const fmt = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const end = new Date(start.getTime() + 5 * 36e5);
  const gcal = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${couple.groom} weds ${couple.bride}`)}&dates=${fmt(start)}/${fmt(end)}&location=${encodeURIComponent(main?.venue || "")}&details=${encodeURIComponent(couple.hashtag)}`;
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-4 py-16" id="save-the-date">
      <Reveal>
        <div className="relative grid items-center gap-8 overflow-hidden rounded-3xl border-2 border-amber-300 bg-white/85 p-6 shadow-xl sm:p-10 md:grid-cols-2">
          {["tl", "tr", "bl", "br"].map((p) => <Corner key={p} pos={p} />)}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg italic text-[#065F46]">Save The Date • शुभ विवाह</p>
            <h2 className="mt-1 font-serif text-4xl leading-tight text-[#720917] sm:text-6xl">
              {wd.toLocaleDateString("en-IN", { weekday: "long" })}<br />
              {wd.getDate()} {wd.toLocaleDateString("en-IN", { month: "long" })}<br />
              {wd.getFullYear()}
            </h2>
            <p className="mt-4 text-stone-700">रश्मि एवं अर्पित के परिणय सूत्र में बंधने के इस मांगलिक अवसर पर आपका स्नेहिल शुभाशीर्वाद सादर प्रार्थनीय है।</p>
            <p className="mt-1 text-sm font-semibold text-[#8B0000]">{main?.venue}</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <div className="rounded-2xl bg-[#8B0000] px-5 py-2 text-center text-amber-100">
                <span key={daysLeft} className="wt-tick block font-serif text-3xl">{daysLeft}</span>
                <span className="block text-xs">{daysLeft === 1 ? "दिन शेष" : "दिन शेष (Days to go)"}</span>
              </div>
              <a href={gcal} target="_blank" rel="noopener noreferrer"
                className="wt-shimmer inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium text-[#3b2a00] shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
                style={{ background: GOLD }}>
                <CalendarDays size={18} /> Add to Google Calendar
              </a>
            </div>
          </div>
          <MiniCalendar dateStr={couple.date} eventDays={events.map((e) => e.date)} />
        </div>
      </Reveal>
    </section>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`wt-reveal ${on ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const Twinkles = () => {
  const stars = useMemo(() => Array.from({ length: 26 }).map((_, i) => ({
    l: (i * 37) % 100, t: (i * 53) % 92, d: (i * 0.37) % 4, z: 6 + ((i * 7) % 12),
  })), []);
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {stars.map((p, i) => (
        <svg key={i} viewBox="0 0 20 20" className="absolute wt-twinkle" style={{ left: `${p.l}%`, top: `${p.t}%`, width: p.z, height: p.z, animationDelay: `${p.d}s` }}>
          <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="#FDE68A" />
        </svg>
      ))}
    </div>
  );
};

const Petals = ({ burstActive }) => {
  const petals = useMemo(
    () => Array.from({ length: 20 }).map((_, i) => ({
      left: (i * 97) % 100, delay: (i * 1.7) % 12, dur: 11 + ((i * 3) % 8),
      size: 10 + ((i * 5) % 12), color: i % 3 === 0 ? "#F59E0B" : i % 3 === 1 ? "#E11D48" : "#FB923C",
    })), []);

  const burstPetals = useMemo(
    () => Array.from({ length: 35 }).map((_, i) => ({
      left: (i * 13) % 96 + 2,
      delay: (i * 0.1) % 2.5,
      dur: 3.5 + ((i * 0.25) % 3),
      size: 12 + ((i * 5) % 14),
      color: ["#F59E0B", "#D97706", "#DC2626", "#BE123C", "#FBBF24"][i % 5]
    })), [burstActive]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <span key={i} className="wt-petal" style={{
          left: `${p.left}%`, width: p.size, height: p.size * 1.3, background: p.color,
          animationDelay: `-${p.delay}s`, animationDuration: `${p.dur}s`,
        }} />
      ))}
      {burstActive && burstPetals.map((p, i) => (
        <span key={`burst-${i}`} className="wt-petal" style={{
          left: `${p.left}%`, width: p.size, height: p.size * 1.3, background: p.color,
          animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`,
          opacity: 0.95
        }} />
      ))}
    </div>
  );
};

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, new Date(target).getTime() - Date.now());
    return {
      Days: Math.floor(diff / 864e5), Hours: Math.floor(diff / 36e5) % 24,
      Minutes: Math.floor(diff / 6e4) % 60, Seconds: Math.floor(diff / 1e3) % 60,
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, [target]);
  return t;
}

function useMusic(src) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const ctxRef = useRef(null);
  const nodesRef = useRef([]);

  const stopDrone = () => {
    nodesRef.current.forEach((o) => { try { o.stop(); } catch (e) {} });
    nodesRef.current = [];
    ctxRef.current?.close?.(); ctxRef.current = null;
  };
  const startDrone = () => {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC(); ctxRef.current = ctx;
    const gain = ctx.createGain(); gain.gain.value = 0.0001;
    gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 2);
    gain.connect(ctx.destination);
    [146.83, 220, 293.66, 440].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = i % 2 ? "triangle" : "sine"; o.frequency.value = f;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.2 + i * 0.07;
      const lg = ctx.createGain(); lg.gain.value = 1.5; lfo.connect(lg); lg.connect(o.frequency);
      o.connect(gain); o.start(); lfo.start(); nodesRef.current.push(o, lfo);
    });
  };

  const toggle = () => {
    if (playing) {
      audioRef.current?.pause();
      stopDrone();
      setPlaying(false);
    } else {
      const audioUrl = src || "/Aaj Sajeya Goldie Sohel 128 Kbps.mp3";
      if (!audioRef.current) {
        audioRef.current = new Audio(audioUrl);
        audioRef.current.loop = true;
      }
      audioRef.current.play().then(() => {
        setPlaying(true);
      }).catch((e) => {
        console.warn("Audio file playback blocked/failed, falling back to drone:", e);
        startDrone();
        setPlaying(true);
      });
    }
  };
  useEffect(() => () => { audioRef.current?.pause(); stopDrone(); }, []);
  return { playing, toggle };
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */
export default function TemplateMarigoldClassic({ data, onRsvpSubmit }) {
  const d = useMemo(() => ({
    ...defaultWeddingData, ...data,
    couple: { ...defaultWeddingData.couple, ...(data?.couple || {}) },
    stay: { ...defaultWeddingData.stay, ...(data?.stay || {}) },
    events: data?.events?.length ? data.events : defaultWeddingData.events,
    gallery: data?.gallery?.length ? data.gallery : defaultWeddingData.gallery,
    wishes: data?.wishes?.length ? data.wishes : defaultWeddingData.wishes,
  }), [data]);

  const { couple, events } = d;
  const time = useCountdown(couple.date);
  const weddingKey = couple.date.slice(0, 10);
  const wd = parseDay(couple.date);
  const music = useMusic(d.audioSrc);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [wishes, setWishes] = useState(d.wishes);
  useEffect(() => setWishes(d.wishes), [d.wishes]);
  const [activeDay, setActiveDay] = useState("all");
  const [progress, setProgress] = useState(0);
  const [burstActive, setBurstActive] = useState(false);
  const triggerFlowerShower = () => {
    setBurstActive(true);
    setTimeout(() => setBurstActive(false), 5500);
  };

  useEffect(() => {
    const h = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const days = useMemo(() => ["all", ...Array.from(new Set(events.map((e) => e.date)))], [events]);
  const shown = (activeDay === "all" ? events : events.filter((e) => e.date === activeDay)).slice().sort((a, b) => a.date.localeCompare(b.date));
  const fmtDate = (s) => parseDay(s).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-stone-800 font-sans overflow-x-hidden"
      style={{ backgroundImage: "radial-gradient(circle at 15% 8%,rgba(245,158,11,.10),transparent 40%),radial-gradient(circle at 85% 55%,rgba(139,0,0,.07),transparent 45%),radial-gradient(circle at 10% 90%,rgba(6,95,70,.06),transparent 40%)" }}>
      <div className="fixed top-0 left-0 z-50 h-1" style={{ width: `${progress}%`, background: GOLD }} aria-hidden="true" />
      <style>{`
        @keyframes wt-fall { 0%{transform:translate3d(0,-10vh,0) rotate(0deg);opacity:0} 10%{opacity:.8} 100%{transform:translate3d(60px,110vh,0) rotate(540deg);opacity:0} }
        @keyframes wt-sway { 0%,100%{margin-left:0} 50%{margin-left:28px} }
        .wt-petal{position:absolute;top:0;border-radius:80% 0 80% 0;opacity:0;animation:wt-fall linear infinite, wt-sway ease-in-out infinite}
        @keyframes wt-pop { from{opacity:0;transform:scale(.96) translateY(8px)} to{opacity:1;transform:none} }
        .wt-pop{animation:wt-pop .25s ease-out}
        @keyframes wt-shower { 0%{transform:translateY(-20px);opacity:0} 20%{opacity:1} 100%{transform:translateY(120px);opacity:0} }
        .wt-shower{animation:wt-shower 2.4s ease-in infinite}
        @keyframes wt-spin{to{transform:rotate(360deg)}}
        .wt-spin{animation:wt-spin 48s linear infinite}
        @keyframes wt-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        .wt-shimmer{background-size:200% 100%!important;background-image:linear-gradient(110deg,#B8860B 0%,#FDE68A 25%,#D4AF37 45%,#FFF8DC 55%,#D4AF37 75%,#B8860B 100%)!important;animation:wt-shimmer 3.5s linear infinite}
        @keyframes wt-kb{from{transform:scale(1.04)}to{transform:scale(1.18) translate(-1.5%,-1%)}}
        .wt-kb{animation:wt-kb 24s ease-in-out infinite alternate}
        @keyframes wt-rise{from{opacity:0;transform:translateY(30px);filter:blur(8px)}to{opacity:1;transform:none;filter:none}}
        .wt-rise{opacity:0;animation:wt-rise 1s cubic-bezier(.2,.7,.2,1) forwards}
        @keyframes wt-twinkle{0%,100%{opacity:.1;transform:scale(.5) rotate(0)}50%{opacity:1;transform:scale(1.2) rotate(45deg)}}
        .wt-twinkle{animation:wt-twinkle 3.2s ease-in-out infinite}
        @keyframes wt-marquee{to{transform:translateX(-50%)}}
        .wt-marquee{animation:wt-marquee 36s linear infinite}
        @keyframes wt-tick{0%{transform:translateY(-45%);opacity:0}100%{transform:none;opacity:1}}
        .wt-tick{animation:wt-tick .35s ease-out}
        @keyframes wt-ring{0%{box-shadow:0 0 0 0 rgba(212,175,55,.65)}100%{box-shadow:0 0 0 18px rgba(212,175,55,0)}}
        .wt-ring{animation:wt-ring 1.6s ease-out infinite}
        @keyframes wt-bar{0%,100%{height:4px}50%{height:16px}}
        .wt-bar{display:block;width:3px;background:#3b2a00;border-radius:2px;animation:wt-bar .9s ease-in-out infinite}
        .wt-reveal{opacity:0;transform:translateY(40px) scale(.97);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
        .wt-reveal.in{opacity:1;transform:none}
        .wt-card{transition:transform .35s ease,box-shadow .35s ease}
        .wt-card:hover{transform:translateY(-8px);box-shadow:0 26px 40px -18px rgba(114,9,23,.4)}
        .wt-icon{transition:transform .4s ease}
        .wt-card:hover .wt-icon{transform:rotate(-14deg) scale(1.15)}
        @keyframes wt-beat{0%,100%{transform:scale(1)}15%{transform:scale(1.12)}30%{transform:scale(1)}45%{transform:scale(1.07)}}
        .wt-beat{animation:wt-beat 2.2s ease-in-out infinite,wt-ring 2.2s ease-out infinite}
        @keyframes wt-swing{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
        .wt-swing{transform-origin:top center;animation:wt-swing 3.6s ease-in-out infinite}
        @keyframes wt-cellpop{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}
        .wt-cell{opacity:0}
        .wt-reveal.in .wt-cell{animation:wt-cellpop .45s cubic-bezier(.3,1.4,.5,1) both}
        @media (prefers-reduced-motion: reduce){
          .wt-petal,.wt-shower,.wt-pop,.wt-spin,.wt-kb,.wt-twinkle,.wt-marquee,.wt-tick,.wt-ring,.wt-bar,.wt-shimmer,.wt-beat,.wt-swing{animation:none!important}
          .wt-cell{opacity:1!important}
          .wt-reveal.in .wt-cell{animation:none!important}
          .wt-petal{display:none}
          .wt-rise{opacity:1!important;animation:none!important}
          .wt-reveal{opacity:1!important;transform:none!important;transition:none!important}
        }
      `}</style>

      <Petals burstActive={burstActive} />

      {/* Music toggle */}
      <button
        onClick={music.toggle}
        aria-label={music.playing ? "Pause song: Aaj Sajeya" : "Play song: Aaj Sajeya"}
        aria-pressed={music.playing}
        className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-[#3b2a00] shadow-2xl wt-shimmer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 cursor-pointer ${music.playing ? "wt-ring" : ""}`}
        style={{ background: GOLD }}
      >
        {music.playing
          ? <span className="flex items-end gap-0.5 h-4" aria-hidden="true">{[0, 0.25, 0.5].map((d) => <i key={d} className="wt-bar" style={{ animationDelay: `${d}s` }} />)}</span>
          : <Play size={18} />}
        <span className="hidden sm:inline">{music.playing ? "Pause (आज सजिया)" : "Play Song (आज सजिया)"}</span>
      </button>

      {/* ============ HERO ============ */}
      <header className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden">
        <img src={couple.bannerImage} alt="Rashmi and Arpit" className="absolute inset-0 h-full w-full object-cover object-[center_20%] sm:object-[center_25%] wt-kb" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(20,2,5,.75) 0%,rgba(45,6,12,.32) 28%,rgba(20,2,5,.42) 65%,rgba(20,2,5,.82) 88%,rgba(253,251,247,1) 100%)" }} />
        <Toran />
        <Twinkles />
        <div className="absolute inset-0 grid place-items-center pointer-events-none opacity-[.14]" aria-hidden="true">
          <Mandala size={640} className="wt-spin w-[92vw] max-w-[640px] h-auto" />
        </div>
        <div className="relative z-10 px-5 pt-16 pb-28 max-w-4xl mx-auto text-white">
          <div className="wt-rise"><Mandala className="mx-auto mb-3 wt-spin" size={68} /></div>
          <p className="font-serif italic text-amber-200 text-base sm:text-lg wt-rise drop-shadow" style={{ animationDelay: ".2s" }}>
            {couple.blessing}
          </p>

          <div className="wt-rise mt-5">
            <span className="inline-block text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-amber-300 font-bold px-4 py-1 rounded-full bg-black/40 border border-amber-400/50 mb-3 shadow">
              शुभ विवाह निमंत्रण
            </span>
            <h1 className="font-serif text-4xl sm:text-7xl md:text-8xl font-bold tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]" style={{ background: GOLD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              RASHMI &amp; ARPIT
            </h1>
            <p className="mt-2 text-xl sm:text-3xl text-amber-100 font-serif drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              रश्मि ठाकुर <span className="text-amber-300 italic text-lg sm:text-2xl font-light mx-2">संग</span> अर्पित मरावी
            </p>
          </div>
          <div className="wt-rise mt-6" style={{ animationDelay: "1.45s" }}>
            <div className="inline-flex items-center gap-3 sm:gap-6 rounded-2xl border-2 border-amber-300 bg-[#FDFBF7]/95 px-4 py-3 text-[#720917] shadow-2xl sm:px-8">
              <div className="text-right font-serif">
                <div className="text-base sm:text-2xl">{wd.toLocaleDateString("en-IN", { weekday: "long" })}</div>
                <div className="text-xs text-stone-600 sm:text-sm">{time.Days > 0 ? `${time.Days} दिन शेष` : "The big day"}</div>
              </div>
              <div className="wt-beat grid h-16 w-16 place-items-center rounded-full font-serif text-4xl text-white sm:h-28 sm:w-28 sm:text-7xl"
                style={{ background: "linear-gradient(135deg,#8B0000,#720917)", border: "3px solid #D4AF37" }}>
                {wd.getDate()}
              </div>
              <div className="text-left font-serif">
                <div className="text-base sm:text-2xl">{wd.toLocaleDateString("en-IN", { month: "long" })}</div>
                <div className="text-base sm:text-2xl">{wd.getFullYear()}</div>
              </div>
            </div>
          </div>
          <p className="mt-1 text-amber-200 tracking-wide wt-rise" style={{ animationDelay: "1.6s" }}>{couple.hashtag}</p>

          <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto wt-rise" style={{ animationDelay: "1.8s" }} role="timer" aria-label="Countdown to the wedding">
            {Object.entries(time).map(([k, v]) => (
              <div key={k} className="rounded-xl border border-amber-300/70 bg-[#720917]/70 backdrop-blur py-3 overflow-hidden">
                <div key={v} className="font-serif text-3xl sm:text-4xl tabular-nums wt-tick">{String(v).padStart(2, "0")}</div>
                <div className="text-[11px] sm:text-xs text-amber-200">{k}</div>
              </div>
            ))}
          </div>

          <div className="wt-rise" style={{ animationDelay: "2.05s" }}>
            <button onClick={() => setRsvpOpen(true)}
              className="mt-8 rounded-full px-8 py-3 font-semibold text-[#3b2a00] shadow-xl wt-shimmer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
              style={{ background: GOLD }}>
              उपस्थिति पुष्टि (RSVP)
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10 overflow-hidden border-y-2 border-amber-400 py-3" style={{ background: "linear-gradient(90deg,#720917,#8B0000,#720917)" }} aria-hidden="true">
        <div className="flex w-max wt-marquee whitespace-nowrap font-serif text-lg text-amber-200">
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-6 pr-6">
              {events.map((e) => (
                <React.Fragment key={e.id + k}><span>{e.name}</span><span className="text-amber-400">❖</span></React.Fragment>
              ))}
              <span>{couple.hashtag}</span><span className="text-amber-400">❖</span>
            </div>
          ))}
        </div>
      </div>

      <SaveTheDate couple={couple} events={events} daysLeft={time.Days} />

      <Divider />

      {/* ============ ITINERARY ============ */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16 scroll-mt-28" id="events">
        <SectionTitle
          title="मांगलिक कार्यक्रम रूपरेखा एवं शुभ मुहूर्त"
          sub="रश्मि ठाकुर संग अर्पित मरावी • समस्त कार्यक्रमों का पावन विवरण"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12" role="tablist" aria-label="Filter by day">
          {[
            { id: "all", label: "सभी मांगलिक कार्यक्रम (All Events)" },
            { id: "2026-11-24", label: "24 Nov • मेहंदी उत्सव (2 PM)" },
            { id: "2026-11-25", label: "25 Nov • मण्डप व हल्दी (12 PM)" },
            { id: "2026-11-26", label: "★ 26 Nov • विवाह एवं स्वरूचिभोज (जबलपुर)", isMain: true }
          ].map((tab) => {
            const isSelected = activeDay === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveDay(tab.id)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold border transition-all duration-200 cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] ${
                  isSelected
                    ? "text-white border-transparent scale-105 shadow-md"
                    : tab.isMain
                    ? "bg-amber-100 text-[#720917] border-2 border-[#8B0000] hover:bg-amber-200"
                    : "bg-white text-stone-700 border-amber-300 hover:bg-amber-50"
                }`}
                style={isSelected ? { background: "linear-gradient(135deg, #720917, #8B0000)" } : undefined}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Event Cards Display */}
        {activeDay === "all" ? (
          <div className="space-y-16">
            {/* Phase 1: Home ceremonies (Jabera, Damoh) */}
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-8 border-b-2 border-amber-300 pb-3">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold text-sm shadow">
                    १
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#720917]">
                      प्रथम चरण: गृह मांगलिक संस्कार • निज निवास जबेरा (दमोह)
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      24 एवं 25 नवम्बर 2026 • मेहंदी उत्सव, मण्डपाच्छादन एवं हल्दी संस्कार
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-amber-100 text-[#720917] text-xs font-bold border border-amber-300 shadow-2xs">
                  २ पावन संस्कार
                </span>
              </div>

              {/* Symmetrical 2-Column Grid for Jabera Events */}
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {events
                  .filter((e) => e.date === "2026-11-24" || e.date === "2026-11-25")
                  .map((ev, i) => (
                    <Reveal key={ev.id} delay={i * 120} className="h-full">
                      <EventCard ev={ev} onFlowerShower={triggerFlowerShower} />
                    </Reveal>
                  ))}
              </div>
            </div>

            {/* Phase 2: Wedding Day ceremonies (Jabalpur) */}
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-8 border-b-2 border-[#8B0000] pb-3">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-[#720917] to-[#8B0000] text-amber-200 font-bold text-sm shadow border border-amber-300">
                    २
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#720917] flex items-center gap-2">
                      <span>द्वितीय चरण: मुख्य विवाह, पाणिग्रहण एवं स्वरूचिभोज</span>
                      <Crown size={20} className="text-amber-500" />
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      26 नवम्बर 2026 (गुरूवार) • रिद्धि-सिद्धि मैरिज गार्डन, पाटन बाईपास, जबलपुर
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#8B0000] text-amber-100 text-xs font-bold shadow">
                  ★ मुख्य विवाह दिवस ★
                </span>
              </div>

              {/* Balanced 3-Column Grid for Jabalpur Events */}
              <div className="grid gap-6 sm:gap-7 md:grid-cols-3 max-w-6xl mx-auto">
                {events
                  .filter((e) => e.date === "2026-11-26")
                  .map((ev, i) => (
                    <Reveal key={ev.id} delay={i * 120} className="h-full">
                      <EventCard ev={ev} onFlowerShower={triggerFlowerShower} />
                    </Reveal>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered View for a Single Selected Date */
          <div className="max-w-5xl mx-auto">
            {events.filter((e) => e.date === activeDay).length === 1 ? (
              <div className="max-w-2xl mx-auto">
                {events
                  .filter((e) => e.date === activeDay)
                  .map((ev) => (
                    <Reveal key={ev.id}>
                      <EventCard ev={ev} onFlowerShower={triggerFlowerShower} />
                    </Reveal>
                  ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:gap-7 md:grid-cols-3 max-w-6xl mx-auto">
                {events
                  .filter((e) => e.date === activeDay)
                  .map((ev, i) => (
                    <Reveal key={ev.id} delay={i * 120} className="h-full">
                      <EventCard ev={ev} onFlowerShower={triggerFlowerShower} />
                    </Reveal>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Stay & Venue Note */}
        <div className="relative mt-16 rounded-3xl border-2 border-amber-300 bg-[#FAF5EF] p-6 sm:p-10 max-w-3xl mx-auto text-center shadow-lg">
          {["tl", "tr", "bl", "br"].map((p) => <Corner key={p} pos={p} />)}
          <div className="w-12 h-12 rounded-full bg-emerald-700/10 border border-emerald-700/30 grid place-items-center mx-auto text-[#065F46] shadow-xs">
            <Hotel size={24} />
          </div>
          <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-[#065F46]">{d.stay.title}</h3>
          <p className="mt-3 text-stone-700 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">{d.stay.note}</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href="https://maps.google.com/?q=Riddhi+Siddhi+Marriage+Garden+Jabalpur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-[#3b2a00] shadow transition hover:brightness-105"
              style={{ background: GOLD }}
            >
              <MapPin size={15} />
              <span>मैरिज गार्डन जबलपुर लोकेशन देखें</span>
            </a>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============ GALLERY ============ */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <SectionTitle title="पावन स्मृतियां (Gallery)" sub="रश्मि एवं अर्पित के मधुर पलों का संकलन" />
        <div className="columns-2 md:columns-3 gap-3 [&>*]:mb-3">
          {d.gallery.map((src, i) => (
            <Reveal key={i} delay={(i % 3) * 110} className="break-inside-avoid"><button onClick={() => setLightbox(i)} aria-label={`Open photo ${i + 1}`}
              className="block w-full overflow-hidden rounded-xl border-2 border-amber-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B0000]">
              <img src={src} alt={`Pre-wedding photo ${i + 1}`} loading="lazy" className="w-full object-cover hover:scale-110 transition duration-700" />
            </button></Reveal>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <Lightbox images={d.gallery} index={lightbox} setIndex={setLightbox} />
      )}

      <Divider />

      {/* ============ WISHES ============ */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <SectionTitle title="शुभाशीर्वाद एवं मंगलकामनाएं" sub="समस्त स्नेहीजनों एवं बुजुर्गों का पावन आशीर्वाद" />
        <div className="grid gap-4 sm:grid-cols-3">
          {wishes.map((w, i) => (
            <Reveal key={i} delay={i * 130} className="h-full"><figure className="wt-card h-full rounded-2xl bg-white border border-amber-200 p-5 shadow-sm">
              <Heart size={18} className="text-[#8B0000]" />
              <blockquote className="mt-2 font-serif italic text-stone-700">{w.message}</blockquote>
              <figcaption className="mt-3 text-sm font-medium text-[#720917]">{w.name}</figcaption>
            </figure></Reveal>
          ))}
        </div>
        <WishForm onAdd={(w) => setWishes((prev) => [w, ...prev])} />
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 text-white" style={{ background: "linear-gradient(135deg,#720917,#8B0000)" }}>
        <Mandala className="mx-auto wt-spin" size={56} />
        <p className="mt-3 font-serif text-2xl sm:text-3xl font-bold tracking-wide text-amber-100">RASHMI &amp; ARPIT</p>
        <p className="text-amber-200 text-sm mt-1">रश्मि ठाकुर संग अर्पित मरावी</p>
        <p className="mt-1 text-amber-100">{wd.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} • जबलपुर</p>
        <p className="text-amber-200">{couple.hashtag}</p>
        <button onClick={() => setRsvpOpen(true)} className="mt-5 rounded-full px-6 py-2 font-medium text-[#3b2a00] wt-shimmer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300" style={{ background: GOLD }}>
          RSVP Now
        </button>
      </footer>

      {rsvpOpen && <RsvpModal events={events} onClose={() => setRsvpOpen(false)} onSubmit={onRsvpSubmit} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LIGHTBOX                                                           */
/* ------------------------------------------------------------------ */
function Lightbox({ images, index, setIndex }) {
  const close = () => setIndex(null);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") close(); if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  });
  return (
    <div role="dialog" aria-modal="true" aria-label="Photo preview" className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={close}>
      <button onClick={close} aria-label="Close" className="absolute top-4 right-4 text-white p-2"><X /></button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo" className="absolute left-2 sm:left-6 text-white p-2"><ChevronLeft size={36} /></button>
      <img src={images[index]} alt={`Photo ${index + 1}`} onClick={(e) => e.stopPropagation()} className="wt-pop max-h-[85vh] max-w-full rounded-lg border-4 border-amber-300" />
      <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo" className="absolute right-2 sm:right-6 text-white p-2"><ChevronRight size={36} /></button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  WISH FORM                                                          */
/* ------------------------------------------------------------------ */
function WishForm({ onAdd }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    onAdd({ name: name.trim(), message: message.trim() });
    setName(""); setMessage("");
  };
  return (
    <form onSubmit={submit} className="mt-8 rounded-2xl border border-amber-300 bg-[#FAF5EF] p-5 space-y-3">
      <h3 className="font-serif text-xl text-[#720917]">वर-वधू को अपना शुभाशीर्वाद भेजें</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="आपका नाम (Your Name)" aria-label="Your name" className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B0000]" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="वर-वधू के लिए अपने मंगल वचन लिखें (Your wishes)" aria-label="Your blessing" className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B0000]" />
      <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#8B0000] px-5 py-2 text-white hover:bg-[#720917] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300">
        <Send size={16} /> आशीर्वाद भेजें (Post Blessing)
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  RSVP MODAL                                                         */
/* ------------------------------------------------------------------ */
function RsvpModal({ events, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: "", whatsapp: "", guests: 1, events: events.map((e) => e.id), diet: "शुद्ध शाकाहारी", message: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggle = (id) => set("events", form.events.includes(id) ? form.events.filter((x) => x !== id) : [...form.events, id]);

  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "कृपया अपना नाम दर्ज करें।";
    if (!/^\+?[0-9\s-]{10,15}$/.test(form.whatsapp.trim())) err.whatsapp = "कृपया एक वैध व्हाट्सएप नंबर दर्ज करें।";
    if (!form.events.length) err.events = "कृपया कम से कम एक कार्यक्रम का चयन करें।";
    setErrors(err);
    if (Object.keys(err).length) return;
    onSubmit?.(form);
    setDone(true);
  };

  const field = "w-full rounded-lg border border-amber-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B0000]";
  return (
    <div role="dialog" aria-modal="true" aria-label="RSVP" className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="wt-pop relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#FDFBF7] border-2 border-amber-400 p-6">
        {["tl", "tr"].map((p) => <Corner key={p} pos={p} />)}
        <button onClick={onClose} aria-label="Close RSVP" className="absolute top-3 right-12 p-1 text-stone-500 hover:text-stone-800"><X /></button>
        {done ? (
          <div className="text-center py-10">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#065F46] text-white"><Check /></span>
            <h3 className="mt-4 font-serif text-3xl text-[#720917]">धन्यवाद, {form.name.split(" ")[0]} जी!</h3>
            <p className="mt-2 text-stone-600">आपकी उपस्थिति दर्ज कर ली गई है। रश्मि एवं अर्पित के विवाह में आपका स्वागत है।</p>
            <button onClick={onClose} className="mt-6 rounded-full bg-[#8B0000] px-6 py-2 text-white">बंद करें (Close)</button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4" noValidate>
            <h3 className="font-serif text-3xl text-[#720917] text-center">उपस्थिति पुष्टि (RSVP)</h3>
            <div>
              <label className="text-sm font-medium" htmlFor="rs-name">अतिथि का पूरा नाम (Full Name) *</label>
              <input id="rs-name" className={field} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="उदा. मान सिंह जी" />
              {errors.name && <p className="text-sm text-[#8B0000] mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="rs-wa">व्हाट्सएप नंबर (WhatsApp No.) *</label>
              <input id="rs-wa" type="tel" inputMode="tel" placeholder="+91 98260 XXXXX" className={field} value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} />
              {errors.whatsapp && <p className="text-sm text-[#8B0000] mt-1">{errors.whatsapp}</p>}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium" htmlFor="rs-g">सदस्यों की संख्या (Guests)</label>
                <input id="rs-g" type="number" min={1} max={10} className={field} value={form.guests} onChange={(e) => set("guests", Math.max(1, Number(e.target.value) || 1))} />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="rs-d">भोजन व्यवस्था (Diet)</label>
                <select id="rs-d" className={field} value={form.diet} onChange={(e) => set("diet", e.target.value)}>
                  {["शुद्ध शाकाहारी", "जैन / सात्विक", "पारंपरिक भोज"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <fieldset>
              <legend className="text-sm font-medium">किन कार्यक्रमों में सम्मिलित होंगे? *</legend>
              <div className="mt-2 grid gap-2">
                {events.map((ev) => (
                  <label key={ev.id} className="flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm cursor-pointer">
                    <input type="checkbox" className="accent-[#8B0000] h-4 w-4" checked={form.events.includes(ev.id)} onChange={() => toggle(ev.id)} />
                    {ev.name}
                  </label>
                ))}
              </div>
              {errors.events && <p className="text-sm text-[#8B0000] mt-1">{errors.events}</p>}
            </fieldset>
            <div>
              <label className="text-sm font-medium" htmlFor="rs-m">वर-वधू के लिए शुभकामना संदेश</label>
              <textarea id="rs-m" rows={3} className={field} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="वर-वधू के लिए अपना शुभाशीर्वाद लिखें..." />
            </div>
            <button type="submit" className="w-full rounded-full py-3 font-semibold text-[#3b2a00] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300" style={{ background: GOLD }}>
              उपस्थिति पुष्टि भेजें (Submit RSVP)
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
