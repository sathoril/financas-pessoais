// models/CabecalhoResumoDiarioResponse.ts
export default class CabecalhoResumoDiarioResponse {
    availableValue: number;
    totalSpent: number;

    constructor(availableValue: number, totalSpent: number) {
        this.availableValue = availableValue;
        this.totalSpent = totalSpent;
    }

    // Método estático para mapear os dados da API para instâncias da classe
    static fromApiResponse(data: any): CabecalhoResumoDiarioResponse {
        return new CabecalhoResumoDiarioResponse(data.availableValue, data.totalSpent);
    }
}
