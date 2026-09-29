import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiGit,
  SiCss,
  SiPostman,
  SiVite,
} from "react-icons/si";
import profile from "../data/profile";
import CodeCard from "./codeCard";

const orbit = [
  ["React", "react", SiReact],
  ["JS", "js", SiJavascript],
  ["TS", "ts", SiTypescript],
  ["Redux", "redux", SiRedux],
  ["Git", "git", SiGit],
  ["CSS", "css", SiCss],
  ["API", "api", SiPostman],
  ["Vite", "vite", SiVite],
];


export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero section-pad">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="status-pill"><span className="status-dot" /> {profile.availability}</div>
          <div className="hero-kicker"><Sparkles size={15} /> React.js Frontend Developer</div>
          <h1 className="text-[72px] md:text-[90px] font-bold leading-[0.92] tracking-[-0.04em]">
            <span className="block text-white">
              Building
            </span>
            <span
              className="block font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent"
            >
              modern web
            </span>
            <span className="block text-white">
              experiences
            </span>

          </h1>
          <p className="hero-lede">{profile.introduction}</p>
          <div className="hero-meta">
            <span><MapPin size={16} /> {profile.location}</span>
            <span className="meta-separator">/</span>
            <span>React · TypeScript · Redux</span>
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => go("projects")}>View My Projects <ArrowUpRight size={17} /></button>
            <button className="btn-ghost" onClick={() => go("contact")}>Let's work together <ArrowUpRight size={17} /></button>
          </div>
          {/* <button className="text-link" onClick={() => go("contact")}>Let's work together <span>↗</span></button> */}
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <CodeCard />  
          {orbit.map(([label, key, Icon], i) => (
            <motion.div
              className={`orbit-chip orbit-chip--${i + 1}`}
              key={key}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            >
              <Icon
                size={16}
                className={`tech-icon tech-icon--${key}`}
              />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
