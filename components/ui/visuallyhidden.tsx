import * as React from "react";
import { VisuallyHidden as RadixVisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

interface VisuallyHiddenProps
  extends React.ComponentPropsWithoutRef<typeof RadixVisuallyHidden> {
  children: React.ReactNode;
}

export function VisuallyHidden({ children, className, ...props }: VisuallyHiddenProps) {
  return (
    <RadixVisuallyHidden className={cn(className)} {...props}>
      {children}
    </RadixVisuallyHidden>
  );
}