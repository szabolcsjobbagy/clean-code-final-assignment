import { IFinancialApiClient, PaymentItem } from "../abstraction/clients/IFinancialApiClient"

export class FinancialApiClient implements IFinancialApiClient {
	private paymentItems: PaymentItem[] = []

	async GetIsOrderPaid(studentId: number, courseId: number): Promise<boolean> {
		const paymentItem = await this.FindPaymentItem(studentId, courseId)

		if (!paymentItem) return false
		if (paymentItem.status === "not paid") return false
		return true
	}

	async ChangePaymentStatus(studentId: number, courseId: number, status: string): Promise<void> {
		const paymentItem = await this.FindPaymentItem(studentId, courseId)

		if (paymentItem) {
			await this.UpdatePaymentItem(paymentItem, status)
		} else {
			await this.AddPaymentItem(studentId, courseId, status)
		}
	}

	async GetPaymentItems(): Promise<PaymentItem[]> {
		return this.paymentItems
	}

	private async AddPaymentItem(
		studentId: number,
		courseId: number,
		status: string
	): Promise<void> {
		this.paymentItems.push({
			id: this.paymentItems.length + 1,
			studentId,
			courseId,
			status,
		})
		console.log(
			`Payment status ADDED for student ${studentId} and course ${courseId} with status: ${status}`
		)
	}

	private async UpdatePaymentItem(paymentItem: PaymentItem, status: string): Promise<void> {
		paymentItem.status = status

		console.log(
			`Payment status UPDATED for student ${paymentItem.studentId} and course ${paymentItem.courseId} with status: ${status}`
		)
	}

	private async FindPaymentItem(
		studentId: number,
		courseId: number
	): Promise<PaymentItem | undefined> {
		const paymentItem = this.paymentItems.find(
			(item) => item.studentId === studentId && item.courseId === courseId
		)

		if (paymentItem) return paymentItem

		return undefined
	}
}
