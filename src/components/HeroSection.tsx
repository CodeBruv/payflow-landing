import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 gradient-hero overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-[1.08] max-w-4xl mx-auto"
        >
          Payments infrastructure
          <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
            built for growth
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Accept payments, track revenue, and manage every transaction from a single, 
          beautifully designed platform. Fast setup, enterprise-grade reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground border-0 shadow-glow px-8 h-12 text-base"
            onClick={() => navigate("/get-started")}
          >
            Start Accepting Payments
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base border-border text-foreground"
            onClick={() => navigate("/docs")}
          >
            View Documentation
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 flex items-center justify-center gap-8 md:gap-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-accent" />
            <span>PCI DSS Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-accent" />
            <span>99.99% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-accent" />
            <span>135+ Currencies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;