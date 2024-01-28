export interface IPaymentService {
	GetIsOrderPaid(studentId: number, courseId: number): Promise<Boolean>
	PayForCourse(studentId: number, courseId: number): Promise<string>
}
