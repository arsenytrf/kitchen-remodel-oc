export const basePath = "/kitchen-remodel-oc";

export const company = {
  name: "Kitchen Remodeling by Misael",
  shortName: "KR by Misael",
  tagline: "Licensed Kitchen Remodeling in Orange County",
  phone: "(657) 333-7848",
  phoneLink: "tel:+16573337848",
  email: "misaelkitchenremodel@gmail.com",
  license: "#1152610",
  address: {
    city: "Tustin",
    state: "CA",
    region: "Orange County",
  },
  hours: "Mon-Sat: 7AM-6PM",
  hoursStructured: [
    { days: "Monday-Saturday", open: "7:00 AM", close: "6:00 PM" },
    { days: "Sunday", open: "Closed", close: "Closed" },
  ],
  experience: "15+",
  founded: "2010",
  areasServed: [
    "Tustin",
    "Irvine",
    "Santa Ana",
    "Anaheim",
    "Orange",
    "Costa Mesa",
    "Newport Beach",
    "Huntington Beach",
    "Fullerton",
    "Laguna Niguel",
    "Mission Viejo",
    "Lake Forest",
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72728785788!2d-117.87138565!3d33.7455731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdfa1f9b1c455%3A0x1ab7db88a9c8148!2sTustin%2C%20CA!5e0!3m2!1sen!2sus!4v1711732800000",
  formAction: "mailto:misaelkitchenremodel@gmail.com",
} as const;

export const galleryImages = [
  {
    src: "https://images.craigslist.org/00d0d_iLRaX4nZ7RN_0CI0t2_600x450.jpg",
    alt: "Modern kitchen remodel with white cabinets and granite countertops",
    category: "Full Remodel",
  },
  {
    src: "https://images.craigslist.org/00C0C_6MTD8XlE6P8_0CI0t2_600x450.jpg",
    alt: "Custom cabinet installation with stainless steel appliances",
    category: "Cabinets",
  },
  {
    src: "https://images.craigslist.org/00v0v_4nvJT3hOFv_0CI0t2_600x450.jpg",
    alt: "Elegant kitchen with marble countertops and pendant lighting",
    category: "Countertops",
  },
  {
    src: "https://images.craigslist.org/00101_3hRoz1Xocf4_0CI0t2_600x450.jpg",
    alt: "Spacious kitchen design with island and bar seating",
    category: "Full Remodel",
  },
  {
    src: "https://images.craigslist.org/00P0P_kkhpoIV3OM7_0CI0t2_600x450.jpg",
    alt: "Kitchen backsplash tile work with subway pattern",
    category: "Backsplash",
  },
  {
    src: "https://images.craigslist.org/00u0u_c9ffxXe61xH_0CI0t2_600x450.jpg",
    alt: "Completed kitchen with modern fixtures and recessed lighting",
    category: "Full Remodel",
  },
  {
    src: "https://images.craigslist.org/00k0k_gArRTQwIiZn_0t20CI_600x450.jpg",
    alt: "Dark wood cabinet installation with quartz countertops",
    category: "Cabinets",
  },
  {
    src: "https://images.craigslist.org/00909_iY7Ek54de8w_0CI0t2_600x450.jpg",
    alt: "Kitchen renovation with new flooring and lighting",
    category: "Flooring",
  },
  {
    src: "https://images.craigslist.org/00Q0Q_f5bfBDFrTyI_0CI0t2_600x450.jpg",
    alt: "Open concept kitchen with large windows and natural light",
    category: "Full Remodel",
  },
  {
    src: "https://images.craigslist.org/00o0o_hBPVRKDnLm8_0CI0t2_600x450.jpg",
    alt: "Luxury kitchen remodel with custom cabinetry and stone counters",
    category: "Countertops",
  },
];

export const reviews = [
  {
    author: "Maria G.",
    initial: "M",
    quote: "Misael completely transformed our outdated kitchen. The attention to detail on the cabinets and countertops was incredible. He kept us informed every step of the way.",
    project: "Full Kitchen Remodel — Irvine",
    rating: 5,
  },
  {
    author: "David & Karen L.",
    initial: "D",
    quote: "We interviewed four contractors before choosing Misael. Best decision we made. He came in on budget and the quartz countertops look like they belong in a magazine.",
    project: "Countertop & Cabinet Upgrade — Tustin",
    rating: 5,
  },
  {
    author: "Robert T.",
    initial: "R",
    quote: "The backsplash work alone was worth it. Misael's tile work is flawless. He also replaced our sink and faucet — everything looks brand new.",
    project: "Backsplash & Fixtures — Santa Ana",
    rating: 5,
  },
  {
    author: "Jennifer P.",
    initial: "J",
    quote: "From permits to final inspection, Misael handled everything. Our kitchen went from a 1990s disaster to a modern space we actually want to cook in.",
    project: "Complete Renovation — Orange",
    rating: 5,
  },
  {
    author: "Carlos M.",
    initial: "C",
    quote: "Misael did our kitchen cabinets and flooring. Clean work, no mess left behind, and he finished a day early. Already recommended him to my neighbor.",
    project: "Cabinets & Flooring — Anaheim",
    rating: 5,
  },
  {
    author: "Susan W.",
    initial: "S",
    quote: "The granite countertops Misael installed are stunning. He helped us pick the perfect slab and the edge detail is beautiful. Very reasonable pricing too.",
    project: "Granite Countertops — Costa Mesa",
    rating: 5,
  },
  {
    author: "Mike & Lisa R.",
    initial: "M",
    quote: "We needed new lighting, plumbing fixtures, and a complete cabinet refresh. Misael coordinated all of it without a single hiccup. Professional from start to finish.",
    project: "Kitchen Update — Newport Beach",
    rating: 5,
  },
  {
    author: "Patricia H.",
    initial: "P",
    quote: "Second time using Misael — first for our main kitchen, now the guest house. Same quality both times. He takes pride in his work and it shows.",
    project: "Guest Kitchen Build — Laguna Niguel",
    rating: 5,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We visit your home, measure the space, discuss your vision, and walk you through material options — countertops, cabinets, tile, fixtures. No pressure, no cost.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "We create a detailed plan with layout, materials, timeline, and transparent pricing. We handle permits so you don't have to.",
  },
  {
    number: "03",
    title: "Demo & Prep",
    description: "Old cabinets, countertops, and flooring come out. We protect the rest of your home and prep the space for new work.",
  },
  {
    number: "04",
    title: "Build & Install",
    description: "Cabinets, countertops, tile, plumbing, electrical, flooring — everything goes in with precision. We keep the site clean daily.",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "We walk through every detail together. Touch-ups, adjustments, final inspection. You don't pay the balance until you're completely satisfied.",
  },
];
