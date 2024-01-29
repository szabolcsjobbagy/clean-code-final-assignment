var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CourseService {
    constructor(courseRepository, paymentService, notificationService) {
        this.courseRepository = courseRepository;
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }
    AddPaidStudentToCourse(student, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = yield this.courseRepository.GetCourseById(courseId);
            if (!course) {
                throw new Error(`Course ${courseId} not found.`);
            }
            const isCoursePaidByStudent = yield this.paymentService.GetIsOrderPaid(student.GetId(), courseId);
            if (!isCoursePaidByStudent) {
                throw new Error(`Course ${course.GetId()} is not yet paid by student ${student.GetId()}.`);
            }
            yield this.courseRepository.AddStudentToCourse(student, course.GetId());
            const message = `Student ${student.GetId()} added to course ${course.GetId()}.`;
            yield this.notificationService.SendNotifications(message, student);
        });
    }
}
