import React from 'react';
import ShowInfo from '../ShowInfo/ShowInfo';

const Cost = props => {
    const cost = props.cost;
    let salary = 0;
    for (const totalSalary of cost) {
        salary = salary + totalSalary.salary;
    }
    return (
        <div>
            <h3><i style={{ color: "orange" }} className="fas fa-donate"></i> Total Cost : $ {salary}</h3>
            {
                <ShowInfo info={cost} />
            }
        </div>
    );
};

export default Cost;