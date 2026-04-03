import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We'll contact you at ${form.email}.`);
    setForm({ name: "", email: "", message: "" });
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
          Contact Sales
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-center max-w-xl mb-10 text-lg"
        >
          Have questions or want a demo? Fill out the form below and our sales team will get back to you quickly.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-background border border-border rounded-2xl p-8 shadow-sm"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-border text-foreground placeholder:text-muted-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border border-border text-foreground placeholder:text-muted-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="w-full px-4 py-3 rounded-lg border border-border text-foreground placeholder:text-muted-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32"
          />

          <Button type="submit" className="w-full h-12 gradient-primary text-primary-foreground font-semibold">
            Send Message
          </Button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground mt-6 text-sm text-center max-w-sm"
        >
          We’ll respond within 24 hours. No spam.
        </motion.p>
      </div>
    </Layout>
  );
};

export default Contact;