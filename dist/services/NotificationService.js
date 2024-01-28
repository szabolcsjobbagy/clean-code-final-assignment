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
import { ValidationError } from "../errors/validationError.js";
export class NotificationService {
    constructor(messageClients) {
        this.messageClients = messageClients;
    }
    SendNotifications(message, recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const messageClient of this.messageClients) {
                try {
                    yield messageClient.SendNotification(message, recipient);
                }
                catch (error) {
                    if (error instanceof ValidationError) {
                        throw error;
                    }
                    throw new NetworkError("Message client not accessible.", error);
                }
            }
        });
    }
}
