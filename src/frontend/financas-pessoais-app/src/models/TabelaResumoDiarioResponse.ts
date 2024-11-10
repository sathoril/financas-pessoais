// models/TabelaResumoDiarioResponse.ts
export default class TabelaResumoDiarioResponse {
    id: string;
    hour: string;
    valueSpent: number;

    constructor(id: string, hour: string, valueSpent: number) {
        this.id = id;
        this.hour = hour;
        this.valueSpent = valueSpent;
    }

    // Método estático para mapear os dados da API para instâncias da classe
    static fromApiResponse(data: any): TabelaResumoDiarioResponse[] {
        return data.map((item: any) => new TabelaResumoDiarioResponse(item.id, item.hour, item.valueSpent));
    }
}
