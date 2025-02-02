"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/utils/cn";
import Image from "next/image";

type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  asRadio?: boolean;
};

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ asRadio, className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        `relative peer h-4 w-4 shrink-0 border border-secondary-60 rounded-[4px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 ${
          asRadio
            ? ""
            : "data-[state=checked]:border-primary-100 data-[state=checked]:bg-primary-100 data-[state=checked]:text-primary-100"
        }`,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        {asRadio ? (
          <div className="h-[60%] w-[60%] ml-[20%] rounded-[1px] bg-primary-100" />
        ) : (
          <div className="flex items-center justify-center text-current">
            <Image src="/icons/check.svg" alt="check" width={16} height={16} />
          </div>
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
