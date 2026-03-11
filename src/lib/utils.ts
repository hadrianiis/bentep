import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 *
 * @param inputs - Class values to merge
 * @returns Merged class string
 *
 * @example
 * cn("px-2 py-1", "px-4") // "py-1 px-4"
 * cn("text-red-500", { "text-blue-500": isBlue }) // "text-blue-500" or "text-red-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to create variant-based class names
 * Useful for component variants with consistent styling
 *
 * @param base - Base classes that always apply
 * @param variants - Object with variant names and their classes
 * @param props - Props object containing variant values
 * @returns Merged class string
 *
 * @example
 * const buttonVariants = {
 *   variant: {
 *     primary: "bg-primary text-primary-foreground",
 *     secondary: "bg-secondary text-secondary-foreground"
 *   },
 *   size: {
 *     sm: "h-8 px-3 text-xs",
 *     md: "h-10 px-4 py-2"
 *   }
 * }
 *
 * cva("btn", buttonVariants, { variant: "primary", size: "md" })
 */
export function cva(
  base: string,
  variants: Record<string, Record<string, string>>,
  props: Record<string, string> = {}
) {
  const variantClasses = Object.entries(variants)
    .map(([key, value]) => value[props[key]] || '')
    .filter(Boolean);

  return cn(base, ...variantClasses);
}

/**
 * Utility function to create responsive class names
 * Automatically generates responsive variants for common breakpoints
 *
 * @param classes - Base classes
 * @param responsive - Object with breakpoint-specific classes
 * @returns Responsive class string
 *
 * @example
 * responsive("text-sm", {
 *   sm: "text-base",
 *   md: "text-lg",
 *   lg: "text-xl"
 * })
 * // "text-sm sm:text-base md:text-lg lg:text-xl"
 */
export function responsive(
  base: string,
  responsive: Partial<Record<'sm' | 'md' | 'lg' | 'xl' | '2xl', string>>
) {
  const responsiveClasses = Object.entries(responsive)
    .map(([breakpoint, classes]) => `${breakpoint}:${classes}`)
    .join(' ');

  return cn(base, responsiveClasses);
}

/**
 * Utility function to create conditional classes based on state
 * More readable alternative to ternary operators for complex conditions
 *
 * @param conditions - Object with boolean conditions and their classes
 * @param fallback - Fallback classes when no conditions are met
 * @returns Conditional class string
 *
 * @example
 * conditional({
 *   "text-red-500": hasError,
 *   "text-green-500": isSuccess,
 *   "text-yellow-500": isWarning
 * }, "text-gray-500")
 */
export function conditional(
  conditions: Record<string, boolean>,
  fallback: string = ''
) {
  const activeClasses = Object.entries(conditions)
    .filter(([, condition]) => condition)
    .map(([classes]) => classes);

  return cn(fallback, ...activeClasses);
}

/**
 * Utility function to create animation classes
 * Provides consistent animation timing and easing
 *
 * @param type - Animation type
 * @param duration - Animation duration
 * @param delay - Animation delay
 * @returns Animation class string
 *
 * @example
 * animate("fade-in", "500ms", "100ms")
 * // "animate-fade-in duration-500 delay-100"
 */
export function animate(
  type: string,
  duration: string = '300ms',
  delay: string = '0ms'
) {
  return cn(`animate-${type}`, `duration-[${duration}]`, `delay-[${delay}]`);
}

/**
 * Utility function to create spacing classes
 * Consistent spacing system based on design tokens
 *
 * @param direction - Spacing direction
 * @param amount - Spacing amount
 * @returns Spacing class string
 *
 * @example
 * spacing("p", 4) // "p-4"
 * spacing("mx", "auto") // "mx-auto"
 * spacing("gap", 2) // "gap-2"
 */
export function spacing(
  direction:
    | 'p'
    | 'px'
    | 'py'
    | 'pt'
    | 'pr'
    | 'pb'
    | 'pl'
    | 'm'
    | 'mx'
    | 'my'
    | 'mt'
    | 'mr'
    | 'mb'
    | 'ml'
    | 'gap'
    | 'gap-x'
    | 'gap-y',
  amount: string | number
) {
  return `${direction}-${amount}`;
}

/**
 * Utility function to create color classes
 * Consistent color system with semantic naming
 *
 * @param property - CSS property (bg, text, border, etc.)
 * @param color - Color name
 * @param shade - Color shade (optional)
 * @returns Color class string
 *
 * @example
 * color("bg", "primary") // "bg-primary"
 * color("text", "red", 500) // "text-red-500"
 * color("border", "gray", 200) // "border-gray-200"
 */
export function color(
  property: 'bg' | 'text' | 'border' | 'ring' | 'outline',
  color: string,
  shade?: string | number
) {
  const shadeSuffix = shade ? `-${shade}` : '';
  return `${property}-${color}${shadeSuffix}`;
}
