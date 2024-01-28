import { IFinancialApiClient, PaymentItem } from "../abstraction/clients/IFinancialApiClient"

export class FinancialApiClient implements IFinancialApiClient {
	private paymentItems: PaymentItem[] = []

	async GetIsOrderPaid(studentId: number, courseId: number): Promise<boolean> {
		const paymentItem = await this.FindPaymentItem(studentId, courseId)

		if (!paymentItem) return false
		if (paymentItem.status === "not paid") return false
		return true
	}

	async ChangePaymentStatus(
		studentId: number,
		courseId: number,
		status: string
	): Promise<string> {
		const paymentItem = await this.FindPaymentItem(studentId, courseId)

		if (paymentItem) {
			await this.UpdatePaymentItem(paymentItem, status)
		} else {
			await this.AddPaymentItem(studentId, courseId, status)
		}

		return `Payment status of student ${studentId} for course ${courseId} changed to 'paid'.`
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
	}

	private async UpdatePaymentItem(paymentItem: PaymentItem, status: string): Promise<void> {
		paymentItem.status = status
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
