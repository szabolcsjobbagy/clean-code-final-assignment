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
import { NotFoundError } from "../errors/notFoundError.js";
export class CourseStatisticsRepository {
    constructor(dbClient) {
        this.dbClient = dbClient;
    }
    AddCourseStatistics(courseStatistics) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.dbClient.AddCourseStatisticsToDb(courseStatistics);
                console.log(`Course Statistics ${courseStatistics.GetId()} added to database.`);
            }
            catch (error) {
                throw new NetworkError("Database client not accessible.", error);
            }
        });
    }
    GetCourseStatisticsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dbClient.GetCourseStatisticsByIdFromDb(id);
            }
            catch (error) {
                if (error instanceof NotFoundError) {
                    throw new NotFoundError(`Course Statistics ${id} not found in database.`);
                }
                throw new NetworkError("Database client not accessible.", error);
            }
        });
    }
    GetCourseStatistics() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dbClient.GetCourseStatisticsFromDb();
            }
            catch (error) {
                throw new NetworkError("Database client not accessible.", error);
            }
        });
    }
}
