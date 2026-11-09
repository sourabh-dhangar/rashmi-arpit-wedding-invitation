import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Volume2,
  VolumeX,
  Sparkles,
  Heart,
  Users,
  Check,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  X,
  Phone,
  Send,
  Utensils,
  Shirt,
  Star,
  Camera,
  Gift,
  Plane,
  Hotel,
  Copy,
  CheckCircle2,
  Flower2,
  Flame,
  Crown,
  Compass,
  Bus
} from 'lucide-react';

// ============================================================================
// DEFAULT WEDDING DATA - RASHMI THAKUR & ARPIT MARAVI
// ============================================================================
export const defaultWeddingData = {
  couple: {
    bride: 'रश्मि ठाकुर (Rashmi Thakur)',
    brideShort: 'Rashmi',
    brideParents: 'सुपुत्री: श्रीमति जानकी एवं श्री मान सिंह ठाकुर, निवासी: जबेरा, जिला दमोह (म.प्र.)',
    groom: 'अर्पित मरावी (Arpit Maravi)',
    groomShort: 'Arpit',
    groomParents: 'सुपुत्र: श्री बल्देव प्रसाद मरावी, निवासी: मंडला, जिला मंडला (म.प्र.)',
    hashtag: '#RashmiWedsArpit',
    date: '2026-11-26T19:00:00+05:30',
    weddingDateNumber: '26',
    weddingMonth: 'NOVEMBER',
    weddingYear: '2026',
    weddingDayName: 'Thursday',
    muhuratTime: '07:00 PM से आपके आगमन तक • पाणिग्रहण संस्कार एवं स्वरूचिभोज',
    displayDate: '26 November 2026',
    celebrationDates: '24 – 26 November 2026',
    city: 'जबलपुर (Jabalpur), Madhya Pradesh',
    primaryVenue: 'रिद्धि-सिद्धि मैरिज गार्डन, पाटन बाईपास के पास, ग्रिड कॉर्पोरेशन के सामने, जबलपुर',
    bannerImage: '/images/couple-hero.jpg',
    storyQuote:
      'परमपिता परमात्मा एवं कुलदेवता के असीम आशीर्वाद से, रश्मि एवं अर्पित के परिणय सूत्र में बंधने के इस मांगलिक अवसर पर आपका स्नेहिल शुभाशीर्वाद सादर प्रार्थनीय है।'
  },
  events: [
    {
      id: 'mehendi',
      name: 'मेहंदी उत्सव (Mehendi Ceremony)',
      tagline: 'सतरंगी मेहंदी, मधुर संगीत एवं सखियों का उल्लास',
      dayKey: 'DAY1',
      dayLabel: 'Day 1 • Tue, 24 Nov 2026',
      date: '24 November 2026',
      time: 'दोपहर 02:00 बजे से (2:00 PM Onwards)',
      venue: 'निज निवास जबेरा (Family Residence, Jabera)',
      address: 'ग्राम व पोस्ट जबेरा, जिला दमोह, मध्य प्रदेश',
      mapLink: 'https://maps.google.com/?q=Jabera+Damoh',
      dressCode: 'हरा / टील एवं उत्सव इंडो-वेस्टर्न (Green & Teal Festive)',
      dressColors: ['#0F766E', '#10B981', '#D4AF37'],
      colorTheme: 'teal',
      iconType: 'sangeet',
      isMainWeddingDay: false,
      description:
        'रश्मि के हाथों में रचेगी अर्पित के नाम की मेहंदी। सखियों संग लोकगीत, ढोलक की थाप एवं सतरंगी मेहंदी उत्सव।'
    },
    {
      id: 'mandap-haldi',
      name: 'मण्डप एवं हल्दी (Mandap & Haldi Ceremony)',
      tagline: 'मण्डपाच्छादन, मातृकापूजन एवं तेल-हल्दी की मांगलिक रस्म',
      dayKey: 'DAY2',
      dayLabel: 'Day 2 • Wed, 25 Nov 2026',
      date: '25 November 2026',
      time: 'दोपहर 12:00 बजे से (12:00 PM Onwards)',
      venue: 'निज निवास जबेरा (Family Residence, Jabera)',
      address: 'ग्राम व पोस्ट जबेरा, जिला दमोह, मध्य प्रदेश',
      mapLink: 'https://maps.google.com/?q=Jabera+Damoh',
      dressCode: 'पीला / केसरिया पारंपरिक परिधान (Yellow / Mustard Ethnic)',
      dressColors: ['#FDE047', '#F59E0B', '#EA580C'],
      colorTheme: 'marigold',
      iconType: 'haldi',
      isMainWeddingDay: false,
      description:
        'वैदिक विधि से मण्डप प्रतिष्ठा, कुलदेवता पूजन एवं परिजनों व स्नेहीजनों द्वारा हल्दी-उबटन व तेल-हल्दी का पावन संस्कार।'
    },
    {
      id: 'prasthan',
      name: 'प्रस्थान जबलपुर (Departure to Jabalpur)',
      tagline: 'निज निवास जबेरा से जबलपुर मैरिज गार्डन के लिए प्रस्थान',
      dayKey: 'DAY3',
      dayLabel: '★ Wedding Day • Thu, 26 Nov 2026',
      date: '26 November 2026',
      time: 'सुबह 10:00 बजे',
      venue: 'निज निवास जबेरा से बस द्वारा प्रस्थान',
      address: 'जबेरा (दमोह) से रिद्धि-सिद्धि मैरिज गार्डन (जबलपुर)',
      mapLink: 'https://maps.google.com/?q=Jabera+Damoh',
      dressCode: 'आरामदायक एवं उत्सव परिधान (Comfortable Festive Ethnic)',
      dressColors: ['#065F46', '#0D9488', '#D4AF37'],
      colorTheme: 'emerald',
      iconType: 'baraat',
      isMainWeddingDay: true,
      description:
        'निज निवास जबेरा से सभी स्वजनों, रिश्तेदारों एवं अतिथियों का जबलपुर विवाह स्थल के लिए बस द्वारा मंगल प्रस्थान।'
    },
    {
      id: 'shaadi-pheras',
      name: 'मुख्य विवाह, पाणिग्रहण एवं स्वरूचिभोज',
      tagline: 'पाणिग्रहण संस्कार (सात फेरे) एवं भव्य स्वरूचिभोज समारोह',
      dayKey: 'DAY3',
      dayLabel: '★ MAIN EVENT • Thu, 26 Nov 2026',
      date: '26 November 2026',
      time: 'शाम 07:00 बजे से आपके आगमन तक',
      venue: 'रिद्धि-सिद्धि मैरिज गार्डन (Riddhi-Siddhi Marriage Garden)',
      address: 'पाटन बाईपास के पास, ग्रिड कॉर्पोरेशन के सामने, जबलपुर (म.प्र.)',
      mapLink: 'https://maps.google.com/?q=Riddhi+Siddhi+Marriage+Garden+Jabalpur',
      dressCode: 'सिन्दूरी लाल, मैरून एवं ज़री गोल्ड (Royal Maroon & Zari Gold)',
      dressColors: ['#720917', '#8B0000', '#D4AF37'],
      colorTheme: 'maroon',
      iconType: 'pheras',
      isMainWeddingDay: true,
      isPrimaryCeremony: true,
      description:
        'अग्नि को साक्षी मानकर पवित्र सात फेरे, सिन्दूरदान, पाणिग्रहण संस्कार एवं स्वरूचिभोज। नवदम्पति को अपना शुभाशीर्वाद प्रदान कर अनुगृहीत करें।'
    }
  ],
  gallery: [
    {
      url: '/images/couple-hero.jpg',
      caption: 'रश्मि एवं अर्पित — शुभ पाणिग्रहण (Rashmi & Arpit)',
      tag: 'Main Portrait'
    },
    {
      url: '/images/couple-portrait.jpg',
      caption: 'मधुर स्मृतियां (Cherished Memories)',
      tag: 'Festive'
    },
    {
      url: '/images/couple-standing.png',
      caption: 'सदा साथ — परिणय बंधन (Together Forever)',
      tag: 'Couple'
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      caption: 'मांगलिक मण्डप एवं पुष्प सज्जा',
      tag: 'Decor'
    },
    {
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
      caption: 'पारंपरिक वेशभूषा एवं गहने',
      tag: 'Couture'
    },
    {
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85',
      caption: 'पावन विवाह वेला',
      tag: 'Wedding Night'
    }
  ],
  wishes: [
    {
      name: 'ठाकुर परिवार (जबेरा)',
      relation: 'वधू पक्ष',
      timeAgo: 'Recently',
      message:
        'हमारी लाडली बिटिया रश्मि और दामाद अर्पित को वैवाहिक जीवन की अनन्त शुभकामनाएं। भगवान भोलेनाथ एवं माता पार्वती का आशीर्वाद सदा बना रहे।'
    },
    {
      name: 'मरावी परिवार (मंडला)',
      relation: 'वर पक्ष',
      timeAgo: 'Recently',
      message:
        'अर्पित और रश्मि के पाणिग्रहण संस्कार पर दोनों को हार्दिक बधाई एवं शुभाशीर्वाद। आपके जीवन में सुख, शांति और समृद्धि की अविरल धारा बहे।'
    },
    {
      name: 'समस्त स्नेहीजन एवं मित्रगण',
      relation: 'शुभचिंतक',
      timeAgo: 'Recently',
      message:
        '#RashmiWedsArpit — दो सुंदर कुलों का यह पावन मिलन सदा हर्षित एवं मंगलमय रहे। 26 नवम्बर को जबलपुर में मिलेंगे!'
    }
  ],
  hospitality: [
    {
      title: 'विवाह स्थल: रिद्धि-सिद्धि मैरिज गार्डन',
      subtitle: 'पाटन बाईपास के पास, ग्रिड कॉर्पोरेशन के सामने, जबलपुर',
      details:
        '26 नवम्बर 2026 को मुख्य विवाह एवं स्वरूचिभोज समारोह जबलपुर के रिद्धि-सिद्धि मैरिज गार्डन में आयोजित है। पाटन बाईपास रोड से सुगम मार्ग एवं पर्याप्त पार्किंग व्यवस्था उपलब्ध है।',
      mapLink: 'https://maps.google.com/?q=Riddhi+Siddhi+Marriage+Garden+Jabalpur',
      phone: '+91 94251 00000'
    },
    {
      title: 'जबेरा से प्रस्थान एवं बस व्यवस्था',
      subtitle: '26 नवम्बर 2026, प्रातः 10:00 बजे',
      details:
        '24 एवं 25 नवम्बर के कार्यक्रम निज निवास जबेरा में सम्पन्न होने के पश्चात 26 नवम्बर सुबह 10:00 बजे जबेरा से जबलपुर विवाह स्थल के लिए बस द्वारा मंगल प्रस्थान रहेगा।',
      mapLink: 'https://maps.google.com/?q=Jabera+Damoh',
      phone: '+91 98260 00000'
    }
  ]
};

