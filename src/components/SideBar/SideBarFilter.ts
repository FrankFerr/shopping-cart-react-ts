export interface SideBarFilter{
    category: string
    priceRangeMax: number
    priceRangeMin: number
}

export type PartialSideBarFilter = Partial<SideBarFilter>