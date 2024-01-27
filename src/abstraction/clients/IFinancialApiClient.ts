export type PaymentItem = {
	id: number
	studentId: number
	courseId: number
	status: string
}

export interface IFinancialApiClient {
	GetIsOrderPaid(studentId: number, courseId: number): Promise<boolean>
	ChangePaymentStatus(studentId: number, courseId: number, status: string): Promise<void>
	GetPaymentItems(): Promise<PaymentItem[]>
}
