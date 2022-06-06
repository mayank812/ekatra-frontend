import React from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useState } from 'react';
import ButtonOutlined from '../../Components/ButtonOutlined/ButtonOutlined';
import './dayContent.css';
import TextFieldBasic from "../../Components/TextFieldBasic/TextFieldBasic";
import TextFieldMultiline from "../../Components/TextFieldMultiline/TextFieldMultiline";



const DayContent = ({id, activeDay}) => {

    const [paragraphs, setParagraphs] = useState([{ value: null }]);
  

    function handleAddParagraph() {
        const values = [...paragraphs];
        values.push({ value: null });
        setParagraphs(values);
      }

    return (
        activeDay === id ? <div id={id} key={id} style={{ paddingBottom: 80 }}>

                        {paragraphs.map((paragraph, i) => {
                            return (
                                <div className='content'>

                                    <div className='paragraph'>
                                        <h3 style={{ fontSize: 30, marginRight: 50 }}>Paragraph - {i + 1}</h3>
                                        <TextFieldMultiline rows={4} width={761} />
                                    </div>
                                    <div className='media'>
                                        <h3 style={{ fontSize: 30, margin: '0px 80px 0px 30px' }}>Media - {i + 1}</h3>

                                        <label htmlFor="contained-button-file">
                                            <input id="contained-button-file" multiple type="file" style={{ display: 'none' }} />
                                            <button className="mediaUpload"><FileUploadIcon fontSize="large" /></button>
                                        </label>

                                        <TextFieldBasic label="Paste Link" width={625} padding='31px 14px' />

                                    </div>
                                </div>
                            )
                        })}
                        
                        <div className="addParagraphButton">
                            <ButtonOutlined width={227} text='+ Add Paragraph' onClick={() => handleAddParagraph()} />
                        </div>
                        
                    </div> : null
    );
}

export default DayContent;