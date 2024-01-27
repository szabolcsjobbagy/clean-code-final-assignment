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
    constructor() {
        this.paymentItems = [];
    }
    GetIsOrderPaid(studentId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentItem = yield this.FindPaymentItem(studentId, courseId);
            if (!paymentItem)
                return false;
            if (paymentItem.status === "not paid")
                return false;
            return true;
        });
    }
    ChangePaymentStatus(studentId, courseId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentItem = yield this.FindPaymentItem(studentId, courseId);
            if (paymentItem) {
                yield this.UpdatePaymentItem(paymentItem, status);
            }
            else {
                yield this.AddPaymentItem(studentId, courseId, status);
            }
        });
    }
    GetPaymentItems() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.paymentItems;
        });
    }
    AddPaymentItem(studentId, courseId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            this.paymentItems.push({
                id: this.paymentItems.length + 1,
                studentId,
                courseId,
                status,
            });
            console.log(`Payment status ADDED for student ${studentId} and course ${courseId} with status: ${status}`);
        });
    }
    UpdatePaymentItem(paymentItem, status) {
        return __awaiter(this, void 0, void 0, function* () {
            paymentItem.status = status;
            console.log(`Payment status UPDATED for student ${paymentItem.studentId} and course ${paymentItem.courseId} with status: ${status}`);
        });
    }
    FindPaymentItem(studentId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentItem = this.paymentItems.find((item) => item.studentId === studentId && item.courseId === courseId);
            if (paymentItem)
                return paymentItem;
            return undefined;
        });
    }
}
