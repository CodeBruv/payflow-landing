import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Features", href: "#features" },
    { label: "Product", href: "#dashboard" },
    { label: "Why PayFlow", href: "#why" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const handleClick = (href: string) => {
    setOpen(false); // close mobile menu if open
    if (href.startsWith("#")) {
      // Scroll to section
      if (location.pathname !== "/") {
        navigate("/"); // go home first
        setTimeout(() => {
          const el = document.getElementById(href.replace("#", ""));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        const el = document.getElementById(href.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to page
      navigate(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="./" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight">PayFlow</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Log in
          </Button>
          <Button
            size="sm"
            className="gradient-primary text-primary-foreground border-0 shadow-glow"
            onClick={() => handleClick("/get-started")}
          >
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2 w-full text-left"
            >
              {l.label}
            </button>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button
              size="sm"
              className="gradient-primary text-primary-foreground border-0"
              onClick={() => handleClick("/get-started")}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;