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
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    GetIsOrderPaid(studentId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/orders/${studentId}/${courseId}`);
            const data = yield response.json();
            return data.status === "paid" ? true : false;
        });
    }
    ChangePaymentStatus(studentId, courseId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/orders/${studentId}/${courseId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status: status,
                }),
            });
        });
    }
}
