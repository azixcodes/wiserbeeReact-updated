import React from 'react';
import {meachineicon,discussionicon,quizicon,taskicons} from "../../Constant/svgs";

const EntrollCourseTiles = (props) => {

    const taskDetails = [
        {
            id: '1',
            icon: 'meachineicon',
            title: 'Machine Learning',
            timeline: '08.00 am- 10.00 pm',
            color: 'meachineClr'
        },
        {
            id: '2',
            icon: 'discussionicon',
            title: 'Discussion - Scratch',
            timeline: '08.00 am- 10.00 pm',
            color: 'discussionClr'
        },
        {
            id: '3',
            icon: 'quizicon',
            title: 'Quiz Test 01',
            timeline: '08.00 am- 10.00 pm',
            color: 'quizClr'
        },
        {
            id: '4',
            icon: 'taskicons',
            title: 'Task - Design Thinking',
            timeline: '08.00 am- 10.00 pm',
            color: 'taskClr'
        },
    ]

    const iconComponents = {
        meachineicon,
        discussionicon,
        quizicon,
        taskicons
    };

    return (
        <>
            {taskDetails.map((item, index) => (
                <div className="d-flex justify-content-start align-item-center">
                    <div className={`taskImg d-flex justify-content-center align-items-center ${item.color}`}>{iconComponents[item.icon]}</div>
                    <div className="taskDetails">
                        <h6>{item.title}</h6>
                        <p>{item.timeline}</p>
                    </div>
                </div>
            ))}

        </>

    );
}

export default EntrollCourseTiles