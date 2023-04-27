import { Link } from "react-router-dom";
import courseImage from './unsplash_FCHlYvR5gJI.png';
import './courseCard.css';

const CourseCard = ({course}) => {
    
   /* const getCourseImage = (courseCategory = course.categoryOption) => {
        return {
            Programming: 'unsplash_FCHlYvR5gJI.png' ,
            Management: 'unsplash_Oalh2MojUuk.png',
            History: 'unsplash_7Z-Uayu13ps',
            Wildlife: 'unsplash_VfdOzbZkW1w',
            Language: 'unsplash_BVyNlchWqzs'
        } [courseCategory]
    } */

  
    return (
        <div className="courseCardContainer">
            <div className="courseItemsDiv">
                <div>
                    <img src={courseImage} alt="course_image" className="courseCardImage" />
                </div>

                <div className="courseContentDiv">
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                </div>
            </div>
            <div className="courseCardLinks">
                <Link to={"/editcourse"} className="courseCardLink">Edit Course</Link>
                <Link to={"/students"} className="courseCardLink">Students</Link>
                <Link to={"/"} className="courseCardLink">Analytics</Link>
            </div>
        </div>
    )
}

export default CourseCard;