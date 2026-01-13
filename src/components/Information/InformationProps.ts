export interface InformationProps{
    messages: string[],
    color: InfoColor
}

export const colors = {
    red: "bg-red-700 text-red-950",
    green: "bg-green-700 text-green-950"
}

type InfoColor = typeof colors.red | typeof colors.green
