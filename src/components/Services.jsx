import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Gauge, LayoutDashboard, PlugZap, RefreshCcw, Smartphone, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import services from "../data/services";

const icons = [Braces, Smartphone, LayoutDashboard, PlugZap, RefreshCcw, LayoutDashboard, Gauge, Wrench];

export default function Services() {
  return (
    <section id="services" className="section-pad section-tint">
      <div className="container">
        <SectionHeading eyebrow="07 / What I Build" title="Frontend work with a product mindset." text="From greenfield interfaces to existing applications that need structure, speed or new features." />
        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.article className="service-card" key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <div className="service-top"><span className="service-index">0{i + 1}</span><Icon size={21} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-arrow"><ArrowUpRight size={17} /></span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
