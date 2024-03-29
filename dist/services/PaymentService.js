var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NetworkError } from "../errors/networkError.js";
export class PaymentService {
    constructor(financialApiClient) {
        this.financialApiClient = financialApiClient;
    }
    GetIsOrderPaid(studentId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.financialApiClient.GetIsOrderPaid(studentId, courseId);
            }
            catch (error) {
                throw new NetworkError("Financial API client not accessible.", error);
            }
        });
    }
    PayForCourse(studentId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.financialApiClient.ChangePaymentStatus(studentId, courseId, "paid");
                console.log(`Payment status of student ${studentId} for course ${courseId} changed to 'paid'.`);
            }
            catch (error) {
                throw new NetworkError("Financial API client not accessible.", error);
            }
        });
    }
}
