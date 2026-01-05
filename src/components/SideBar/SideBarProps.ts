import type { SideBarFilter } from "./SideBarFilter";

export interface SideBarProps{
    onChangeFilter: (filter: SideBarFilter) => void
}