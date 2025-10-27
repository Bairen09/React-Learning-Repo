export function formatMoney(amountCents){
    return `${(amountCents/10).toFixed(2)}`
}