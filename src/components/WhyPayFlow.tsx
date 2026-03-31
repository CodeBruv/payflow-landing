import { motion } from "framer-motion";
import { Zap, ShieldCheck, Code2 } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-100ms payment processing. Your customers complete checkout before they can blink.",
    stat: "< 100ms",
    statLabel: "avg. latency",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description: "End-to-end encryption, tokenized card data, and automatic fraud detection built in.",
    stat: "99.99%",
    statLabel: "uptime SLA",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Clean APIs, comprehensive SDKs, and copy-paste integration examples. Ship in minutes.",
    stat: "5 min",
    statLabel: "to first payment",
  },
];

const WhyPayFlow = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Why PayFlow</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Built different, by design
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center p-8 rounded-2xl border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5">
                <r.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{r.description}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-2xl font-bold text-primary">{r.stat}</p>
                <p className="text-xs text-muted-foreground">{r.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPayFlow;
