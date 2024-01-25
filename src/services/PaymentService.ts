import { IPaymentService } from "../abstraction/services/IPaymentService"
import { FinancialApiClient } from "../clients/FinancialApiClient"

export class PaymentService implements IPaymentService {
	async GetIsOrderPaid(studentId: number, courseId: number): Promise<Boolean> {
		const financialApiClient = new FinancialApiClient()
		const isPaid = await financialApiClient.GetPaymentStatus(studentId, courseId)
		return isPaid
	}

	async PayForCourse(studentId: number, courseId: number): Promise<void> {
		const financialApiClient = new FinancialApiClient()
		await financialApiClient.UpdatePaymentStatus(studentId, courseId, "paid")
	}
}
