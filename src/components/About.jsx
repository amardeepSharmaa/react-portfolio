import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import profile from "../data/profile";

const points = ["Responsive web applications", "Reusable component architecture", "Dashboards & business applications", "Scalable frontend architecture", "REST API integration", "Performance-focused interfaces"];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title="Building interfaces that work." text="A frontend practice focused on scalable architecture, thoughtful interfaces, performance, and real-world product needs." />
        <div className="about-grid">
          <motion.div className="about-visual" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="portrait-placeholder overflow-hidden"><img src={profile.profilePhoto} alt={profile.name} /></div>
            <div className="about-stamp">React<br />Frontend<br />Craft</div>
          </motion.div>
          <motion.div className="about-copy" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="lead-copy">{profile.about}</p>
            <div className="check-grid">
              {points.map((point) => <div key={point}><Check size={16} />{point}</div>)}
            </div>
            <div className="about-actions">
              {/* <a className="btn-primary" href={profile.resume} download>Download Resume <ArrowUpRight size={17} /></a> */}
              <button className="btn-ghost" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Explore Projects</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
