import React from "react";
import ButtonOutlined from '../../Components/ButtonOutlined/ButtonOutlined';



const DaySelectButton = ({ id, activeDay, setActiveDay, i }) => {

    return (
        <div id={id}>

            <ButtonOutlined width='227px' text={`Day-${i + 1}`} onClick={() => setActiveDay(id)}
                borderColor={activeDay === id ? "#3DBC8D" : ""}/>

        </div>
    )
}

export default DaySelectButton;