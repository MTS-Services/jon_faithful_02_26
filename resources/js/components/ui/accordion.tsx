import * as React from "react";

import { cn } from "@/lib/utils";

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: "single" | "multiple";
  collapsible?: boolean;
};

export function Accordion({ className, ...props }: AccordionProps) {
  return (
    <div
      data-slot="accordion"
      className={cn("space-y-2", className)}
      {...props}
    />
  );
}

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <div
      data-slot="accordion-item"
      className={cn("border rounded-lg overflow-hidden", className)}
      {...props}
    />
  );
}

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <button
      type="button"
      data-slot="accordion-trigger"
      className={cn(
        "flex w-full items-center justify-between bg-slate-50 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-slate-100",
        className
      )}
      onClick={(event) => {
        setOpen((prev) => !prev);
        props.onClick?.(event);
      }}
    >
      <span>{children}</span>
      <span
        className={cn(
          "ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] transition-transform",
          open ? "rotate-90" : ""
        )}
      >
        ▸
      </span>
    </button>
  );
}

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <div
      data-slot="accordion-content"
      className={cn(
        "border-t bg-white px-4 py-3 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

