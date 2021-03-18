import { ICustomerDetails, IApiResult, ICreditCard } from "../../../shared/interfaces";

export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async findCardsForDetails(details: ICustomerDetails): Promise<IApiResult<ICreditCard[]>> {
        try {
            const result = await fetch(`${this.baseUrl}/card`, {
                method: "POST",
                body: JSON.stringify(details),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return result.json() as IApiResult<ICreditCard[]>;
        } catch (ex) {
            return Promise.reject(ex);
        }
    }
}
