# clean-code-final-assignment

-   Mindenhol a "...name"-eket "...id"-kra cseréltem, hogy ne a név (ami ismétlődhet) alapján, hanem egyedi azonosító (id) alapján találhassunk meg kurzusokat, diákokat, oktatókat stb.

-   Összesen 116 unit tesztet írtam, és teljesen, 100%-ban lefedtem tesztekkel minden class-t, kivéve a DbClient class-t: ott hogyan tudom mock-olni az adatbázist, tudnál írni egy teszt példát az egyik metódusra?

CourseService class:

-   Mivel túl sok felelőssége volt a class-nak, kitöröltem belőle az "AddCourse", "GetCourseById", "GetCourses", "GetCourseStatistics" metódusokat, amelyeket a CourseRepository class amúgy is elvégez (itt csak azok duplikációja volt)

-   Csak az "AddStudentToCourse" metódust hagytam meg, amit átneveztem a beszédesebb "AddPaidStudentToCourse"-ra

-   Mivel az applikáció nagyra nőhet, egyre komplexebb lehet, nem a "Singleton" design pattern-t követném 1 db top-level "main entry point" class-szal, hanem inkább engednék több top-level class-t, így csökkentem a metódusok duplikációját, kisebb, könnyen kezelhető részeket készítve

CourseStatistics class:

-   A "progress" property-t kivettem a constructor-ból, és a "SetProgress" metódussal így számoltattam ki: (lecturesCompleted / totalLectures) \* 100

-   És a constructor-ba betettem a "studentId" property-t, mert a kurzus statisztikák Student-enként külön számolódnak

Course class:

-   A "students" property mellé hozzáadtam a "lecturers" property-t is, hogy a kurzusoknál láthassuk a hozzájuk rendelt diákokat és oktatókat is

-   Az "AddStudent" metódust átneveztem a beszédesebb "AddStudentToCourse"-ra

CourseRepository class:

-   A "GetCourseStatistics" metódusnál a return type-ot átállítottam "Promise<CourseStatistics>"-ról "Promise<CourseStatistics[]>"-ra, mert minden kurzusnál Student-enként külön statisztika van, tehát egy array (a student-ek kurzus-statisztikáinak listája) lesz a kimenet, nem csak 1db statisztika, és mivel itt is "courseId" alapján kérjük le a statisztikákat, átneveztem "GetCourseStatisticsById"-re

CourseStatisticsRepository, StudentRepository, LecturerRepository class-ok:

-   Külön készítettem class-okat a kurzus statisztikák, diákok és oktatók adatbázishoz hozzáadására ill. lekérdezésére

DbClient class:

-   Itt a beszédesebb "AddCourseToDb", "AddStudentToCourseInDb" stb. metódusneveket használtam

Main.ts:

-   Készítettem egy Main.ts fájlt, hogy egy html page-be bekötve, a DevTools-ban a console-on is ellenőrizni tudjam a loggolt message-eket, ez az 1 fájl 70 alatt van Maintainability Index-ben, de a többi fájl 75 fölötti
