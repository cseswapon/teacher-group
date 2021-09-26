import React from 'react';

const Detail = props => {
    const { name, img } = props.person;
    return (
        <div className="teacher-info">
            <img src={img} alt="" />
            <h3 style={{ marginLeft: "10px" }}>{name}</h3>
        </div>
    );
};

export default Detail;