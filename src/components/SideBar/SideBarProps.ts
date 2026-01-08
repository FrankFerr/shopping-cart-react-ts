import type { PartialSideBarFilter } from "./SideBarFilter";

export interface SideBarProps{
    onChangeFilter: (filter: PartialSideBarFilter) => void
}