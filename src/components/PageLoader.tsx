import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HardHat } from "lucide-react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center clip-corner"
            >
              <HardHat className="w-9 h-9" strokeWidth={2.5} />
            </motion.div>
            <div className="font-display text-2xl tracking-[0.3em] text-foreground">IRONFORGE</div>
            <div className="w-40 h-0.5 bg-border overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
