import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";

const revenueData = [28, 35, 42, 38, 55, 48, 62, 58, 72, 68, 85, 92];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const transactions = [
  { id: "TXN-4821", customer: "Sarah Chen", amount: "$2,450.00", status: "Completed", time: "2 min ago" },
  { id: "TXN-4820", customer: "Marcus Johnson", amount: "$890.00", status: "Completed", time: "8 min ago" },
  { id: "TXN-4819", customer: "Aisha Patel", amount: "$1,200.00", status: "Pending", time: "15 min ago" },
  { id: "TXN-4818", customer: "David Kim", amount: "$3,100.00", status: "Completed", time: "22 min ago" },
  { id: "TXN-4817", customer: "Emma Wilson", amount: "$675.00", status: "Completed", time: "34 min ago" },
];

const maxVal = Math.max(...revenueData);

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Product</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Your command center for revenue
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            See every dollar flow in and out. Designed for clarity, built for speed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Dashboard shell */}
          <div className="rounded-2xl border border-border bg-background shadow-elevated overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/30" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                  dashboard.payflow.com
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Revenue", value: "$284,392", change: "+12.5%", up: true },
                  { label: "Transactions", value: "12,847", change: "+8.2%", up: true },
                  { label: "Avg. Transaction", value: "$22.14", change: "+3.1%", up: true },
                  { label: "Active Customers", value: "4,219", change: "-1.3%", up: false },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                    <p className="text-xl font-bold text-foreground">{s.value}</p>
                    <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${s.up ? "text-accent" : "text-destructive"}`}>
                      {s.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                      {s.change}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-5 gap-6">
                {/* Revenue chart */}
                <div className="lg:col-span-3 rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Revenue Overview</p>
                      <p className="text-xs text-muted-foreground">Monthly revenue for 2024</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-medium text-accent">
                      <TrendingUp size={14} />
                      +24% YoY
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-40">
                    {revenueData.map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-md gradient-primary opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                          style={{ height: `${(val / maxVal) * 100}%` }}
                        />
                        <span className="text-[10px] text-muted-foreground">{months[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transactions list */}
                <div className="lg:col-span-2 rounded-xl border border-border bg-background p-5">
                  <p className="text-sm font-semibold text-foreground mb-4">Recent Transactions</p>
                  <div className="space-y-3">
                    {transactions.map((t) => (
                      <div key={t.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <div>
                          <p className="text-sm font-medium text-foreground">{t.customer}</p>
                          <p className="text-xs text-muted-foreground">{t.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-foreground">{t.amount}</p>
                          <p className={`text-xs ${t.status === "Completed" ? "text-accent" : "text-muted-foreground"}`}>
                            {t.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
