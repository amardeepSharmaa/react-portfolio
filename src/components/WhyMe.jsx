import { motion } from "framer-motion";
import { Blocks, Code2, Gauge, GitBranch, Globe2, Layers3, PlugZap, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Database, MonitorSmartphone, TestTube2, Boxes, Network } from "lucide-react";
const items = [
  ["React & TypeScript", "Production-ready applications built with ReactJS, TypeScript, and modern JavaScript." ,  Code2],
  ["Micro Frontend Architecture", "Modular frontend applications designed for independent development, deployment, and scaling." ,  Boxes],
  ["UI Architecture", "Scalable component architecture, reusable patterns, and frontend structures built for enterprise applications." ,  Network],
  ["Performance Optimization", "Lazy loading, code splitting, efficient rendering, bundle optimization, and performance-focused development." ,  Gauge],
  ["State Management", "Effective state management using Redux, Redux Toolkit, Context API, and appropriate component-level state." ,  Database],
  ["API Integration", "REST API integration with proper loading, error, empty, success, and data-handling states." ,  PlugZap],
  ["Responsive & Cross-Browser", "Consistent, accessible interfaces across mobile, tablet, desktop, and modern browsers." ,  MonitorSmartphone],
  ["Testing & Code Quality", "Reliable frontend development using Jest, React Testing Library, reusable components, and maintainable code." ,  TestTube2]
]


export default function WhyMe() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="08 / Why Work With Me" title="The difference is in the implementation." />
        <div className="why-grid">
          {items.map(([title, text, Icon], i) => (
            <motion.article className="why-card" key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <Icon size={20} />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
