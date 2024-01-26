var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Course } from "../models/Course.js";
import { CourseStatistics } from "../models/CourseStatistics.js";
export class DbClient {
    AddCourse(course) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Item ${course.GetName()} added to database.`);
        });
    }
    GetCourseById(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Course(1, "TypeScript Basics", 45000, 4, new Date("2024-01-12"));
        });
    }
    GetCourses() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                new Course(1, "TypeScript Basics", 45000, 4, new Date("2024-01-12")),
                new Course(2, "TypeScript Advanced", 65000, 4, new Date("2024-02-10")),
            ];
        });
    }
    GetCourseStatistics(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new CourseStatistics(1, 10, 5, 50, new Date("2024-01-12"));
        });
    }
}
