var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ValidationError } from "../errors/validationError.js";
export class PushNotificationClient {
    SendNotification(message, recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValidPhoneNumber(recipient.GetPhoneNumber())) {
                throw new ValidationError("Invalid phone number.");
            }
            // Send push notification
            console.log(`Push notification sent to ${recipient.GetPhoneNumber()} with message: ${message}`);
        });
    }
    isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^(\+36|06)(20|30|31|70|90)(\d{7})$/;
        return phoneRegex.test(phoneNumber);
    }
}
