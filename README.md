# clean-code-final-assignment

-   Mindenhol a "...name"-eket "...id"-kra cseréltem, hogy ne a név (ami ismétlődhet) alapján, hanem egyedi azonosító (id) alapján találhassunk meg kurzusokat, diákokat, oktatókat stb.

CourseService class:

-   Mivel túl sok felelőssége volt a class-nak, kitöröltem belőle az "AddCourse", "GetCourseById", "GetCourses", "GetCourseStatistics" metódusokat, amelyeket a CourseRepository class amúgy is elvégez (itt csak azok duplikációja volt)

-   Csak az "AddStudentToCourse" metódust hagytam meg, amit átneveztem a beszédesebb "AddPaidStudentToCourse"-ra

CourseStatistics class:

-   A "progress" property-t kivettem a constructor-ból, és a "SetProgress" metódussal így számoltattam ki: (lecturesCompleted / totalLectures) \* 100

-   És a constructor-ba betettem a "studentId" property-t, mert a kurzus statisztikák Student-enként külön számolódnak

Course class:

-   A "students" property mellé hozzáadtam a "lecturers" property-t is, hogy a kurzusoknál láthassuk a hozzájuk rendelt diákokat és oktatókat is

-   Az "AddStudent" metódust átneveztem a beszédesebb "AddStudentToCourse"-ra

CourseRepository class:

-   A "GetCourseStatistics" metódusnál a return type-ot átállítottam "Promise<CourseStatistics>"-ról "Promise<CourseStatistics[]>"-ra, mert minden kurzusnál Student-enként külön statisztika van, tehát egy array (a studentek statisztikáinak listája) lesz a kimenet, nem csak 1db statisztika, és mivel itt is "courseId" alapján kérjük le a statisztikákat, átneveztem "GetCourseStatisticsById"-re

CourseStatisticsRepository class:

-   Külön készítettem ezt a class-t a kurzus statisztikák adatbázishoz hozzáadására ill. lekérdezésére

DbClient class:

-   Itt a beszédesebb "AddCourseToDb", "AddStudentToCourseInDb" stb. metódusneveket használtam
