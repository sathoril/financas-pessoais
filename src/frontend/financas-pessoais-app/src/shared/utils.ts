export function formatMoney(input: number | undefined) {
    if (input) {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        return formatter.format(input/100);
    }
    return 0;
}

export function formatHour(input: string) {
    const date = new Date(input);
    return date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    })
}