/// <reference types="react" />
/// <reference types="react-dom" />

// No custom type definitions needed - using proper types from installed packages

declare module 'clsx' {
  export type ClassValue = string | number | boolean | undefined | null | { [key: string]: any } | ClassValue[]
  export function clsx(...inputs: ClassValue[]): string
}

declare module 'tailwind-merge' {
  export function twMerge(...inputs: (string | undefined | null | false)[]): string
} 