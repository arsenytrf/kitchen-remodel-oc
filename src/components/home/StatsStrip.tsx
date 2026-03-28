import { CountUp } from "@/components/shared/CountUp";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Kitchens Remodeled" },
  { value: 12, suffix: "", label: "OC Cities Served" },
  { value: 100, suffix: "%", label: "Licensed & Insured" },
];

export function StatsStrip() {
  return (
    <section className="diagonal-both bg-walnut-700 -mt-1 relative overflow-hidden">
      {/* Photo bg at 12% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00u0u_c9ffxXe61xH_0CI0t2_600x450.jpg')",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${
                i < stats.length - 1
                  ? "lg:border-r lg:border-white/20"
                  : ""
              }`}
            >
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/70 text-sm mt-2 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
