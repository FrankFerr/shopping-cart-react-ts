export interface InformationProps{
    messages: string[],
    color: InfoColor
}

export type InfoColor = "bg-red-700 text-red-950" | "bg-green-700 text-green-950"

export const RED: InfoColor = "bg-red-700 text-red-950"
export const GREEN: InfoColor = "bg-green-700 text-green-950"
