import { IPaymentService } from "../abstraction/services/IPaymentService"
import { IFinancialApiClient } from "../abstraction/clients/IFinancialApiClient"

export class PaymentService implements IPaymentService {
	constructor(private financialApiClient: IFinancialApiClient) {}

	async GetIsOrderPaid(studentId: number, courseId: number): Promise<Boolean> {
		return await this.financialApiClient.GetIsOrderPaid(studentId, courseId)
	}

	async PayForCourse(studentId: number, courseId: number): Promise<void> {
		await this.financialApiClient.ChangePaymentStatus(studentId, courseId, "paid")
	}
}
