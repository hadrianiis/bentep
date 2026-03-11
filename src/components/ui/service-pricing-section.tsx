"use client";

import { Check, MoveRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { ServiceStanokItem } from "@/utils/services-stanky";
import { cn } from "@/lib/utils";

export interface ServicePricingSectionProps {
  /** Badge nad nadpisom (napr. "Cenník") */
  badge?: string;
  /** Hlavný nadpis sekcie */
  title: string;
  /** Podnadpis / popis */
  subtitle?: string;
  /** Položky cenníka (názov, popis, priceLabel z servicesStanky) */
  plans: ServiceStanokItem[];
  /** Index zvýraznenej karty (0-based), default stredná */
  highlightedIndex?: number;
  /** Odkaz pre CTA tlačidlo */
  contactHref?: string;
  /** Text CTA tlačidla */
  ctaText?: string;
}

const DEFAULT_CTA = "Kontaktujte nás";
const DEFAULT_BADGE = "Cenník";

export const ServicePricingSection = ({
  badge = DEFAULT_BADGE,
  title,
  subtitle,
  plans,
  highlightedIndex,
  contactHref = "/kontakt",
  ctaText = DEFAULT_CTA,
}: ServicePricingSectionProps) => {
  const highlightIdx =
    highlightedIndex ?? Math.min(1, Math.max(0, plans.length - 1));

  if (plans.length === 0) return null;

  return (
    <section className="w-full py-20 lg:py-40" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="secondary">{badge}</Badge>
          <div className="flex flex-col gap-2">
            <h2
              id="pricing-heading"
              className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
          <div
            className={cn(
              "grid pt-20 text-left w-full gap-8",
              plans.length === 1 && "grid-cols-1 max-w-md mx-auto",
              plans.length === 2 && "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto",
              plans.length >= 3 && "grid-cols-1 lg:grid-cols-3"
            )}
          >
            {plans.map((plan, index) => {
              const isHighlighted = index === highlightIdx;
              return (
                <Card
                  key={plan.name}
                  className={cn(
                    "w-full rounded-md transition-shadow",
                    isHighlighted && "shadow-2xl ring-2 ring-primary/20"
                  )}
                >
                  <CardHeader>
                    <CardTitle>
                      <span className="flex flex-row gap-4 items-center font-normal">
                        {plan.name}
                      </span>
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-8 justify-start">
                      {plan.priceLabel && (
                        <p className="flex flex-row items-center gap-2 text-xl">
                          <span className="text-4xl font-semibold">
                            {plan.priceLabel}
                          </span>
                        </p>
                      )}
                      <div className="flex flex-col gap-4 justify-start">
                        <div className="flex flex-row gap-4">
                          <Check
                            className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                            aria-hidden
                          />
                          <p className="text-muted-foreground text-sm">
                            Individuálna cenová ponuka podľa rozsahu a frekvencie
                            služieb.
                          </p>
                        </div>
                      </div>
                      <Button
                        variant={isHighlighted ? "default" : "outline"}
                        className="gap-2 w-full sm:w-auto"
                        asChild
                      >
                        <Link href={contactHref}>
                          {ctaText}
                          <MoveRight className="w-4 h-4" aria-hidden />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
