export class Formatter{
    static formatPrice(price: number): string{
        return `${price.toFixed(2).replace('.', ',')}`
    }
}