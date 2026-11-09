import React, { useState } from 'react';
import {
  Layers,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Check,
  ArrowRightLeft,
  Share2,
  Copy,
  Eye,
  EyeOff
} from 'lucide-react';
import { templatesRegistry } from '../templates/registry';

export default function TemplateSwitcherBar({ activeTemplateId, onSelectTemplate }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedInvite, setCopiedInvite] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const activeTemplate =
    templatesRegistry.find((t) => t.id === activeTemplateId) || templatesRegistry[0];

  const otherTemplate =
    templatesRegistry.find((t) => t.id !== activeTemplateId) || templatesRegistry[0];

  const weddingMessage = `🚩 ॥ श्री गणेशाय नमः ॥ 🚩
स्नेही स्वजन,
ठाकुर एवं मरावी परिवार की ओर से सादर प्रणाम।

परमपिता परमात्मा एवं कुलदेवता के शुभाशीर्वाद से:
वधू: रश्मि ठाकुर 👰 (सुपुत्री: श्रीमति जानकी एवं श्री मान सिंह ठाकुर, जबेरा)
संग
वर: अर्पित मरावी 🤵 (सुपुत्र: श्री बल्देव प्रसाद मरावी, मंडला)

के शुभ विवाह के मांगलिक अवसर पर आपका स्नेहिल शुभाशीर्वाद सादर प्रार्थनीय है।

📅 मांगलिक कार्यक्रम रूपरेखा:
• 24 नवम्बर 2026 (दोपहर 02:00 बजे से): मेहंदी उत्सव (निज निवास जबेरा)
• 25 नवम्बर 2026 (दोपहर 12:00 बजे से): मण्डप एवं हल्दी संस्कार (निज निवास जबेरा)
• 26 नवम्बर 2026 (सुबह 10:00 बजे): जबेरा से जबलपुर बस प्रस्थान
• 26 नवम्बर 2026 (शाम 07:00 बजे से): पाणिग्रहण संस्कार (सात फेरे) एवं स्वरूचिभोज

📍 मुख्य विवाह स्थल:
रिद्धि-सिद्धि मैरिज गार्डन, पाटन बाईपास के पास, ग्रिड कॉर्पोरेशन के सामने, जबलपुर (म.प्र.)

वेडिंग हैशटैग: #RashmiWedsArpit
कृपया पधारकर नवदम्पति को अपना शुभाशीर्वाद प्रदान करें। 🙏`;

  const handleShareWhatsApp = () => {
    const encoded = encodeURIComponent(weddingMessage);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const handleCopyInviteText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(weddingMessage);
      setCopiedInvite(true);
      setTimeout(() => setCopiedInvite(false), 2500);
    }
  };

  if (isMinimized) {
    return (
      <aside aria-label="Template switcher toggle" className="fixed top-3 right-4 z-50">
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="px-3 py-1.5 rounded-full bg-[#1C0407]/90 text-amber-200 border border-amber-400 text-xs font-bold shadow-xl flex items-center gap-1.5 hover:scale-105 transition cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-amber-300" />
          <span>Switch Template</span>
        </button>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Template switcher"
      className="fixed top-2.5 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-xl transition-all duration-300 pointer-events-auto"
    >
      <div className="bg-[#1C0407]/92 backdrop-blur-md border border-amber-400/80 text-amber-100 rounded-2xl shadow-2xl p-2 sm:p-2.5">
        {/* Compact Header Row */}
        <div className="flex items-center justify-between gap-2">
          {/* Active Template Info */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="p-1.5 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate">
                {activeTemplate.name}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Direct Switch Button */}
            <button
              type="button"
              onClick={() => onSelectTemplate(otherTemplate.id)}
              className="px-2.5 py-1 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-300 to-amber-500 text-[#720917] hover:brightness-110 shadow flex items-center gap-1 transition cursor-pointer"
              title={`Switch to ${otherTemplate.name}`}
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>{otherTemplate.badge}</span>
            </button>

            {/* WhatsApp Share Button */}
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="p-1.5 px-2 rounded-xl text-xs font-bold bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-400/50 flex items-center gap-1 transition cursor-pointer"
              title="WhatsApp पर निमंत्रण शेयर करें"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Share</span>
            </button>

            {/* Expand Drawer Button */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-400/40 transition cursor-pointer"
              aria-label={isExpanded ? 'Collapse templates list' : 'Expand templates list'}
              title="View all designs"
            >
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {/* Minimize Bar for Clean View */}
            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="p-1.5 px-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-stone-200 border border-stone-400/40 transition cursor-pointer flex items-center gap-1"
              title="Hide switcher for clean screenshot / guest view"
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">Hide</span>
            </button>
          </div>
        </div>

        {/* Expanded Drawer for Choosing Any Template + Quick Actions */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-amber-400/30 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-amber-200/90 font-medium">
              <span>डिज़ाइन का चयन करें (Click to Switch):</span>
              <button
                type="button"
                onClick={handleCopyInviteText}
                className="text-[10px] text-amber-300 underline flex items-center gap-1 hover:text-amber-100"
              >
                {copiedInvite ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" /> कॉपी हो गया!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> पूरा निमंत्रण कॉपी करें
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {templatesRegistry.map((tmpl) => {
                const isSelected = tmpl.id === activeTemplateId;
                return (
                  <button
                    key={tmpl.id}
                    type="button"
                    onClick={() => {
                      onSelectTemplate(tmpl.id);
                      setIsExpanded(false);
                    }}
                    className={`p-3 rounded-xl border text-left transition flex items-start justify-between cursor-pointer w-full ${
                      isSelected
                        ? 'bg-amber-400/25 border-amber-300 ring-2 ring-amber-400/40 text-white'
                        : 'bg-black/40 border-amber-400/30 hover:bg-white/10 text-amber-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs sm:text-sm text-white">{tmpl.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-amber-200/80 mt-1 line-clamp-2">
                        {tmpl.subtitle}
                      </p>
                    </div>

                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                        isSelected
                          ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/50'
                          : 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                      }`}
                    >
                      {isSelected ? 'Active' : tmpl.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
