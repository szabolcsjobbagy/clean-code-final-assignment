import { IPaymentService } from "../abstraction/services/IPaymentService"
import { IFinancialApiClient } from "../abstraction/clients/IFinancialApiClient"

export class PaymentService implements IPaymentService {
	constructor(private financialApiClient: IFinancialApiClient) {}

	async GetIsOrderPaid(studentId: number, courseId: number): Promise<Boolean> {
		const isPaid = await this.financialApiClient.GetPaymentStatus(studentId, courseId)
		return isPaid
	}

	async PayForCourse(studentId: number, courseId: number): Promise<void> {
		await this.financialApiClient.UpdatePaymentStatus(studentId, courseId, "paid")
	}
}
