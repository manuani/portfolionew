import * as React from "react"

import { cn } from "../../lib/utils"

const buttonVariants = {
  default: "bg-blue-600 text-white shadow hover:bg-blue-700",
  destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
  outline: "border border-gray-300 shadow-sm hover:bg-gray-50",
  secondary: "bg-gray-600 text-white shadow-sm hover:bg-gray-700",
  ghost: "hover:bg-gray-100",
  link: "text-blue-600 underline-offset-4 hover:underline",
}

const sizeVariants = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9",
}

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        sizeVariants[size],
        className
      )}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button }