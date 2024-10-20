export const CompanyName = "Syntax Sync";

export const Routes = {
  Home: "/",
  Services: "/services",
  About: "/about",
  Contact: "/contact",
  Login: "/auth/sign-in",
  SignUp: "/auth/sign-up",
  Dashboard: "/dashboard",
  Studio: "/studio",
} as const;

export const navItems = [
  { name: "Home", href: Routes.Home },
  { name: "Services", href: Routes.Services },
  { name: "About", href: Routes.About },
  { name: "Contact", href: Routes.Contact },
] as const;
