import { company } from "@/data/company";

export function StatsTicker() {
  const items = [
    `${company.experience}+ YEARS`,
    "500+ KITCHENS",
    "5.0 RATING",
    "LICENSED & INSURED",
    `CA ${company.license}`,
    "12 CITIES SERVED",
    "MON-SAT 7AM-6PM",
    "FREE ESTIMATES",
    "ORANGE COUNTY",
    "PERMITS HANDLED",
  ];

  const repeated = [...items, ...items];

  return (
    <section className="bg-stone-900 py-4 overflow-hidden border-y border-stone-800">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-4">
            <span className="text-xs font-heading font-bold tracking-[0.2em] text-stone-400">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-brass-500 rotate-45 shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
