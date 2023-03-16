import { ReactNode } from "react";

export interface IGrid {
    children: ReactNode
    gap?: number
    gridTemplateColumns?: string
} 