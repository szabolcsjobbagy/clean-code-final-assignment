var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CourseRepository {
    constructor(dbClient) {
        this.dbClient = dbClient;
    }
    AddCourse(course) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dbClient.AddCourse(course);
        });
    }
    GetCourseById(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbClient.GetCourseById(courseId);
        });
    }
    GetCourses() {
        throw new Error("Method not implemented.");
    }
    GetCourseStatistics(courseId) {
        throw new Error("Method not implemented.");
    }
}
