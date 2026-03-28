import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Kitchen Design", href: "/services#kitchen-design-planning" },
    { label: "Cabinets", href: "/services#cabinet-installation" },
    { label: "Countertops", href: "/services#countertops" },
    { label: "Backsplash & Tile", href: "/services#backsplash-tile" },
    { label: "Plumbing", href: "/services#plumbing-fixtures" },
    { label: "Electrical", href: "/services#electrical-lighting" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/#gallery" },
    { label: "Our Process", href: "/#process" },
    { label: "Service Areas", href: "/about#service-areas" },
  ],
};
