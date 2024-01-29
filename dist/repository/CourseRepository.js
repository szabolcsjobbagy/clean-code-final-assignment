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
export class CourseRepository {
    constructor(dbClient) {
        this.dbClient = dbClient;
    }
    AddCourse(course) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.dbClient.AddCourseToDb(course);
                console.log(`Course ${course.GetId()} added to database.`);
            }
            catch (error) {
                throw new NetworkError("Database client not accessible.", error);
            }
        });
    }
    AddStudentToCourse(student, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.dbClient.AddStudentToCourseInDb(student, courseId);
                console.log(`Student ${student.GetId()} added to course ${courseId} in database.`);
            }
            catch (error) {
                throw new NetworkError("Database client not accessible.", error);
            }
        });
    }
    AddLecturerToCourse(lecturer, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.dbClient.AddLecturerToCourseInDb(lecturer, courseId);
                console.log(`Lecturer ${lecturer.GetId()} added to course ${courseId} in database.`);
            }
            catch (error) {
                throw new NetworkError("Database client not accessible.", error);
            }
        });
    }
    GetCourseById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dbClient.GetCourseByIdFromDb(id);
            }
            catch (error) {
                if (error instanceof NotFoundError) {
                    throw new NotFoundError(`Course ${id} not found in database.`);
                }
                throw new NetworkError("Database client not accessible.", error);
            }
        });
    }
    GetCourses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dbClient.GetCoursesFromDb();
            }
            catch (error) {
                throw new NetworkError("Database client not accessible.", error);
            }
        });
    }
    GetCourseStatisticsByCourseId(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dbClient.GetCourseStatisticsByCourseIdFromDb(courseId);
            }
            catch (error) {
                throw new NetworkError("Database client not accessible.", error);
            }
        });
    }
}
