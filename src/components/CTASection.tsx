import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl gradient-cta p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight mb-4">
              Start your payment journey today
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Join thousands of businesses that trust PayFlow to process their payments. 
              No setup fees, no monthly minimums.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 h-12 px-8 text-base font-semibold shadow-sm transition-all"
                onClick={() => navigate("/get-started")}
              >
                Get Started Free
                <ArrowRight size={18} className="ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 h-12 px-8 text-base transition-all bg-primary-foreground/10"
                onClick={() => navigate("/contact")}
              >
                Talk to Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;