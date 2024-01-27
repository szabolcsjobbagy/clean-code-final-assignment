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
import { Student } from "../models/Student.js";
import { Lecturer } from "../models/Lecturer.js";
export class DbClient {
    AddCourseToDb(course) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Course ${course.GetId()} - ${course.GetName()} added to database.`);
        });
    }
    AddStudentToCourseInDb(student, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Student ${student.GetId()} - ${student.GetName()} added to course ${courseId} in database.`);
        });
    }
    AddLecturerToCourseInDb(lecturer, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Lecturer ${lecturer.GetId()} - ${lecturer.GetName()} added to course ${courseId} in database.`);
        });
    }
    AddStudentToDb(student) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Student ${student.GetId()} - ${student.GetName()} added to database.`);
        });
    }
    AddLecturerToDb(lecturer) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Lecturer ${lecturer.GetId()} - ${lecturer.GetName()} added to database.`);
        });
    }
    AddCourseStatisticsToDb(courseStatistics) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Course Statistics ${courseStatistics.GetId()} added to database.`);
        });
    }
    GetCourseByIdFromDb(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id == 1)
                return new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"));
            return new Course(2, "TypeScript ADVANCED", 65000, 4, new Date("2024-02-10"));
        });
    }
    GetStudentByIdFromDb(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id == 1)
                return new Student(1, "Trainee Smith", new Date("1999-05-04"), "male", "trainee.smith@gmail.com", "+36301234567");
            return new Student(2, "Trainee Newton", new Date("2001-08-09"), "female", "trainee.newton@gmail.com", "+36709373495");
        });
    }
    GetLecturerByIdFromDb(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id == 1)
                return new Lecturer(1, "Trainer Taylor", new Date("1986-01-01"), "female", "trainer.taylor@gmail.com", "+36203539854");
            return new Lecturer(2, "Trainer Brown", new Date("1986-01-01"), "male", "trainer.brown@gmail.com", "+36208265385");
        });
    }
    GetCoursesFromDb() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12")),
                new Course(2, "TypeScript ADVANCED", 65000, 4, new Date("2024-02-10")),
            ];
        });
    }
    GetStudentsFromDb() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                new Student(1, "Trainee Smith", new Date("1999-05-04"), "male", "trainee.smith@gmail.com", "+36301234567"),
                new Student(2, "Trainee Newton", new Date("2001-08-09"), "female", "trainee.newton@gmail.com", "+36709373495"),
            ];
        });
    }
    GetLecturersFromDb() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                new Lecturer(1, "Trainer Taylor", new Date("1986-01-01"), "female", "trainer.taylor@gmail.com", "+36203539854"),
                new Lecturer(2, "Trainer Brown", new Date("1986-01-01"), "male", "trainer.brown@gmail.com", "+36208265385"),
            ];
        });
    }
    GetCourseStatisticsFromDb(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (courseId == 1)
                return [new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"))];
            return [new CourseStatistics(2, 2, 2, 0, 0, new Date("2024-02-10"))];
        });
    }
}
