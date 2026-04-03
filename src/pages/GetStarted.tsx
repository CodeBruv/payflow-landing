import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Layout from "@/components/Layout";

const GetStarted = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! We'll reach out to ${email}.`);
    setEmail("");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center px-6 pt-32 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 text-center max-w-2xl"
        >
          Get Started with PayFlow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-center max-w-xl mb-10 text-lg"
        >
          Sign up for early access or request a demo. We'll guide you every step of the way.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-background border border-border rounded-2xl p-8 shadow-sm"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border border-border text-foreground placeholder:text-muted-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button type="submit" className="w-full h-12 gradient-primary text-primary-foreground font-semibold">
            Get Access
          </Button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground mt-6 text-sm text-center max-w-sm"
        >
          No credit card required. We'll never spam your inbox.
        </motion.p>
      </div>
    </Layout>
  );
};

export default GetStarted;