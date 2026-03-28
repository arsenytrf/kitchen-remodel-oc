import { Star } from "lucide-react";
import { reviews } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

function GoogleBadge() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="w-[360px] shrink-0 bg-white border border-stone-200 rounded-xl p-6 mx-2 hover-lift">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-brass-500 fill-brass-500"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-stone-700 text-sm leading-relaxed line-clamp-4 mb-4">
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-walnut-100 rounded-full flex items-center justify-center shrink-0">
          <span className="text-walnut-700 font-bold text-sm">
            {review.initial}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">
            {review.author}
          </p>
          <p className="text-xs text-stone-400">{review.project}</p>
        </div>
      </div>
    </div>
  );
}

export function ReviewMarquee() {
  const row1 = reviews.slice(0, 4);
  const row2 = reviews.slice(4);
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 text-walnut-600">
                What Homeowners Say
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
                Real Projects, Real Reviews
              </h2>
            </div>

            {/* Google badge */}
            <div className="hidden sm:flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-3">
              <GoogleBadge />
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-brass-500 fill-brass-500"
                    />
                  ))}
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  5.0 from {reviews.length} reviews
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Row 1 — forward */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {row1Doubled.map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10" />
        <div className="flex animate-marquee-reverse whitespace-nowrap py-2">
          {row2Doubled.map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
