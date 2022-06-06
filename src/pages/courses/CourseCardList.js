import CourseCard from './CourseCard';

const CourseCardList = ({courses}) => {

    return (
        <>
        {courses.map((course) => (
            <CourseCard key={course.id} course={course}/>
        ))}
        </>
    )
}

export default CourseCardList;