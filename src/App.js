import Layout from './pages/layout/Layout';
import Analytics from './pages/analytics/Analytics';
//import Courses from './pages/courses/Courses';
import AddCourse from './pages/addCourse/AddCourse';
import NoPage from './pages/noPage/NoPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CourseCardList from './pages/courses/CourseCardList';
import "./App.css";
import './pages/courses/courses.css';
import { useState } from 'react';


function App() {

  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
      const id = Math.floor(Math.random() * 10000) + 1;
      const newCourse = { id, ...course };
      setCourses([...courses, newCourse]);
      }

  return (
    <Router>
        <div className="App">
      
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Analytics />}/>
        <Route path='courses' element={
          <div className="coursesPage">
          <h1 className='heading'>Courses</h1>
          <div className='courseCardsContainer'>
              <Link  to={"/courses/addcourse"} className='addNewCard'>
                  
                  <div className='addItems'>
                    <AddCircleOutlineIcon fontSize='large' className='addIcon' />
                    <h2 className='addButton'>Add New</h2>
                  </div>
                  
              </Link>
              <CourseCardList courses={courses} />
          </div>
          </div>
        } />
        <Route path='courses/addcourse' element={<AddCourse onAdd={addCourse} />}/>
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      
      </div>
    </Router>
    
   
  );
}

export default App;
