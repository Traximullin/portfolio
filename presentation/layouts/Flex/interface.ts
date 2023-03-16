import { Property } from "csstype"


export interface IFlex {
    children: React.ReactNode
    gap?: number,
    flexDirection?: Property.FlexDirection
    justifyContent?: Property.JustifyContent
    alignItems?: Property.AlignItems
    flexWrap?: Property.FlexWrap
} 