// ============================================================================
// CUSTOM INLINE CULTURAL & ROYAL MOTIF SVGS
// ============================================================================

const GaneshKalashEmblem = ({ className = 'w-16 h-16' }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="60"
      cy="60"
      r="54"
      stroke="url(#goldGrad)"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <circle cx="60" cy="60" r="48" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 60 60)`}>
        <path
          d="M60 4 C63 9, 63 12, 60 15 C57 12, 57 9, 60 4 Z"
          fill="url(#goldGrad)"
        />
      </g>
    ))}
    <path
      d="M44 74 C40 62, 46 52, 60 52 C74 52, 80 62, 76 74 C73 84, 67 88, 60 88 C53 88, 47 84, 44 74 Z"
      fill="url(#goldGrad)"
      fillOpacity="0.18"
      stroke="url(#goldGrad)"
      strokeWidth="2"
    />
    <path d="M47 52 H73 M50 48 H70" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M60 48 C50 44, 40 46, 37 54 C44 54, 52 52, 60 48 Z"
      fill="#065F46"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
    />
    <path
      d="M60 48 C70 44, 80 46, 83 54 C76 54, 68 52, 60 48 Z"
      fill="#065F46"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
    />
    <path
      d="M60 27 C66 34, 68 42, 60 48 C52 42, 54 34, 60 27 Z"
      fill="#8B0000"
      stroke="url(#goldGrad)"
      strokeWidth="1.8"
    />
    <path
      d="M60 64 V76 M54 70 H66 M60 64 H64 M60 76 H56 M54 70 V66 M66 70 V74"
      stroke="#8B0000"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M48 92 H72 M44 96 H76" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#B48327" />
        <stop offset="50%" stopColor="#F5D061" />
        <stop offset="100%" stopColor="#9A6B13" />
      </linearGradient>
    </defs>
  </svg>
);

const MandalaDivider = ({ variant = 'crimson' }) => {
  const accentColor = variant === 'gold' ? '#D4AF37' : '#8B0000';
  return (
    <div className="flex items-center justify-center my-6 w-full max-w-2xl mx-auto px-4 select-none">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-500/70 to-amber-600" />
      <svg
        viewBox="0 0 180 44"
        className="w-40 h-10 mx-3 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 22 C28 10, 42 10, 52 22 C42 34, 28 34, 15 22 Z"
          stroke="#D4AF37"
          strokeWidth="1.3"
          fill={accentColor}
          fillOpacity="0.12"
        />
        <circle cx="35" cy="22" r="3" fill="#D4AF37" />
        <circle cx="8" cy="22" r="2" fill="#D4AF37" />
        <circle cx="90" cy="22" r="16" stroke="#D4AF37" strokeWidth="1.4" strokeDasharray="2 2" />
        <path
          d="M90 6 C95 14, 95 30, 90 38 C85 30, 85 14, 90 6 Z"
          fill={accentColor}
          fillOpacity="0.2"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />
        <path
          d="M74 22 C82 17, 98 17, 106 22 C98 27, 82 27, 74 22 Z"
          fill={accentColor}
          fillOpacity="0.2"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />
        <circle cx="90" cy="22" r="4.5" fill={accentColor} stroke="#D4AF37" strokeWidth="1.5" />
        <path
          d="M165 22 C152 10, 138 10, 128 22 C138 34, 152 34, 165 22 Z"
          stroke="#D4AF37"
          strokeWidth="1.3"
          fill={accentColor}
          fillOpacity="0.12"
        />
        <circle cx="145" cy="22" r="3" fill="#D4AF37" />
        <circle cx="172" cy="22" r="2" fill="#D4AF37" />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-amber-500/70 to-amber-600" />
    </div>
  );
};

const GoldCornerOrnament = ({ position = 'top-left' }) => {
  const rotationMap = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90'
  };
  const posClasses = {
    'top-left': 'top-2 left-2',
    'top-right': 'top-2 right-2',
    'bottom-right': 'bottom-2 right-2',
    'bottom-left': 'bottom-2 left-2'
  };
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      className={`w-8 h-8 md:w-10 md:h-10 absolute pointer-events-none opacity-80 ${posClasses[position]} ${rotationMap[position]}`}
    >
      <path
        d="M2 46 V12 C2 6, 6 2, 12 2 H46"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 36 V14 C6 9, 9 6, 14 6 H36"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <path d="M2 2 L16 16" stroke="#D4AF37" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="2.5" fill="#D4AF37" />
      <circle cx="8" cy="24" r="1.5" fill="#D4AF37" />
      <circle cx="24" cy="8" r="1.5" fill="#D4AF37" />
    </svg>
  );
};

const AnimatedDiyaLamp = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="40" cy="24" r="18" fill="url(#diyaAura)" className="animate-pulse" />
    <path
      d="M40 6 C47 16, 50 26, 40 36 C30 26, 33 16, 40 6 Z"
      fill="url(#diyaFlameOuter)"
      className="animate-diya-flame"
      style={{ transformOrigin: '40px 36px' }}
    />
    <path
      d="M40 14 C44 20, 45 27, 40 34 C35 27, 36 20, 40 14 Z"
      fill="#FFFBEB"
      className="animate-diya-flame"
      style={{ transformOrigin: '40px 34px' }}
    />
    <path
      d="M14 40 C22 36, 58 36, 66 40 C62 56, 52 62, 40 62 C28 62, 18 56, 14 40 Z"
      fill="url(#diyaBrassGrad)"
      stroke="#FEF08A"
      strokeWidth="1.5"
    />
    <circle cx="26" cy="45" r="2" fill="#8B0000" />
    <circle cx="40" cy="46" r="2.5" fill="#8B0000" />
    <circle cx="54" cy="45" r="2" fill="#8B0000" />
    <path
      d="M28 65 H52 M22 70 H58"
      stroke="url(#diyaBrassGrad)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <defs>
      <radialGradient id="diyaAura" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="diyaFlameOuter" x1="40" y1="6" x2="40" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="60%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
      <linearGradient id="diyaBrassGrad" x1="14" y1="38" x2="66" y2="68" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#92400E" />
      </linearGradient>
    </defs>
  </svg>
);

const RotatingMandalaHalo = ({ className = 'w-72 h-72' }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`animate-spin-slow pointer-events-none select-none ${className}`}
  >
    <circle cx="100" cy="100" r="94" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
    <circle cx="100" cy="100" r="82" stroke="#D4AF37" strokeWidth="1.2" opacity="0.4" />
    <circle cx="100" cy="100" r="66" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 3" opacity="0.45" />
    {Array.from({ length: 12 }).map((_, idx) => {
      const angle = idx * 30;
      return (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 6 C106 20, 106 32, 100 44 C94 32, 94 20, 100 6 Z"
            stroke="#D4AF37"
            strokeWidth="1.1"
            fill="#D4AF37"
            fillOpacity="0.08"
          />
          <circle cx="100" cy="14" r="2" fill="#FDE047" opacity="0.7" />
        </g>
      );
    })}
  </svg>
);

// ============================================================================
// WEDDING AUDIO ENGINE: REAL MP3 ("AAJ SAJEYA") WITH SYNTH FALLBACK
// ============================================================================
class RoyalWeddingAudioEngine {
  constructor(audioSrc = '/Aaj Sajeya Goldie Sohel 128 Kbps.mp3') {
    this.audioSrc = audioSrc;
    this.audio = null;
    this.isPlaying = false;
    this.ctx = null;
    this.masterGain = null;
    this.intervalId = null;
    this.droneOscs = [];
  }

  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;

    try {
      if (!this.audio) {
        this.audio = new Audio(this.audioSrc);
        this.audio.loop = true;
      }
      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Real audio playback blocked/failed, using synth shehnai fallback:', err);
          this.startSynth();
        });
      }
    } catch (err) {
      this.startSynth();
    }
  }

  startSynth() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 1.5);
    this.masterGain.connect(this.ctx.destination);

    const droneFreqs = [146.83, 220.0, 293.66];
    droneFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = idx === 1 ? 'triangle' : 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      this.droneOscs.push(osc);
    });

    const ragaNotes = [
      293.66, 329.63, 369.99, 440.0, 493.88, 554.37, 587.33, 493.88, 440.0, 369.99, 329.63, 293.66
    ];
    let step = 0;

    const playNote = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const freq = ragaNotes[step % ragaNotes.length];
      step++;

      const osc = this.ctx.createOscillator();
      const mod = this.ctx.createOscillator();
      const modGain = this.ctx.createGain();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      mod.frequency.setValueAtTime(5.5, now);
      modGain.gain.setValueAtTime(3.2, now);
      mod.connect(modGain);
      modGain.connect(osc.frequency);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq * 0.98, now);
      osc.frequency.exponentialRampToValueAtTime(freq, now + 0.18);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(950, now);
      filter.Q.setValueAtTime(2.2, now);

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.22, now + 0.2);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + 1.35);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      mod.start(now);
      osc.stop(now + 1.4);
      mod.stop(now + 1.4);
    };

    playNote();
    this.intervalId = setInterval(playNote, 1450);
  }

  stop() {
    this.isPlaying = false;
    if (this.audio) {
      try {
        this.audio.pause();
      } catch (e) {}
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.droneOscs.forEach((osc) => {
      try {
        osc.stop();
      } catch (e) {}
    });
    this.droneOscs = [];
    if (this.ctx) {
      this.ctx.close().catch(() => {});
      this.ctx = null;
    }
  }
}

// ============================================================================
// MAIN WEDDING INVITATION TEMPLATE COMPONENT
// ============================================================================
export default function TemplateRoyalUdaipur({ data = defaultWeddingData, onRsvpSubmit }) {
  const weddingData = useMemo(() => {
    return {
      couple: { ...defaultWeddingData.couple, ...(data?.couple || {}) },
      events: data?.events?.length ? data.events : defaultWeddingData.events,
      gallery: data?.gallery?.length ? data.gallery : defaultWeddingData.gallery,
      wishes: data?.wishes?.length ? data.wishes : defaultWeddingData.wishes,
      hospitality: data?.hospitality?.length ? data.hospitality : defaultWeddingData.hospitality
    };
  }, [data]);

  // --- Interactive States ---
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const [petalBurstKey, setPetalBurstKey] = useState(0);
  const [extraBurstActive, setExtraBurstActive] = useState(false);
  const [activeDayFilter, setActiveDayFilter] = useState('ALL');
  const [copiedHashtag, setCopiedHashtag] = useState(false);
  const [calendarSavedToast, setCalendarSavedToast] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false);

  // --- Wishes Wall State ---
  const [wishesList, setWishesList] = useState(weddingData.wishes);
  const [newWishName, setNewWishName] = useState('');
  const [newWishRelation, setNewWishRelation] = useState('');
  const [newWishMessage, setNewWishMessage] = useState('');
  const [wishSubmittedBanner, setWishSubmittedBanner] = useState(false);

  // --- RSVP Form State ---
  const [rsvpForm, setRsvpForm] = useState({
    fullName: '',
    whatsapp: '',
    attendeesCount: '2',
    attendingEvents: weddingData.events.map((ev) => ev.id),
    dietaryPreference: 'Pure Vegetarian',
    needsAirportPickup: true,
    blessingMessage: ''
  });
  const [rsvpSubmittedData, setRsvpSubmittedData] = useState(null);
  const [rsvpError, setRsvpError] = useState('');

  // --- Live Countdown State (Targeted to 26 November 2026) ---
  const [countdown, setCountdown] = useState({
    days: 17,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const audioEngineRef = useRef(null);

  useEffect(() => {
    audioEngineRef.current = new RoyalWeddingAudioEngine();
    return () => {
      if (audioEngineRef.current) {
        audioEngineRef.current.stop();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioEngineRef.current) return;
    if (isAudioPlaying) {
      audioEngineRef.current.stop();
      setIsAudioPlaying(false);
    } else {
      audioEngineRef.current.start();
      setIsAudioPlaying(true);
    }
  };

  const triggerFlowerBurst = () => {
    setPetalsEnabled(true);
    setExtraBurstActive(true);
    setPetalBurstKey((prev) => prev + 1);
    setTimeout(() => setExtraBurstActive(false), 6000);
  };

  const handleOpenRoyalInvitation = (withMusic = true) => {
    setIsInvitationOpened(true);
    triggerFlowerBurst();
    if (withMusic && audioEngineRef.current && !isAudioPlaying) {
      audioEngineRef.current.start();
      setIsAudioPlaying(true);
    }
  };

  // --- Save 26 November 2026 to Calendar (.ics download + toast) ---
  const handleSaveWeddingDateToCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Shubh Vivah//RashmiWedsArpit//EN',
      'BEGIN:VEVENT',
      'DTSTART:20261126T133000Z',
      'DTEND:20261126T193000Z',
      `SUMMARY:Shubh Vivah: ${weddingData.couple.brideShort} & ${weddingData.couple.groomShort} (${weddingData.couple.hashtag})`,
      `DESCRIPTION:Auspicious Wedding Ceremony & Swaruchibhoj at ${weddingData.couple.primaryVenue}.`,
      `LOCATION:${weddingData.couple.primaryVenue}, ${weddingData.couple.city}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'Rashmi-Arpit-Wedding-26-Nov-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarSavedToast(true);
    setTimeout(() => setCalendarSavedToast(false), 4000);
  };

  useEffect(() => {
    let targetTime = new Date(weddingData.couple.date).getTime();
    if (isNaN(targetTime)) {
      targetTime = new Date('2026-11-26T19:00:00+05:30').getTime();
    }

    const updateTimer = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [weddingData.couple.date]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % weddingData.gallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex(
          (prev) => (prev - 1 + weddingData.gallery.length) % weddingData.gallery.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, weddingData.gallery.length]);

  const handleCopyHashtag = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(weddingData.couple.hashtag);
    }
    setCopiedHashtag(true);
    setTimeout(() => setCopiedHashtag(false), 2500);
  };

  const filteredEvents = useMemo(() => {
    if (activeDayFilter === 'ALL') return weddingData.events;
    if (activeDayFilter === 'DAY1') {
      return weddingData.events.filter(
        (ev) => ev.dayKey === 'DAY1' || (ev.date || '').includes('24')
      );
    }
    if (activeDayFilter === 'DAY2') {
      return weddingData.events.filter(
        (ev) => ev.dayKey === 'DAY2' || (ev.date || '').includes('25')
      );
    }
    if (activeDayFilter === 'DAY3') {
      return weddingData.events.filter(
        (ev) => ev.dayKey === 'DAY3' || ev.isMainWeddingDay || (ev.date || '').includes('26')
      );
    }
    return weddingData.events;
  }, [activeDayFilter, weddingData.events]);

  const handleToggleEventRsvp = (eventId) => {
    setRsvpForm((prev) => {
      const exists = prev.attendingEvents.includes(eventId);
      const updated = exists
        ? prev.attendingEvents.filter((id) => id !== eventId)
        : [...prev.attendingEvents, eventId];
      return { ...prev, attendingEvents: updated };
    });
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!rsvpForm.fullName.trim() || !rsvpForm.whatsapp.trim()) {
      setRsvpError('कृपया अपना पूरा नाम और व्हाट्सएप नंबर दर्ज करें।');
      return;
    }
    if (rsvpForm.attendingEvents.length === 0) {
      setRsvpError('कृपया कम से कम एक मांगलिक कार्यक्रम का चयन करें।');
      return;
    }
    setRsvpError('');

    const payload = {
      ...rsvpForm,
      weddingDate: '26 November 2026',
      submittedAt: new Date().toISOString()
    };

    setRsvpSubmittedData(payload);
    triggerFlowerBurst();

    if (rsvpForm.blessingMessage.trim()) {
      setWishesList((prev) => [
        {
          name: rsvpForm.fullName.trim(),
          relation: 'आदरणीय अतिथि',
          timeAgo: 'Just now',
          message: rsvpForm.blessingMessage.trim()
        },
        ...prev
      ]);
    }

    if (typeof onRsvpSubmit === 'function') {
      onRsvpSubmit(payload);
    }
  };

  const handleAddWish = (e) => {
    e.preventDefault();
    if (!newWishName.trim() || !newWishMessage.trim()) return;

    const createdWish = {
      name: newWishName.trim(),
      relation: newWishRelation.trim() || 'शुभचिंतक एवं स्नेहीजन',
      timeAgo: 'Just now',
      message: newWishMessage.trim()
    };

    setWishesList((prev) => [createdWish, ...prev]);
    setNewWishName('');
    setNewWishRelation('');
    setNewWishMessage('');
    setWishSubmittedBanner(true);
    triggerFlowerBurst();
    setTimeout(() => setWishSubmittedBanner(false), 4000);
  };

  const floatingPetals = useMemo(() => {
    const count = extraBurstActive ? 38 : 22;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * 3.1 + (i % 5) * 4.5) % 98}%`,
      delay: extraBurstActive ? `${(i % 6) * 0.25}s` : `${(i * 0.8) % 11}s`,
      duration: extraBurstActive ? `${5 + (i % 4) * 1.5}s` : `${10 + (i % 6) * 2}s`,
      size: 13 + (i % 4) * 4,
      type: i % 2 === 0 ? 'marigold' : 'rose'
    }));
  }, [extraBurstActive]);

  const getEventThemeConfig = (theme) => {
    switch (theme) {
      case 'marigold':
        return {
          badgeBg: 'bg-amber-100 text-amber-950 border-amber-500',
          cardBorder: 'border-amber-400 hover:border-amber-500',
          headerStrip: 'from-amber-500 via-yellow-400 to-orange-500',
          accentText: 'text-amber-800',
          iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white',
          glow: 'hover:shadow-amber-500/20'
        };
      case 'emerald':
        return {
          badgeBg: 'bg-emerald-50 text-emerald-950 border-emerald-500',
          cardBorder: 'border-emerald-600/40 hover:border-emerald-600',
          headerStrip: 'from-emerald-800 via-teal-600 to-amber-600',
          accentText: 'text-emerald-900',
          iconBg: 'bg-gradient-to-br from-emerald-700 to-teal-600 text-amber-200',
          glow: 'hover:shadow-emerald-600/20'
        };
      case 'gold':
        return {
          badgeBg: 'bg-amber-50 text-amber-950 border-amber-500',
          cardBorder: 'border-amber-500/70 hover:border-amber-600',
          headerStrip: 'from-amber-700 via-yellow-500 to-amber-600',
          accentText: 'text-amber-900',
          iconBg: 'bg-gradient-to-br from-amber-600 to-yellow-500 text-white',
          glow: 'hover:shadow-amber-500/25'
        };
      case 'maroon':
        return {
          badgeBg: 'bg-rose-50 text-[#720917] border-[#8B0000]/60',
          cardBorder: 'border-[#8B0000] hover:border-[#720917]',
          headerStrip: 'from-[#720917] via-[#991B1B] to-[#D4AF37]',
          accentText: 'text-[#720917]',
          iconBg: 'bg-gradient-to-br from-[#720917] to-[#991B1B] text-amber-200',
          glow: 'hover:shadow-rose-900/25'
        };
      case 'crimson':
      default:
        return {
          badgeBg: 'bg-red-50 text-[#8B0000] border-red-400',
          cardBorder: 'border-amber-500/60 hover:border-[#8B0000]',
          headerStrip: 'from-[#8B0000] via-amber-600 to-[#720917]',
          accentText: 'text-[#8B0000]',
          iconBg: 'bg-gradient-to-br from-[#8B0000] to-amber-700 text-amber-100',
          glow: 'hover:shadow-red-900/20'
        };
    }
  };

  const renderEventIcon = (iconType, theme) => {
    if (iconType === 'haldi' || theme === 'marigold') return <Flower2 className="w-6 h-6" />;
    if (iconType === 'baraat') return <Bus className="w-6 h-6" />;
    if (iconType === 'pheras' || theme === 'maroon') return <Flame className="w-6 h-6" />;
    return <Sparkles className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans relative overflow-x-hidden selection:bg-[#8B0000] selection:text-amber-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .font-royal-serif {
          font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
        }
        .font-display-serif {
          font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
        }

        @keyframes floatPetal {
          0% {
            transform: translateY(-10vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.85;
          }
          50% {
            transform: translateY(50vh) translateX(32px) rotate(180deg);
            opacity: 0.75;
          }
          85% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(110vh) translateX(-24px) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-petal {
          animation-name: floatPetal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes shimmerGold {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .gold-foil-text {
          background: linear-gradient(90deg, #B48327 0%, #FDE047 25%, #FFFBEB 50%, #D4AF37 75%, #B48327 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerGold 6s linear infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spinSlow 28s linear infinite;
        }

        @keyframes diyaFlicker {
          0%, 100% { transform: scaleY(1) rotate(-1deg); opacity: 0.95; }
          25% { transform: scaleY(1.08) rotate(1.5deg); opacity: 1; }
          50% { transform: scaleY(0.95) rotate(-1.5deg); opacity: 0.9; }
          75% { transform: scaleY(1.05) rotate(1deg); opacity: 1; }
        }

        .animate-diya-flame {
          animation: diyaFlicker 1.8s ease-in-out infinite;
        }

        @keyframes pulseGoldGlow {
          0%, 100% {
            box-shadow: 0 0 25px rgba(245, 158, 11, 0.35), 0 0 60px rgba(139, 0, 0, 0.45);
          }
          50% {
            box-shadow: 0 0 45px rgba(253, 224, 71, 0.65), 0 0 90px rgba(212, 175, 55, 0.45);
          }
        }

        .animate-date-plaque {
          animation: pulseGoldGlow 3.5s ease-in-out infinite;
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .animate-float-card {
          animation: gentleFloat 4.5s ease-in-out infinite;
        }

        .royal-brocade-bg {
          background-color: #FDFBF7;
          background-image: radial-gradient(#D4AF37 0.6px, transparent 0.6px), radial-gradient(#8B0000 0.5px, #FDFBF7 0.5px);
          background-size: 36px 36px;
          background-position: 0 0, 18px 18px;
        }
      `}</style>

      {/* =====================================================================
          ROYAL INVITATION SEAL / CURTAIN REVEAL OVERLAY (Animated Entrance)
      ===================================================================== */}
      {!isInvitationOpened && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#2B0307] via-[#590712] to-[#1D0205] text-amber-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-xl w-full rounded-3xl border-2 border-amber-400/70 bg-[#36040B]/90 p-7 sm:p-10 text-center shadow-2xl animate-date-plaque my-auto">
            <GoldCornerOrnament position="top-left" />
            <GoldCornerOrnament position="top-right" />
            <GoldCornerOrnament position="bottom-left" />
            <GoldCornerOrnament position="bottom-right" />

            <p className="text-amber-300 tracking-[0.3em] text-xs uppercase font-semibold">
              ॥ श्री गणेशाय नमः ॥ • शुभ विवाह निमंत्रण
            </p>

            {/* Spinning Mandala + Wax Seal */}
            <div className="relative w-40 h-40 mx-auto my-5 flex items-center justify-center">
              <RotatingMandalaHalo className="w-40 h-40 absolute inset-0" />
              <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-[#720917] border border-amber-300 flex flex-col items-center justify-center">
                  <span className="font-royal-serif text-2xl font-bold text-amber-200 leading-none">
                    {weddingData.couple.brideShort?.[0] || 'R'} &amp; {weddingData.couple.groomShort?.[0] || 'A'}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-amber-300 font-bold mt-1">
                    26 NOV 2026
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-amber-200/90 font-medium">
              ठाकुर एवं मरावी परिवार आपका स्नेहिल स्वागत करता है
            </p>

            <h1 className="font-royal-serif text-4xl sm:text-6xl font-bold gold-foil-text mt-2">
              RASHMI &amp; ARPIT
            </h1>
            <p className="text-amber-100/90 text-sm sm:text-base font-royal-serif mt-1">
              रश्मि ठाकुर संग अर्पित मरावी
            </p>

            {/* Highlighted Date Pill on Envelope */}
            <div className="mt-5 inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-300/30 to-amber-500/20 border-2 border-amber-400 shadow-lg">
              <AnimatedDiyaLamp className="w-8 h-8 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-bold">
                  शुभ पाणिग्रहण संस्कार
                </p>
                <p className="font-royal-serif text-xl sm:text-2xl font-bold text-white tracking-wider">
                  26 NOVEMBER 2026 • JABALPUR
                </p>
              </div>
              <AnimatedDiyaLamp className="w-8 h-8 shrink-0" />
            </div>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenRoyalInvitation(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 text-[#720917] shadow-xl hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                निमंत्रण पत्र खोलें (Play Song • आज सजिया)
              </button>
              <button
                type="button"
                onClick={() => handleOpenRoyalInvitation(false)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-400/50 transition cursor-pointer"
              >
                बिना संगीत के देखें
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FLOATING FLOWER PETAL ANIMATION LAYER (Rose & Marigold Petals)
      ===================================================================== */}
      {petalsEnabled && (
        <div
          key={petalBurstKey}
          className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
          aria-hidden="true"
        >
          {floatingPetals.map((petal) => (
            <div
              key={petal.id}
              className="absolute top-0 animate-petal"
              style={{
                left: petal.left,
                animationDelay: petal.delay,
                animationDuration: petal.duration
              }}
            >
              {petal.type === 'marigold' ? (
                <svg
                  width={petal.size}
                  height={petal.size}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="drop-shadow-sm"
                >
                  <path
                    d="M12 2C14.5 6 19 8 19 13C19 17.5 15.5 21 12 22C8.5 21 5 17.5 5 13C5 8 9.5 6 12 2Z"
                    fill="url(#marigoldPetalGrad)"
                  />
                  <defs>
                    <linearGradient id="marigoldPetalGrad" x1="5" y1="2" x2="19" y2="22">
                      <stop offset="0%" stopColor="#FDE047" />
                      <stop offset="60%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  width={petal.size}
                  height={petal.size}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="drop-shadow-sm"
                >
                  <path
                    d="M12 3C16 6 20 10 18 16C16.5 20 12 22 12 22C12 22 7.5 20 6 16C4 10 8 6 12 3Z"
                    fill="url(#rosePetalGrad)"
                  />
                  <defs>
                    <linearGradient id="rosePetalGrad" x1="4" y1="3" x2="20" y2="22">
                      <stop offset="0%" stopColor="#E11D48" />
                      <stop offset="100%" stopColor="#881337" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <button
          type="button"
          onClick={triggerFlowerBurst}
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-[#720917] font-bold text-xs sm:text-sm shadow-xl border-2 border-white flex items-center gap-2 hover:scale-105 active:scale-95 transition cursor-pointer"
          title="पुष्प वर्षा (Shower Marigold & Rose Petals!)"
        >
          <Flower2 className="w-4 h-4 text-[#8B0000] animate-spin" style={{ animationDuration: '5s' }} />
          <span>पुष्प वर्षा (Blessings)</span>
        </button>
      </div>

      {/* =====================================================================
          STICKY ROYAL NAVIGATION BAR WITH 26 NOV 2026 BADGE
      ===================================================================== */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#FDFBF7]/95 border-b border-amber-500/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#720917] to-[#8B0000] border border-amber-400 flex items-center justify-center text-amber-200 font-royal-serif font-bold text-lg shadow-sm group-hover:scale-105 transition">
                {weddingData.couple.brideShort?.[0] || 'R'}
                <span className="text-xs text-amber-400 mx-0.5">&amp;</span>
                {weddingData.couple.groomShort?.[0] || 'A'}
              </div>
              <div className="hidden sm:block">
                <p className="font-royal-serif font-bold text-lg leading-none text-[#720917]">
                  RASHMI &amp; ARPIT
                </p>
                <p className="text-[11px] text-amber-900 font-semibold tracking-wider">
                  {weddingData.couple.hashtag}
                </p>
              </div>
            </a>

            <a
              href="#wedding-date-plaque"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#720917] to-[#8B0000] text-amber-200 border border-amber-400 text-xs font-bold shadow-xs hover:brightness-110 transition"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>26 NOV 2026</span>
              <span className="hidden lg:inline text-amber-300/80 font-normal">• जबलपुर</span>
            </a>
          </div>

          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-stone-700">
            <a href="#itinerary" className="hover:text-[#8B0000] transition">
              कार्यक्रम (Timeline)
            </a>
            <a href="#venues" className="hover:text-[#8B0000] transition">
              विवाह स्थल (Venue)
            </a>
            <a href="#gallery" className="hover:text-[#8B0000] transition">
              तस्वीरें (Gallery)
            </a>
            <a href="#wishes" className="hover:text-[#8B0000] transition">
              शुभाशीर्वाद (Wishes)
            </a>
            <a href="#rsvp" className="hover:text-[#8B0000] transition">
              उपस्थिति (RSVP)
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleAudio}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition flex items-center gap-1.5 shadow-xs cursor-pointer ${
                isAudioPlaying
                  ? 'bg-[#720917] text-amber-200 border-amber-400'
                  : 'bg-[#FAF5EF] text-[#720917] border-amber-500/60 hover:bg-amber-50'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span className="hidden sm:inline">Song On (आज सजिया)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#8B0000]" />
                  <span className="hidden sm:inline">Play Song (आज सजिया)</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsRsvpModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-[#720917] border border-amber-600/40 shadow-xs hover:brightness-105 transition cursor-pointer"
            >
              RSVP
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          1. HERO SECTION WITH MONUMENTAL "26 NOVEMBER 2026" CENTERPIECE
      ===================================================================== */}
      <section id="hero" className="relative overflow-hidden">
        <div className="relative min-h-[92vh] flex items-center justify-center px-4 py-12 sm:py-16">
          <div className="absolute inset-0 z-0">
            <img
              src={weddingData.couple.bannerImage}
              alt={`${weddingData.couple.groom} & ${weddingData.couple.bride}`}
              className="w-full h-full object-cover object-[center_20%] sm:object-[center_25%] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#250307]/85 via-[#4B0610]/55 to-[#1D0205]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(18,2,5,0.85)_100%)]" />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto border-2 border-amber-400/60 rounded-3xl p-5 sm:p-10 md:p-12 bg-[#2B0409]/60 backdrop-blur-xs shadow-2xl text-center text-[#FDFBF7]">
            <GoldCornerOrnament position="top-left" />
            <GoldCornerOrnament position="top-right" />
            <GoldCornerOrnament position="bottom-left" />
            <GoldCornerOrnament position="bottom-right" />

            {/* Top Invocation & Ganesh Emblem */}
            <div className="flex flex-col items-center justify-center">
              <GaneshKalashEmblem className="w-14 h-14 sm:w-16 sm:h-16 mb-1.5" />
              <p className="text-amber-300 tracking-[0.28em] text-xs uppercase font-bold">
                ॥ श्री गणेशाय नमः ॥ • शुभ विवाह निमंत्रण
              </p>
              <p className="text-amber-100/85 text-xs sm:text-sm italic font-royal-serif mt-1">
                ईश्वर एवं कुलदेवता के शुभाशीर्वाद से, हम आपको हमारे विवाह समारोह में सस्नेह आमंत्रित करते हैं:
              </p>
            </div>

            {/* Couple Names */}
            <div className="my-4">
              <span className="inline-block text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-amber-300 font-bold px-4 py-1 rounded-full bg-black/40 border border-amber-400/50 mb-3 shadow">
                शुभ विवाह निमंत्रण
              </span>
              <h1 className="font-royal-serif text-4xl sm:text-6xl md:text-8xl font-bold tracking-wider leading-none gold-foil-text drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                RASHMI &amp; ARPIT
              </h1>
              <p className="text-xl sm:text-3xl text-amber-200 font-royal-serif mt-3 drop-shadow">
                रश्मि ठाकुर <span className="text-amber-300 italic text-lg sm:text-2xl font-light mx-2">संग</span> अर्पित मरावी
              </p>

              {/* Parent Lineage Details */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto text-xs text-amber-100/90">
                <div className="bg-black/40 border border-amber-400/40 rounded-xl px-4 py-3 text-center sm:text-left shadow-lg">
                  <span className="font-bold text-amber-300 text-sm block">वधू: {weddingData.couple.bride} 👰</span>
                  <span className="block text-amber-100/80 text-[11px] mt-0.5">
                    {weddingData.couple.brideParents}
                  </span>
                </div>
                <div className="bg-black/40 border border-amber-400/40 rounded-xl px-4 py-3 text-center sm:text-left shadow-lg">
                  <span className="font-bold text-amber-300 text-sm block">वर: {weddingData.couple.groom} 🤵</span>
                  <span className="block text-amber-100/80 text-[11px] mt-0.5">
                    {weddingData.couple.groomParents}
                  </span>
                </div>
              </div>
            </div>

            {/* ===============================================================
                MONUMENTAL WEDDING DATE SHOWCASE PLAQUE: 26 NOVEMBER 2026
            =============================================================== */}
            <div
              id="wedding-date-plaque"
              className="relative my-8 max-w-3xl mx-auto flex flex-col items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <RotatingMandalaHalo className="w-80 h-80 sm:w-96 sm:h-96 opacity-45" />
              </div>

              <div className="relative z-10 w-full rounded-3xl bg-gradient-to-b from-[#640814] via-[#43040C] to-[#2B0207] border-2 border-amber-300 p-5 sm:p-8 animate-date-plaque">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-[#720917] text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] shadow-md mb-4">
                  <Crown className="w-3.5 h-3.5" />
                  शुभ पाणिग्रहण संस्कार (Wedding Day)
                  <Crown className="w-3.5 h-3.5" />
                </div>

                <div className="flex items-center justify-center gap-3 sm:gap-8 my-1">
                  <AnimatedDiyaLamp className="w-12 h-12 sm:w-16 sm:h-16 shrink-0" />

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5">
                    <div className="px-5 py-2 rounded-2xl bg-black/35 border-2 border-amber-400/80 shadow-inner">
                      <span className="font-royal-serif text-5xl sm:text-7xl md:text-8xl font-bold gold-foil-text leading-none block">
                        26
                      </span>
                    </div>

                    <div className="text-center sm:text-left">
                      <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-amber-300 font-bold">
                        गुरूवार (Thursday) • मार्गशीर्ष
                      </p>
                      <p className="font-royal-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider leading-tight">
                        NOVEMBER 2026
                      </p>
                      <p className="text-xs sm:text-sm text-amber-200 font-medium flex items-center justify-center sm:justify-start gap-1.5 mt-1">
                        <Flame className="w-4 h-4 text-amber-400" />
                        <span>शुभ मुहूर्त: <strong>शाम 07:00 बजे से आपके आगमन तक</strong></span>
                      </p>
                    </div>
                  </div>

                  <AnimatedDiyaLamp className="w-12 h-12 sm:w-16 sm:h-16 shrink-0" />
                </div>

                {/* Venue & Save-the-Date Action Bar */}
                <div className="mt-5 pt-4 border-t border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-amber-100 text-left">
                    <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>
                      <strong>रिद्धि-सिद्धि मैरिज गार्डन</strong>, पाटन बाईपास के पास, जबलपुर
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={handleSaveWeddingDateToCalendar}
                      className="px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-[#720917] font-bold text-xs transition flex items-center gap-1.5 shadow cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Save 26 Nov to Calendar (.ics)
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyHashtag}
                      className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-amber-300/50 text-amber-200 font-semibold text-xs transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      {weddingData.couple.hashtag}
                      {copiedHashtag ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>

                {calendarSavedToast && (
                  <div className="mt-3 px-4 py-2 rounded-xl bg-emerald-900/90 border border-emerald-400 text-emerald-100 text-xs font-semibold inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    26 November 2026 (.ics) downloaded! हम जबलपुर में आपका स्वागत करते हैं!
                  </div>
                )}
              </div>
            </div>

            {/* Quick 3-Day Overview Strip */}
            <div className="max-w-3xl mx-auto mb-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-amber-300/90 font-semibold mb-2.5">
                कार्यक्रम रूपरेखा (Click any day to see details)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left">
                <a
                  href="#itinerary"
                  onClick={() => setActiveDayFilter('DAY1')}
                  className="p-3 rounded-2xl bg-black/35 hover:bg-black/50 border border-amber-400/35 transition flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 block font-bold">
                      Day 1 • 24 Nov (2 PM)
                    </span>
                    <span className="font-royal-serif text-lg font-bold text-white">
                      मेहंदी उत्सव
                    </span>
                    <span className="text-[11px] text-amber-100/75 block">
                      सतरंगी मेहंदी व उल्लास
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-300" />
                </a>

                <a
                  href="#itinerary"
                  onClick={() => setActiveDayFilter('DAY2')}
                  className="p-3 rounded-2xl bg-black/35 hover:bg-black/50 border border-amber-400/35 transition flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 block font-bold">
                      Day 2 • 25 Nov (12 PM)
                    </span>
                    <span className="font-royal-serif text-lg font-bold text-white">
                      मण्डप एवं हल्दी
                    </span>
                    <span className="text-[11px] text-amber-100/75 block">
                      मण्डपाच्छादन व तेल-हल्दी
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-300" />
                </a>

                <a
                  href="#itinerary"
                  onClick={() => setActiveDayFilter('DAY3')}
                  className="p-3 rounded-2xl bg-gradient-to-r from-amber-400/25 to-amber-500/25 hover:from-amber-400/35 hover:to-amber-500/35 border-2 border-amber-300 shadow-md transition flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 flex items-center gap-1 font-extrabold">
                      <Crown className="w-3 h-3" /> ★ 26 Nov (जबलपुर)
                    </span>
                    <span className="font-royal-serif text-xl font-extrabold text-amber-200">
                      विवाह एवं भोज
                    </span>
                    <span className="text-[11px] text-white font-medium block">
                      प्रस्थान • सात फेरे • स्वरूचिभोज
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-200" />
                </a>
              </div>
            </div>

            {/* Live Countdown Timer to 26 November 2026 */}
            <div className="mb-7">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-300 font-semibold mb-3">
                विवाह समारोह की उल्टी गिनती (Countdown to 26 November 2026)
              </p>
              <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-xl mx-auto">
                {[
                  { label: 'दिन (Days)', value: countdown.days },
                  { label: 'घंटे (Hours)', value: countdown.hours },
                  { label: 'मिनट (Mins)', value: countdown.minutes },
                  { label: 'सेकंड (Secs)', value: countdown.seconds }
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="relative rounded-2xl bg-gradient-to-b from-[#4A0710]/95 to-[#240206]/95 border border-amber-400/60 p-3 sm:p-4 shadow-lg"
                  >
                    <div className="font-royal-serif text-2xl sm:text-4xl md:text-5xl font-bold text-amber-300 tabular-nums">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-100/85 mt-1 font-semibold">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="#rsvp"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm sm:text-base bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 text-[#720917] shadow-lg shadow-amber-500/25 hover:brightness-105 transition flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-[#720917]" />
                अपनी उपस्थिति दर्ज करें (RSVP)
              </a>

              <a
                href="#itinerary"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-white/10 hover:bg-white/20 text-amber-100 border border-amber-300/60 transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                सम्पूर्ण कार्यक्रम विवरण देखें
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Couple Invitation Note */}
      <section className="py-12 px-4 bg-[#FAF5EF] border-b border-amber-500/25">
        <div className="max-w-4xl mx-auto text-center">
          <MandalaDivider variant="crimson" />
          <p className="font-royal-serif italic text-2xl sm:text-3xl md:text-4xl text-[#720917] leading-relaxed px-2">
            “{weddingData.couple.storyQuote}”
          </p>
          <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            24 एवं 25 नवम्बर को निज निवास जबेरा (जिला दमोह) तथा{' '}
            <span className="px-2 py-0.5 rounded bg-amber-200/80 text-[#720917] font-bold">
              26 नवम्बर 2026 (गुरूवार)
            </span>{' '}
            को रिद्धि-सिद्धि मैरिज गार्डन, पाटन बाईपास, जबलपुर में पाणिग्रहण संस्कार एवं स्वरूचिभोज में पधारकर वर-वधू को शुभाशीर्वाद प्रदान करें।
          </p>
          <MandalaDivider variant="gold" />
        </div>
      </section>

      {/* =====================================================================
          2. THE WEDDING ITINERARY / FUNCTIONS GRID
      ===================================================================== */}
      <section id="itinerary" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 royal-brocade-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-[#8B0000]/10 text-[#8B0000] border border-[#8B0000]/25 font-bold">
              <Sparkles className="w-3.5 h-3.5" /> मांगलिक कार्यक्रम एवं समय
            </span>
            <h2 className="font-royal-serif text-4xl sm:text-5xl font-bold text-[#720917] mt-3">
              कार्यक्रम की तिथियां एवं समय
            </h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base">
              मेहंदी, मण्डप, हल्दी, जबलपुर प्रस्थान एवं मुख्य पाणिग्रहण संस्कार का क्रमबद्ध विवरण
            </p>
            <MandalaDivider variant="crimson" />

            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
              {[
                { key: 'ALL', label: 'सभी कार्यक्रम (All Events)' },
                { key: 'DAY1', label: '24 नवम्बर • मेहंदी उत्सव (2 PM)' },
                { key: 'DAY2', label: '25 नवम्बर • मण्डप व हल्दी (12 PM)' },
                { key: 'DAY3', label: '★ 26 नवम्बर 2026 • विवाह एवं स्वरूचिभोज' }
              ].map((tab) => {
                const isMainTab = tab.key === 'DAY3';
                const isSelected = activeDayFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveDayFilter(tab.key)}
                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#720917] to-[#8B0000] text-amber-200 border-amber-400 shadow-lg scale-105'
                        : isMainTab
                        ? 'bg-amber-100 text-[#720917] border-2 border-[#8B0000] hover:bg-amber-200'
                        : 'bg-[#FDFBF7] text-stone-700 border-amber-500/40 hover:border-[#8B0000]'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {filteredEvents.map((event) => {
              const themeCfg = getEventThemeConfig(event.colorTheme);
              const isWeddingDayEvent =
                event.isMainWeddingDay || (event.date || '').includes('26 November 2026');
              const isAttending = rsvpForm.attendingEvents.includes(event.id);

              return (
                <div
                  key={event.id}
                  className={`group relative rounded-3xl bg-[#FDFBF7] border-2 ${
                    event.isPrimaryCeremony
                      ? 'border-[#8B0000] ring-4 ring-amber-400/50 animate-float-card'
                      : themeCfg.cardBorder
                  } shadow-lg ${themeCfg.glow} transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                >
                  <div className={`h-3 w-full bg-gradient-to-r ${themeCfg.headerStrip}`} />

                  {isWeddingDayEvent && (
                    <div className="bg-gradient-to-r from-[#720917] via-[#8B0000] to-[#720917] text-amber-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest flex items-center justify-between border-b border-amber-400/40">
                      <span className="flex items-center gap-1.5">
                        <Crown className="w-3.5 h-3.5 text-amber-300" />
                        {event.isPrimaryCeremony
                          ? '★ मुख्य विवाह समारोह • 26 नवम्बर 2026'
                          : '★ विवाह दिवस • 26 नवम्बर 2026'}
                      </span>
                      <button
                        type="button"
                        onClick={triggerFlowerBurst}
                        className="px-2 py-0.5 rounded-full bg-amber-400 text-[#720917] text-[10px] font-extrabold hover:brightness-110 transition cursor-pointer"
                      >
                        🌸 पुष्प वर्षा
                      </button>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl ${themeCfg.iconBg} flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition`}
                      >
                        {renderEventIcon(event.iconType, event.colorTheme)}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${themeCfg.badgeBg}`}
                      >
                        {event.dayLabel || event.date}
                      </span>
                    </div>

                    <h3 className={`font-royal-serif text-2xl sm:text-3xl font-bold ${themeCfg.accentText}`}>
                      {event.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-amber-900 mt-1">
                      {event.tagline}
                    </p>

                    {event.description && (
                      <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
                        {event.description}
                      </p>
                    )}

                    <div className="mt-5 pt-4 border-t border-amber-400/40 space-y-2.5 text-xs sm:text-sm">
                      <div
                        className={`p-3 rounded-2xl border flex items-center justify-between gap-2 ${
                          isWeddingDayEvent
                            ? 'bg-amber-50/90 border-amber-400 text-[#720917]'
                            : 'bg-[#FAF5EF] border-stone-200 text-stone-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Calendar className="w-4 h-4 text-[#8B0000] shrink-0" />
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-bold">
                              दिनांक एवं समय (Date &amp; Time)
                            </span>
                            <span className="font-bold block">{event.date}</span>
                            <span className="text-xs text-stone-700">{event.time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#FAF5EF] border border-stone-200 flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#8B0000] shrink-0 mt-1" />
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-bold">
                            स्थान (Venue)
                          </span>
                          <p className="font-bold text-stone-800">{event.venue}</p>
                          {event.address && (
                            <p className="text-xs text-stone-500 mt-0.5">{event.address}</p>
                          )}
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#FAF5EF] border border-stone-200 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <Shirt className="w-4 h-4 text-amber-700 shrink-0" />
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-bold">
                              वेशभूषा (Dress Code)
                            </span>
                            <span className="font-semibold text-stone-800 text-xs">
                              {event.dressCode}
                            </span>
                          </div>
                        </div>
                        {event.dressColors && (
                          <div className="flex items-center gap-1 shrink-0">
                            {event.dressColors.map((hex, i) => (
                              <span
                                key={i}
                                className="w-5 h-5 rounded-full border border-stone-400 shadow-xs"
                                style={{ backgroundColor: hex }}
                                title={`Color ${hex}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-3.5 bg-[#FAF5EF] border-t border-amber-400/30 flex items-center justify-between gap-2">
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B0000] hover:text-amber-800 transition"
                    >
                      <Compass className="w-4 h-4" />
                      गूगल मैप्स (Google Maps)
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleToggleEventRsvp(event.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                        isAttending
                          ? 'bg-emerald-800 text-amber-100 shadow-xs'
                          : 'bg-stone-200 text-stone-700 hover:bg-amber-200'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      {isAttending ? 'चयनित (Attending)' : 'RSVP में जोड़ें'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. VENUE, GOOGLE MAPS & HOSPITALITY
      ===================================================================== */}
      <section
        id="venues"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#720917] via-[#5A0712] to-[#3B040B] text-amber-50 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-amber-400/15 text-amber-300 border border-amber-400/30 font-semibold">
              <Hotel className="w-3.5 h-3.5" /> अतिथि देवो भवः • विवाह स्थल एवं व्यवस्था
            </span>
            <h2 className="font-royal-serif text-4xl sm:text-5xl font-bold text-amber-200 mt-3">
              विवाह स्थल एवं आवास व्यवस्था
            </h2>
            <p className="text-amber-100/80 mt-2 text-sm sm:text-base">
              आपकी गरिमामयी उपस्थिति हमारे लिए परम सौभाग्य की बात है। किसी भी सहायता एवं मार्ग दर्शन हेतु संपर्क करें।
            </p>
            <MandalaDivider variant="gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {weddingData.hospitality.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl bg-[#FDFBF7]/10 backdrop-blur-xs border border-amber-400/40 p-6 sm:p-8 flex flex-col justify-between"
              >
                <GoldCornerOrnament position="top-left" />
                <GoldCornerOrnament position="top-right" />
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-[#720917] flex items-center justify-center shadow">
                      {idx === 0 ? <Hotel className="w-5 h-5" /> : <Bus className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-royal-serif text-2xl font-bold text-amber-200">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-300/90 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-amber-100/85 leading-relaxed mt-3">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-400/25 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={item.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 text-[#720917] font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow hover:brightness-105 transition"
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <span className="inline-flex items-center gap-1.5 text-xs text-amber-200">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    संपर्क सूत्र: <strong>{item.phone}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PRE-WEDDING GALLERY WITH LIGHTBOX MODAL
      ===================================================================== */}
      <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-amber-500/15 text-amber-900 border border-amber-500/30 font-semibold">
              <Camera className="w-3.5 h-3.5" /> पावन स्मृतियां • Photo Gallery
            </span>
            <h2 className="font-royal-serif text-4xl sm:text-5xl font-bold text-[#720917] mt-3">
              स्नेहिल यादों का झरोखा
            </h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base">
              वर एवं वधू के मांगलिक सफर की सुंदर झलकियां
            </p>
            <MandalaDivider variant="crimson" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingData.gallery.map((item, idx) => {
              const photoObj =
                typeof item === 'string'
                  ? { url: item, caption: `Wedding Portrait #${idx + 1}`, tag: 'Wedding' }
                  : item;

              return (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-3xl overflow-hidden border-2 border-amber-400/50 shadow-md cursor-pointer aspect-[4/3] bg-stone-200"
                >
                  <img
                    src={photoObj.url}
                    alt={photoObj.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-400/30 border border-amber-300 text-amber-200">
                        {photoObj.tag}
                      </span>
                      <p className="font-royal-serif text-xl font-semibold text-amber-100 mt-1.5">
                        {photoObj.caption}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-amber-400/20 border border-amber-300 flex items-center justify-center text-amber-200 group-hover:bg-amber-400 group-hover:text-[#720917] transition">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. BLESSINGS / WISHES WALL (शुभाशीर्वाद)
      ===================================================================== */}
      <section id="wishes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF5EF] border-y border-amber-500/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-[#065F46]/10 text-[#065F46] border border-[#065F46]/30 font-semibold">
              <Gift className="w-3.5 h-3.5" /> शुभाशीर्वाद • Blessings Wall
            </span>
            <h2 className="font-royal-serif text-4xl sm:text-5xl font-bold text-[#720917] mt-3">
              वर-वधू को शुभाशीर्वाद
            </h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base">
              आपके मंगल वचन और आशीर्वाद रश्मि एवं अर्पित के नए जीवन का सबसे बड़ा उपहार हैं।
            </p>
            <MandalaDivider variant="crimson" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 relative rounded-3xl bg-[#FDFBF7] border-2 border-amber-500/50 p-6 sm:p-8 shadow-lg">
              <GoldCornerOrnament position="top-left" />
              <GoldCornerOrnament position="top-right" />
              <h3 className="font-royal-serif text-2xl sm:text-3xl font-bold text-[#720917]">
                अपना शुभाशीर्वाद भेजें
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                रश्मि एवं अर्पित के लिए अपने मंगल वचन यहां लिखें।
              </p>

              <form onSubmit={handleAddWish} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    आपका नाम एवं परिवार (Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={newWishName}
                    onChange={(e) => setNewWishName(e.target.value)}
                    placeholder="उदा. रमेश सिंह ठाकुर एवं परिवार"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF5EF] border border-amber-500/40 focus:border-[#8B0000] focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    रिश्ता / शहर (Relation / City)
                  </label>
                  <input
                    type="text"
                    value={newWishRelation}
                    onChange={(e) => setNewWishRelation(e.target.value)}
                    placeholder="उदा. पारिवारिक मित्र, जबेरा / मंडला / जबलपुर"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF5EF] border border-amber-500/40 focus:border-[#8B0000] focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    आपका शुभकामना संदेश (Blessing) *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newWishMessage}
                    onChange={(e) => setNewWishMessage(e.target.value)}
                    placeholder="वर-वधू के लिए अपनी मंगलकामनाएं लिखें..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF5EF] border border-amber-500/40 focus:border-[#8B0000] focus:outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#720917] via-[#8B0000] to-[#720917] text-amber-200 font-semibold text-sm border border-amber-400 shadow-md hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  आशीर्वाद संदेश भेजें (Post Blessing)
                </button>

                {wishSubmittedBanner && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-400 text-emerald-900 text-xs font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    धन्यवाद! आपका शुभाशीर्वाद संदेश जोड़ दिया गया है।
                  </div>
                )}
              </form>
            </div>

            <div className="lg:col-span-7 space-y-4 max-h-[540px] overflow-y-auto pr-1">
              {wishesList.map((wish, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl bg-[#FDFBF7] border border-amber-400/60 p-5 sm:p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 text-[#720917] font-royal-serif font-bold text-lg flex items-center justify-center border border-amber-500">
                        {wish.name?.[0] || 'अ'}
                      </div>
                      <div>
                        <h4 className="font-royal-serif font-bold text-lg text-[#720917]">
                          {wish.name}
                        </h4>
                        <p className="text-xs text-amber-800">
                          {wish.relation || 'स्नेहीजन'} • {wish.timeAgo || 'Recently'}
                        </p>
                      </div>
                    </div>
                    <Heart className="w-4 h-4 text-[#8B0000] fill-[#8B0000]/20 shrink-0" />
                  </div>
                  <p className="mt-3 text-stone-700 text-sm leading-relaxed italic font-royal-serif sm:text-base">
                    “{wish.message}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. INTERACTIVE ROYAL RSVP FORM SECTION
      ===================================================================== */}
      <section id="rsvp" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 royal-brocade-bg">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#FDFBF7] border-2 border-amber-500/70 shadow-2xl p-6 sm:p-10 md:p-12 overflow-hidden">
            <GoldCornerOrnament position="top-left" />
            <GoldCornerOrnament position="top-right" />
            <GoldCornerOrnament position="bottom-left" />
            <GoldCornerOrnament position="bottom-right" />

            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-[#8B0000]/10 text-[#8B0000] border border-[#8B0000]/25 font-semibold">
                <Users className="w-3.5 h-3.5" /> उपस्थिति पुष्टि • RSVP Response
              </span>
              <h2 className="font-royal-serif text-3xl sm:text-5xl font-bold text-[#720917] mt-3">
                RSVP for 26 November 2026
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-1">
                कृपया अपनी उपस्थिति की पूर्व सूचना देकर हमारे परिवार को उचित व्यवस्था करने में सहयोग प्रदान करें।
              </p>
              <MandalaDivider variant="gold" />
            </div>

            {rsvpSubmittedData ? (
              <div className="rounded-2xl bg-gradient-to-br from-[#720917] to-[#47040C] text-amber-100 p-6 sm:p-8 border border-amber-400 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-400/20 border-2 border-amber-300 flex items-center justify-center mx-auto text-amber-300">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
                  पधारो म्हारे देश • RSVP Confirmed
                </p>
                <h3 className="font-royal-serif text-3xl sm:text-4xl font-bold text-amber-200">
                  धन्यवाद, {rsvpSubmittedData.fullName}!
                </h3>
                <p className="text-sm text-amber-100/85 max-w-xl mx-auto">
                  रश्मि एवं अर्पित के विवाह में आपके आगमन ({rsvpSubmittedData.attendeesCount} सदस्य) की पुष्टि हो चुकी है। आपका स्वागत है!
                </p>

                <div className="bg-black/25 rounded-xl p-4 max-w-lg mx-auto text-left text-xs space-y-1.5 border border-amber-400/30">
                  <p className="text-amber-300 font-semibold uppercase tracking-wider">
                    सम्मिलित कार्यक्रम ({rsvpSubmittedData.attendingEvents.length}):
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {weddingData.events
                      .filter((ev) => rsvpSubmittedData.attendingEvents.includes(ev.id))
                      .map((ev) => (
                        <span
                          key={ev.id}
                          className="px-2.5 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-100"
                        >
                          {ev.name}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setRsvpSubmittedData(null)}
                    className="px-5 py-2 rounded-full text-xs font-semibold bg-amber-300 text-[#720917] hover:bg-amber-200 transition"
                  >
                    विवरण में संशोधन करें
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-6">
                {rsvpError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-300 text-[#8B0000] text-xs sm:text-sm font-medium">
                    {rsvpError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      अतिथि का पूरा नाम (Full Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={rsvpForm.fullName}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, fullName: e.target.value })}
                      placeholder="उदा. रमेश सिंह ठाकुर"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF5EF] border border-amber-500/50 focus:border-[#8B0000] focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      व्हाट्सएप नंबर (WhatsApp No.) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={rsvpForm.whatsapp}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, whatsapp: e.target.value })}
                      placeholder="उदा. +91 98260 XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF5EF] border border-amber-500/50 focus:border-[#8B0000] focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      उपस्थित सदस्यों की संख्या (Number of Attendees) *
                    </label>
                    <select
                      value={rsvpForm.attendeesCount}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, attendeesCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF5EF] border border-amber-500/50 focus:border-[#8B0000] focus:outline-none text-sm"
                    >
                      <option value="1">1 सदस्य (Solo)</option>
                      <option value="2">2 सदस्य (Couple)</option>
                      <option value="3">3 सदस्य (Family)</option>
                      <option value="4">4 सदस्य (Family)</option>
                      <option value="5+">5+ सदस्य (Entire Family)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      भोजन प्राथमिकता (Dietary Preference) *
                    </label>
                    <div className="relative">
                      <select
                        value={rsvpForm.dietaryPreference}
                        onChange={(e) =>
                          setRsvpForm({ ...rsvpForm, dietaryPreference: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF5EF] border border-amber-500/50 focus:border-[#8B0000] focus:outline-none text-sm"
                      >
                        <option value="Pure Vegetarian">शुद्ध शाकाहारी (Pure Vegetarian)</option>
                        <option value="Jain / Swaminarayan">जैन / सात्विक (No Onion/Garlic)</option>
                        <option value="Non-Vegetarian">पारंपरिक भोज (Non-Vegetarian)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      किन कार्यक्रमों में उपस्थित होंगे? (Select Events) *
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setRsvpForm((prev) => ({
                          ...prev,
                          attendingEvents:
                            prev.attendingEvents.length === weddingData.events.length
                              ? []
                              : weddingData.events.map((ev) => ev.id)
                        }))
                      }
                      className="text-xs text-[#8B0000] font-semibold hover:underline"
                    >
                      {rsvpForm.attendingEvents.length === weddingData.events.length
                        ? 'Deselect All'
                        : 'Select All Events'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {weddingData.events.map((ev) => {
                      const checked = rsvpForm.attendingEvents.includes(ev.id);
                      return (
                        <label
                          key={ev.id}
                          onClick={() => handleToggleEventRsvp(ev.id)}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${
                            checked
                              ? 'bg-amber-50/90 border-[#8B0000] text-[#720917]'
                              : 'bg-[#FAF5EF] border-stone-300 text-stone-600'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                              checked
                                ? 'bg-[#8B0000] border-[#8B0000] text-amber-200'
                                : 'bg-white border-stone-400'
                            }`}
                          >
                            {checked && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <div className="text-xs sm:text-sm">
                            <p className="font-semibold leading-tight">{ev.name}</p>
                            <p className="text-[11px] text-stone-500">{ev.date}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    वर-वधू के लिए कोई विशेष संदेश (Optional Note)
                  </label>
                  <textarea
                    rows={3}
                    value={rsvpForm.blessingMessage}
                    onChange={(e) =>
                      setRsvpForm({ ...rsvpForm, blessingMessage: e.target.value })
                    }
                    placeholder="कोई विशेष संदेश या आगमन की जानकारी..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF5EF] border border-amber-500/50 focus:border-[#8B0000] focus:outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-sm sm:text-base bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-[#720917] border border-amber-600/50 shadow-lg hover:brightness-105 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  उपस्थिति की पुष्टि भेजें (Confirm RSVP)
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1C0407] border-2 border-amber-400/60 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-amber-200 border border-amber-400/50 flex items-center justify-center hover:bg-[#8B0000] transition"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black flex items-center justify-center">
              {(() => {
                const currentItem = weddingData.gallery[lightboxIndex];
                const url = typeof currentItem === 'string' ? currentItem : currentItem.url;
                const caption =
                  typeof currentItem === 'string'
                    ? `Wedding Portrait ${lightboxIndex + 1}`
                    : currentItem.caption;

                return (
                  <>
                    <img
                      src={url}
                      alt={caption}
                      className="max-h-[75vh] w-auto object-contain"
                    />
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-amber-100">
                      <div>
                        <p className="font-royal-serif text-xl sm:text-2xl font-bold text-amber-200">
                          {caption}
                        </p>
                        <p className="text-xs text-amber-300/80">
                          Portrait {lightboxIndex + 1} of {weddingData.gallery.length} •{' '}
                          {weddingData.couple.hashtag}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setLightboxIndex(
                              (prev) =>
                                (prev - 1 + weddingData.gallery.length) %
                                weddingData.gallery.length
                            )
                          }
                          className="p-2.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-[#720917] border border-amber-300/40 transition"
                          aria-label="Previous Image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setLightboxIndex((prev) => (prev + 1) % weddingData.gallery.length)
                          }
                          className="p-2.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-[#720917] border border-amber-300/40 transition"
                          aria-label="Next Image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Quick RSVP Modal */}
      {isRsvpModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsRsvpModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl bg-[#FDFBF7] border-2 border-amber-500 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsRsvpModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center hover:bg-[#8B0000] hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-5">
              <GaneshKalashEmblem className="w-12 h-12 mx-auto mb-1" />
              <h3 className="font-royal-serif text-3xl font-bold text-[#720917]">
                Quick RSVP
              </h3>
              <p className="text-xs text-stone-600">
                {weddingData.couple.brideShort} &amp; {weddingData.couple.groomShort} •{' '}
                {weddingData.couple.displayDate}
              </p>
            </div>

            <form
              onSubmit={(e) => {
                handleRsvpSubmit(e);
                setIsRsvpModalOpen(false);
                const rsvpEl = document.getElementById('rsvp');
                if (rsvpEl) rsvpEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="space-y-4"
            >
              <input
                type="text"
                required
                value={rsvpForm.fullName}
                onChange={(e) => setRsvpForm({ ...rsvpForm, fullName: e.target.value })}
                placeholder="आपका नाम (Full Name) *"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF5EF] border border-amber-500/50 text-sm"
              />
              <input
                type="tel"
                required
                value={rsvpForm.whatsapp}
                onChange={(e) => setRsvpForm({ ...rsvpForm, whatsapp: e.target.value })}
                placeholder="व्हाट्सएप नंबर (WhatsApp) *"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF5EF] border border-amber-500/50 text-sm"
              />
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={rsvpForm.attendeesCount}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, attendeesCount: e.target.value })}
                  className="px-3 py-2.5 rounded-xl bg-[#FAF5EF] border border-amber-500/50 text-sm"
                >
                  <option value="1">1 सदस्य</option>
                  <option value="2">2 सदस्य</option>
                  <option value="3">3 सदस्य</option>
                  <option value="4">4 सदस्य</option>
                  <option value="5+">5+ सदस्य</option>
                </select>
                <select
                  value={rsvpForm.dietaryPreference}
                  onChange={(e) =>
                    setRsvpForm({ ...rsvpForm, dietaryPreference: e.target.value })
                  }
                  className="px-3 py-2.5 rounded-xl bg-[#FAF5EF] border border-amber-500/50 text-sm"
                >
                  <option value="Pure Vegetarian">शुद्ध शाकाहारी</option>
                  <option value="Jain / Swaminarayan">जैन / सात्विक</option>
                  <option value="Non-Vegetarian">पारंपरिक भोज</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#720917] to-[#8B0000] text-amber-200 font-semibold text-sm border border-amber-400 shadow-md"
              >
                उपस्थिति की पुष्टि करें
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Royal Footer */}
      <footer className="bg-[#230307] text-amber-100/90 py-14 px-4 border-t-2 border-amber-500/50 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <GaneshKalashEmblem className="w-14 h-14 mb-3" />
          <p className="font-royal-serif text-3xl sm:text-5xl font-bold gold-foil-text tracking-wider">
            RASHMI &amp; ARPIT
          </p>
          <p className="font-royal-serif text-lg sm:text-xl text-amber-200 mt-1">
            रश्मि ठाकुर संग अर्पित मरावी
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/50 text-amber-200 text-xs sm:text-sm font-bold tracking-widest uppercase">
            <Calendar className="w-4 h-4 text-amber-300" />
            शुभ पाणिग्रहण संस्कार: 26 नवम्बर 2026 • जबलपुर
          </div>
          <p className="text-xs text-amber-100/60 mt-4 max-w-md">
            दर्शनाभिलाषी: ठाकुर एवं मरावी परिवार • जबेरा (दमोह) एवं मंडला
          </p>
          <button
            type="button"
            onClick={() => setIsInvitationOpened(false)}
            className="mt-5 text-xs text-amber-300/80 underline hover:text-amber-200 cursor-pointer"
          >
            शाही निमंत्रण पुनः देखें (Replay Reveal Animation)
          </button>
        </div>
      </footer>
    </div>
  );
}
