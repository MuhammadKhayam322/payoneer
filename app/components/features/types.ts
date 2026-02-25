// app/components/features/types.ts

import { ReactNode } from "react";

export interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  tag?: string;
  highlighted?: boolean;
  
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