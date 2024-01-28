import { IPaymentService } from "../abstraction/services/IPaymentService.js"
import { IFinancialApiClient } from "../abstraction/clients/IFinancialApiClient.js"
import { NetworkError } from "../errors/networkError.js"

export class PaymentService implements IPaymentService {
	constructor(private financialApiClient: IFinancialApiClient) {}

	async GetIsOrderPaid(studentId: number, courseId: number): Promise<Boolean> {
		try {
			return await this.financialApiClient.GetIsOrderPaid(studentId, courseId)
		} catch (error) {
			throw new NetworkError("Financial API client not accessible.", error as Error)
		}
	}

	async PayForCourse(studentId: number, courseId: number): Promise<string> {
		try {
			return await this.financialApiClient.ChangePaymentStatus(studentId, courseId, "paid")
		} catch (error) {
			throw new NetworkError("Financial API client not accessible.", error as Error)
		}
	}
}
