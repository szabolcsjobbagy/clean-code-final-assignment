import { CourseStatistics } from "../../models/CourseStatistics"

export interface ICourseStatisticsRepository {
	AddCourseStatistics(courseStatistics: CourseStatistics): Promise<void>
	GetCourseStatisticsById(courseStatisticsId: number): Promise<CourseStatistics[]>
}
