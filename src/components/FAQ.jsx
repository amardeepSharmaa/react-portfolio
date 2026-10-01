import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import faq from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-pad section-tint">
      <div className="container faq-grid">
        <SectionHeading eyebrow="09 / FAQ" title="Questions, answered." text="Short answers to common questions about the frontend work and process." />
        <div className="accordion-list">
          {faq.map((item, i) => (
            <div className={`faq-item ${open === i ? "is-open" : ""}`} key={item.question}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span><b>{String(i + 1).padStart(2, "0")}</b>{item.question}</span><ChevronDown size={18} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{item.answer}</p></motion.div>}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
