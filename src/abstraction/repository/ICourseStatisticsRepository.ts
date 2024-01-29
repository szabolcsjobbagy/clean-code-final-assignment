import { CourseStatistics } from "../../models/CourseStatistics.js"

export interface ICourseStatisticsRepository {
	AddCourseStatistics(courseStatistics: CourseStatistics): Promise<void>
	GetCourseStatisticsById(id: number): Promise<CourseStatistics | undefined>
	GetCourseStatistics(): Promise<CourseStatistics[]>
}
