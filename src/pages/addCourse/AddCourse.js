import React from 'react';
import { useState } from 'react';
import { ReactComponent as BackIcon } from '../../Components/back-icon.svg';
import './addCourse.css';
import { Link } from 'react-router-dom';
import DaySelectButton from '../../Components/DaySelectButton/DaySelectButton';
import DayContent from '../../Components/DayContent/DayContent';
import SaveCourseButton from '../../Components/SaveCourseButton/SaveCourseButton';
import TextFieldBasic from '../../Components/TextFieldBasic/TextFieldBasic';
import TextFieldMultiline from '../../Components/TextFieldMultiline/TextFieldMultiline';
import ButtonOutlined from '../../Components/ButtonOutlined/ButtonOutlined';
import SelectInputLarge from '../../Components/SelectInputLarge/SelectInputLarge';
import { category, language } from '../../Components/SelectInputOptions';


const AddCourse = ({ onAdd }) => {

    const [name, setName] = useState('');
    const [categoryOption, setCategoryOption] = useState('');
    const [description, setDescription] = useState("");

    const [days, setDays] = useState([{
        id: "day-1"
    },
    {
        id: "day-2"
    },
    {
        id: "day-3"
    }]);

    const [content, setContent] = useState([{
        id: "day-1"
    },
    {
        id: "day-2"
    },
    {
        id: "day-3"
    }
    ]);
    
    
    const [activeDay, setActiveDay] = useState("day-1");
    
    function handleAddDay() {
        const values = [...days];
        values.push({
            id: null
        });
        
        setDays(values);
      }

    function handleAddContent() {
        const values = [...content];
        values.push({
            id: null
        });
        setContent(values);
      }

    const onButtonSubmit = () => {
          
            onAdd({ name, description, categoryOption });

     }

   
    return (
        <div className="addCoursePage">
            <h1 className='heading'>Add Course</h1>
            <div className="addCourseContainer">
                <Link to={"/courses"} >
                    <BackIcon style={{ margin: 50 }} />
                </Link>
               
                    <div className='inputsContainer'>
                        <TextFieldBasic
                        label="Course Name"
                        width={264}
                        padding='28px 14px'
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                        <SelectInputLarge options={category} value={categoryOption} onChange={(event) => setCategoryOption(event.target.value)} inputLabel='Category' />
                        <SelectInputLarge options={language} inputLabel='Language' />
                        <TextFieldBasic label="Educator" width={264} padding='28px 14px' />
                    </div>
                    <div className='descriptionField'>
                        <TextFieldMultiline label='Brief Description' width={771} rows={2} value={description} onChange={(event) => setDescription(event.target.value)} />
                    </div>

                    <div className='dayAdd'>
                        <div className='daySelect'>
                            {days.map((day, i) => {
                                return (
                                    <DaySelectButton id={`day-${i+1}`} i={i} activeDay={activeDay} setActiveDay={setActiveDay}/>
                                    
                                )
                            })}
                            
                        </div>

                        <ButtonOutlined
                            width={294}
                            text='+ Add Day'
                            onClick={() => {handleAddDay(); handleAddContent()}}
                        />
                            
                    </div>

                {content.map((content, i) => {
                    return (
                        <DayContent id={`day-${i + 1}`} activeDay={activeDay} />
                    )
                })}

                <div className='saveCourseBtnDiv'>
                        <Link to={"/courses"} style={{textDecoration: 'none'}}>
                            <SaveCourseButton onButtonSubmit={onButtonSubmit} />
                        </Link>
                </div>
                            
        
            </div>
        </div>
    )
}

export default AddCourse;