import { Button } from "@/components/ui/button";

interface ButtonVariants {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'hero' | 'diplomatic';
}

// Button variants for MUN Diplomacy Hub
export const buttonVariants = {
  hero: "bg-primary hover:bg-primary-muted text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
  diplomatic: "glass-card text-foreground hover:bg-card-hover border-glass-border font-medium px-6 py-3 rounded-lg smooth-hover"
};

export { Button };
export type { ButtonVariants };