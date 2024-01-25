import { IFinancialApiClient } from "../abstraction/clients/IFinancialApiClient"

export class FinancialApiClient implements IFinancialApiClient {
	async GetPaymentStatus(studentId: number, courseId: number): Promise<boolean> {
		return this.checkPaymentStatus(studentId, courseId)
	}

	async UpdatePaymentStatus(studentId: number, courseId: number, status: string): Promise<void> {
		console.log(
			`Payment status for student ${studentId} and course ${courseId} updated to ${status}`
		)
	}

	private checkPaymentStatus(studentId: number, courseId: number): boolean {
		const paymentStatuses = [
			{
				id: 1,
				studentId: 1,
				courseId: 1,
				status: "paid",
			},
			{
				id: 2,
				studentId: 1,
				courseId: 2,
				status: "not paid",
			},
			{
				id: 3,
				studentId: 2,
				courseId: 1,
				status: "paid",
			},
		]
		const paymentStatus = paymentStatuses.find(
			(item) => item.studentId === studentId && item.courseId === courseId
		)

		return paymentStatus?.status === "paid" ? true : false
	}
}
