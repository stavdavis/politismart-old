import React from 'react';
import './senator_card.css';

export default function SenatorCard(props) {
    return (
        <div className="card-container">
            <div className="senator-pic-box"><img className="senator-pic" src={props.lawmaker[1]} alt="Senator portrait"/></div>
            <div className="senator-name">{props.lawmaker[0]}</div>
            <div className="party-state">{props.lawmaker[2]}</div>
            <div className="score-guns-title">Gun Control:</div><div className="score-guns-value">{props.lawmaker[3]}</div>
            <div className="score-pro-life-title">Pro Life:</div><div className="score-pro-life-value">{props.lawmaker[4]}</div>
            <div className="score-lgbt-title">LGBTQ Rights:</div><div className="score-lgbt-value">{props.lawmaker[5]}</div>
            <div className="score-clean-energy-title">Clean Energy:</div><div className="score-clean-energy-value">{props.lawmaker[6]}</div>
            <div className="score-small-gov-title">Small Gov.:</div><div className="score-small-gov-value">{props.lawmaker[7]}</div>
            <div className="score-donation-impact-title"><b>Re-election risk:</b></div><div className="score-donation-impact-value"><b>{props.lawmaker[8]}</b></div>
        </div>
    );
}
