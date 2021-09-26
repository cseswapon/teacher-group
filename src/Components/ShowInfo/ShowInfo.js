import React from 'react';
import Detail from '../Detail/Detail';
import './ShowInfo.css';
const ShowInfo = props => {
    const info = props.info;
    const teacherInfo = info.map(person => person);
    return (
        <div style={{ marginTop: "60px" }}>
            {
                teacherInfo.map(person => <Detail person={person} key={person.nid} />)
            }
        </div>

    );
};

export default ShowInfo;