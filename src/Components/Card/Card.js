import React from 'react';
import './Card.css';
const Card = props => {
    const { img, name, nid, age, nationality, salary } = props.teacher;
    return (
        <div className="card-infos">
            <div className="card-info">
                <div style={{ textAlign: "center" }}>
                    <img src={img} alt="img not found" />
                </div>
                <h4>Name : {name}</h4>
                <h4>NID No : {nid}</h4>
                <h4>Age : {age}</h4>
                <h4>Nationality : {nationality}</h4>
                <h4>Salary : $ {salary}</h4>
                <div className="cart-btn">
                    <button onClick={() => props.addTohandel(props.teacher)}> <i style={{ color: "white" }} className="fas fa-paper-plane"></i> <strong style={{ color: "white" }}> Hair Me</strong></button>
                </div>
                <div className="socail-media">
                    <div className="facebook">
                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;