export interface IFinancialApiClient {
	GetPaymentStatus(studentId: number, courseId: number): Promise<boolean>
	UpdatePaymentStatus(studentId: number, courseId: number, status: string): Promise<void>
}
