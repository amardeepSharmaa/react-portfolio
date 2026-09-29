import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setTheme } from "../store/themeSlice";
import profile from "../data/profile";
import { SiReact } from "react-icons/si";
const links = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Experience", "experience"],
  ["Projects", "projects"], ["Services", "services"], ["Contact", "contact"]
];

export default function Navbcar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/projects/")) {
      setActiveSection("projects");
      return;
    }

    if (location.pathname !== "/") {
      setActiveSection("home");
      return;
    }

    const sections = links
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;
      const currentSection = sections.reduce((active, section) =>
        section.getBoundingClientRect().top <= activationLine ? section.id : active,
      sections[0].id);

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  const go = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-nav ${compact ? "site-nav--compact" : ""}`}>
      <div className="container nav-inner">
        <button className="brand" onClick={() => go("home")} aria-label="Go to home">
          <span className="brand-mark">{profile.name}</span>
          <span className="brand-text">
            {profile.role} 
            <span className="tagline">{profile.tagline}</span>
          </span>
        </button>

        <nav className={`nav-links ${open ? "nav-links--open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, id]) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                onClick={() => go(id)}
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </button>
            );
          })}
          {/* <a href={profile.resume} download>Resume</a> */}
          <button className="nav-talk" onClick={() => go("contact")}>Let's Talk</button>
        </nav>

        <div className="nav-actions">
          {/* <button
            className="icon-btn"
            onClick={() => dispatch(setTheme(theme === "dark" ? "light" : "dark"))}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}
          <button className="icon-btn nav-menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}
