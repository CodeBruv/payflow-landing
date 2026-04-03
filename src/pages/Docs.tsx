import { motion } from "framer-motion";
import { ArrowRight, Code, BookOpen, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const docsSections = [
  {
    icon: Code,
    title: "API Reference",
    description: "All endpoints, parameters, and responses you need to integrate quickly.",
    link: "/docs/",
  },
  {
    icon: BookOpen,
    title: "Guides & Tutorials",
    description: "Step-by-step instructions to implement payment flows like a pro.",
    link: "/docs/",
  },
  {
    icon: Layers,
    title: "SDKs & Libraries",
    description: "Official SDKs for JavaScript, Python, Ruby, and more. Copy, paste, ship.",
    link: "/docs/",
  },
];

const Docs = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="pt-32 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-foreground mb-4"
        >
          Developer Documentation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl"
        >
          Learn how to integrate PayFlow in minutes. API reference, guides, SDKs, and more.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 py-20 md:py-32 grid md:grid-cols-3 gap-8">
        {docsSections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-2xl border border-border hover:shadow-elevated transition cursor-pointer"
            onClick={() => navigate(s.link)}
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
            <Button
              variant="link"
              size="sm"
              className="text-primary font-semibold"
              onClick={(e) => {
                e.stopPropagation();
                navigate(s.link);
              }}
            >
              Explore <ArrowRight size={16} className="ml-1 inline-block" />
            </Button>
          </motion.div>
        ))}
      </section>

      <section className="py-20 md:py-32 text-center bg-primary/5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Need guidance or support?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg"
        >
          Reach out to our developer support team for questions or integration help.
        </motion.p>
        <Button
          size="lg"
          onClick={() => navigate("/get-started")}
          className="gradient-primary text-primary-foreground px-8 h-12 text-base font-semibold"
        >
          Get Started
        </Button>
      </section>
    </Layout>
  );
};

export default Docs;