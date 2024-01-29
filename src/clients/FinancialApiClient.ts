import { IFinancialApiClient } from "../abstraction/clients/IFinancialApiClient"

export class FinancialApiClient implements IFinancialApiClient {
	private readonly baseUrl: string

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl
	}

	async GetIsOrderPaid(studentId: number, courseId: number): Promise<boolean> {
		const response = await fetch(`${this.baseUrl}/orders/${studentId}/${courseId}`)
		const data = await response.json()
		return data.status === "paid" ? true : false
	}

	async ChangePaymentStatus(studentId: number, courseId: number, status: string): Promise<void> {
		const response = await fetch(`${this.baseUrl}/orders/${studentId}/${courseId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				status: status,
			}),
		})
	}
}
