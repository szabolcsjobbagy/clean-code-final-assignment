var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class FinancialApiClient {
    GetPaymentStatus(studentId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.checkPaymentStatus(studentId, courseId);
        });
    }
    UpdatePaymentStatus(studentId, courseId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Payment status for student ${studentId} and course ${courseId} updated to ${status}`);
        });
    }
    checkPaymentStatus(studentId, courseId) {
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
        ];
        const paymentStatus = paymentStatuses.find((item) => item.studentId === studentId && item.courseId === courseId);
        return (paymentStatus === null || paymentStatus === void 0 ? void 0 : paymentStatus.status) === "paid" ? true : false;
    }
}
