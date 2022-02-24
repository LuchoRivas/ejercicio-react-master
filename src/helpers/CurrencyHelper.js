export class CurrencyHelper {
    static numberFormat = (value, digits = 0) => {
        if (!value) return
        return new Intl.NumberFormat('en-AR', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: digits,
            minimumFractionDigits: digits
        }).format(value);
    }
}