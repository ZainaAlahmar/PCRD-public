import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Activities", href: "/activities" },
  { label: "Publications", href: "/publications" },
  { label: "Profile", href: "/profile" },
  {
    label: "Organization",
    subItems: [
      { label: "About PCRD", href: "/about" },
      { label: "Registration Certificate", href: "/registration" },
      { label: "Financial Reports", href: "/financial-reports" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];
