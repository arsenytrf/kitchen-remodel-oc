"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Phone, ArrowLeft } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

type Step = "service" | "urgency" | "property" | "description" | "contact" | "done";

interface Message {
  from: "bot" | "user";
  text: string;
}

const serviceOptions = [
  "Full Kitchen Remodel",
  ...services.slice(0, 5).map((s) => s.title),
  "Other",
];

const urgencyOptions = [
  "ASAP",
  "This week",
  "This month",
  "Just getting quotes",
];

const propertyOptions = [
  "Single-family home",
  "Condo / Townhome",
  "Multi-unit property",
  "Commercial",
];

export function LeadCollector() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("service");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hey there! Tell us about your kitchen project and we'll get Misael to call you back. What kind of work do you need?",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    urgency: "",
    property: "",
    description: "",
    name: "",
    phone: "",
    email: "",
  });

  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const addBotMessage = (text: string) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text }]);
    }, 350);
  };

  const handleOptionClick = (value: string) => {
    setMessages((prev) => [...prev, { from: "user", text: value }]);

    if (step === "service") {
      setFormData((prev) => ({ ...prev, service: value }));
      addBotMessage("Got it. How soon are you looking to get started?");
      setTimeout(() => setStep("urgency"), 400);
    } else if (step === "urgency") {
      setFormData((prev) => ({ ...prev, urgency: value }));
      addBotMessage("What kind of property is this for?");
      setTimeout(() => setStep("property"), 400);
    } else if (step === "property") {
      setFormData((prev) => ({ ...prev, property: value }));
      addBotMessage(
        "Anything specific you want us to know about the project? Type a quick note or just hit skip."
      );
      setTimeout(() => setStep("description"), 400);
    }
  };

  const handleDescriptionSubmit = (text: string) => {
    setMessages((prev) => [...prev, { from: "user", text: text || "No details" }]);
    setFormData((prev) => ({ ...prev, description: text }));
    addBotMessage(
      "Almost done. Drop your name and phone and Misael will reach out to schedule a free consultation."
    );
    setTimeout(() => setStep("contact"), 400);
  };

  const handleContactSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: `${formData.name} — ${formData.phone}` },
    ]);

    // Build mailto
    const subject = encodeURIComponent(
      `Lead from Chatbot: ${formData.name} — ${formData.service}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nService: ${formData.service}\nUrgency: ${formData.urgency}\nProperty: ${formData.property}\n\nDetails:\n${formData.description}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;

    addBotMessage(
      `Thanks ${formData.name.split(" ")[0]}! Misael will call you shortly. If you need us sooner, call ${company.phone} — we pick up.`
    );
    setTimeout(() => setStep("done"), 400);
  };

  const reset = () => {
    setStep("service");
    setMessages([
      {
        from: "bot",
        text: "Hey there! Tell us about your kitchen project and we'll get Misael to call you back. What kind of work do you need?",
      },
    ]);
    setFormData({
      service: "",
      urgency: "",
      property: "",
      description: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-24 right-6 z-50 bg-white text-walnut-700 shadow-lg border border-stone-200 px-5 py-3 rounded-full flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold">Hey, how can we help?</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[560px] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-walnut-700 text-white p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-lg">K</span>
              </div>
              <div>
                <p className="text-sm font-bold">Kitchen Remodeling</p>
                <p className="text-[10px] text-walnut-200">by Misael &middot; Usually replies fast</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-walnut-700 text-white rounded-br-md"
                      : "bg-stone-100 text-stone-800 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-stone-100 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* Interactive options */}
            {!typing && step === "service" && (
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className="px-3 py-1.5 text-xs font-medium bg-walnut-50 text-walnut-700 border border-walnut-200 rounded-full hover:bg-walnut-100 transition-colors duration-300"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {!typing && step === "urgency" && (
              <div className="flex flex-wrap gap-2">
                {urgencyOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className="px-3 py-1.5 text-xs font-medium bg-walnut-50 text-walnut-700 border border-walnut-200 rounded-full hover:bg-walnut-100 transition-colors duration-300"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {!typing && step === "property" && (
              <div className="flex flex-wrap gap-2">
                {propertyOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className="px-3 py-1.5 text-xs font-medium bg-walnut-50 text-walnut-700 border border-walnut-200 rounded-full hover:bg-walnut-100 transition-colors duration-300"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {!typing && step === "description" && (
              <DescriptionInput onSubmit={handleDescriptionSubmit} />
            )}

            {!typing && step === "contact" && (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your name *"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:border-walnut-500 focus:outline-none transition-colors duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone number *"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:border-walnut-500 focus:outline-none transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:border-walnut-500 focus:outline-none transition-colors duration-300"
                />
                <button
                  onClick={handleContactSubmit}
                  disabled={!formData.name.trim() || !formData.phone.trim()}
                  className="w-full bg-walnut-700 hover:bg-walnut-800 text-white py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send My Info
                </button>
              </div>
            )}

            {!typing && step === "done" && (
              <div className="flex flex-col gap-2">
                <a
                  href={company.phoneLink}
                  className="flex items-center justify-center gap-2 bg-brass-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-brass-700 transition-colors duration-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call {company.phone}
                </a>
                <div className="flex gap-2">
                  <button
                    onClick={() => setOpen(false)}
                    className="flex-1 py-2 text-sm text-stone-500 hover:text-stone-700 border border-stone-200 rounded-lg transition-colors duration-300"
                  >
                    Close
                  </button>
                  <button
                    onClick={reset}
                    className="flex-1 py-2 text-sm text-walnut-600 hover:text-walnut-700 border border-walnut-200 rounded-lg flex items-center justify-center gap-1 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Start Over
                  </button>
                </div>
              </div>
            )}

            <div ref={messagesEnd} />
          </div>
        </div>
      )}
    </>
  );
}

function DescriptionInput({
  onSubmit,
}: {
  onSubmit: (text: string) => void;
}) {
  const [text, setText] = useState("");

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Type details here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit(text);
        }}
        className="flex-1 px-3 py-2 text-sm border border-stone-200 rounded-lg focus:border-walnut-500 focus:outline-none transition-colors duration-300"
      />
      <button
        onClick={() => onSubmit(text)}
        className="px-3 py-2 bg-walnut-700 text-white rounded-lg hover:bg-walnut-800 transition-colors duration-300"
      >
        <Send className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={() => onSubmit("")}
        className="px-3 py-2 text-xs text-stone-400 border border-stone-200 rounded-lg hover:text-stone-600 transition-colors duration-300"
      >
        Skip
      </button>
    </div>
  );
}
