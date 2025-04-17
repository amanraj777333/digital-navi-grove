
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
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				space: ['Space Grotesk', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// New theme colors
				navy: '#0C1327',
				mint: '#0fffc3',
				whitegray: '#F9FAFB',
				cta: '#4ade80',
				purple: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
					950: '#2e1065',
				},
				gold: {
					50: '#fefdf7',
					100: '#fdfbea',
					200: '#fbf6d1',
					300: '#f7eba9',
					400: '#f2d86b',
					500: '#ecc546',
					600: '#d4af37',
					700: '#a88429',
					800: '#896724',
					900: '#71541f',
					950: '#422f0e',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gradient': {
					'0%, 100%': { 
						'background-position': '0% 50%' 
					},
					'50%': { 
						'background-position': '100% 50%' 
					},
				},
				'typewriter': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink-caret': {
					'from, to': { borderColor: 'transparent' },
					'50%': { borderColor: '#0fffc3' }
				},
				'float-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'matrix-fall': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(100vh)', opacity: '0.5' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px #0fffc3, 0 0 10px #0fffc3' },
					'50%': { boxShadow: '0 0 20px #0fffc3, 0 0 30px #0fffc3' }
				},
				'blob-move': {
					'0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
					'25%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'75%': { transform: 'translate(20px, 50px) scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient': 'gradient 8s ease infinite',
				'typewriter': 'typewriter 3s steps(30) forwards',
				'blink-caret': 'blink-caret 0.75s infinite',
				'float-up': 'float-up 0.5s ease-out forwards',
				'matrix-fall': 'matrix-fall 10s linear infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'blob-move': 'blob-move 20s ease-in-out infinite',
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
