import { motion } from "framer-motion";
import { CreditCard, BarChart3, ArrowLeftRight, Wallet } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Accept cards, wallets, and bank transfers with a single integration. Support for 135+ currencies globally.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time revenue metrics, conversion rates, and customer insights — all in one beautiful dashboard.",
  },
  {
    icon: ArrowLeftRight,
    title: "Transaction Tracking",
    description: "Monitor every transaction with detailed logs, smart filters, and instant search across your payment history.",
  },
  {
    icon: Wallet,
    title: "Payout Management",
    description: "Automated payouts to any bank account worldwide. Set schedules, split payments, and manage balances effortlessly.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Everything you need to get paid
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A complete toolkit for modern businesses to accept, manage, and optimize every payment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border bg-background hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <f.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
