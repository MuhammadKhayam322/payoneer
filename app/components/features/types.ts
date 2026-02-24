// app/components/features/types.ts

import { ReactNode } from "react";

export interface FeatureCardProps {
  title: string;
  description: string;
  tag?: string;
  highlighted?: boolean;
  visual: ReactNode;
}

export interface LearnMoreLinkProps {
  href?: string;
}

export interface CurrencyRowProps {
  flag: string;
  code: string;
  amount: string;
}

export interface BarProps {
  height: number;
  active?: boolean;
}