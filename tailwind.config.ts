
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				saakh: {
					"blue": "#0177fb",
					"blue-light": "#1985fb",
					"blue-dark": "#082b6e",
					"blue-medium": "#20407b",
					"cyan": "#36BFFA",
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-in-left": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-in-top": {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" }
				},
				"slide-in-bottom": {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(0)" }
				},
				"pulse-soft": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				},
				"rotate": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				"rotate-reverse": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(-360deg)" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"marquee": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" }
				},
				"marquee-reverse": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100%)" }
				},
				"shimmer": {
					"0%": { backgroundPosition: "-200%" },
					"100%": { backgroundPosition: "200%" }
				},
				"star-fall": {
					"0%": { transform: "translate(0, 0) rotate(0deg)", opacity: "1" },
					"100%": { transform: "translate(300px, 300px) rotate(45deg)", opacity: "0" }
				},
				"revolve": {
					"0%": { transform: "rotate(0deg) translateX(50px) rotate(0deg)" },
					"100%": { transform: "rotate(360deg) translateX(50px) rotate(-360deg)" }
				},
				"revolve-reverse": {
					"0%": { transform: "rotate(0deg) translateX(70px) rotate(0deg)" },
					"100%": { transform: "rotate(-360deg) translateX(70px) rotate(360deg)" }
				},
				"ripple": {
					"0%": { transform: "scale(1)", opacity: "1" },
					"100%": { transform: "scale(2)", opacity: "0" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"scale-in": "scale-in 0.5s ease-out forwards",
				"slide-in-right": "slide-in-right 0.5s ease-out forwards",
				"slide-in-left": "slide-in-left 0.5s ease-out forwards",
				"slide-in-top": "slide-in-top 0.5s ease-out forwards",
				"slide-in-bottom": "slide-in-bottom 0.5s ease-out forwards",
				"pulse-soft": "pulse-soft 3s infinite ease-in-out",
				"rotate": "rotate 20s linear infinite",
				"rotate-reverse": "rotate-reverse 25s linear infinite",
				"float": "float 3s ease-in-out infinite",
				"marquee": "marquee 30s linear infinite",
				"marquee-reverse": "marquee-reverse 30s linear infinite",
				"shimmer": "shimmer 3s linear infinite",
				"star-fall": "star-fall 3s linear forwards",
				"revolve": "revolve 12s linear infinite",
				"revolve-reverse": "revolve-reverse 18s linear infinite",
				"ripple": "ripple 2s ease-out infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"shimmer-gradient": "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(4,140,254,0.5) 50%, rgba(255,255,255,0) 100%)",
				"blue-gradient": "linear-gradient(90deg, #0177fb 0%, #1985fb 100%)"
			},
			boxShadow: {
				"neon-blue": "0 0 10px rgba(1, 119, 251, 0.5), 0 0 20px rgba(1, 119, 251, 0.3)",
				"neon-cyan": "0 0 10px rgba(54, 191, 250, 0.5), 0 0 20px rgba(54, 191, 250, 0.3)",
				"inner-glow": "inset 0 0 10px rgba(1, 119, 251, 0.5)"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
