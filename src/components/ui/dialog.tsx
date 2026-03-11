"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

interface DialogTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogCloseProps {
  children: React.ReactNode;
  className?: string;
}

const DialogContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>({
  open: false,
  onOpenChange: () => {},
});

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <DialogContext.Provider value={{ open: open || false, onOpenChange: onOpenChange || (() => {}) }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children, className }: DialogTriggerProps) {
  const { onOpenChange } = React.useContext(DialogContext);
  
  return (
    <button
      onClick={() => onOpenChange(true)}
      className={className}
    >
      {children}
    </button>
  );
}

export function DialogContent({ children, className, showCloseButton = true }: DialogContentProps) {
  const { open, onOpenChange } = React.useContext(DialogContext);
  
  if (!open) return null;
  
  return (
    <div className={cn("fixed inset-0 z-50", className)}>
      {showCloseButton && (
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-10"
        >
          ×
        </button>
      )}
      {children}
    </div>
  );
}

export function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <h2 className={cn("sr-only", className)}>
      {children}
    </h2>
  );
}

export function DialogClose({ children, className }: DialogCloseProps) {
  const { onOpenChange } = React.useContext(DialogContext);
  
  return (
    <button
      onClick={() => onOpenChange(false)}
      className={className}
    >
      {children}
    </button>
  );
}
