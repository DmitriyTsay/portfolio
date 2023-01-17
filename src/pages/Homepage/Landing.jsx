import { Button } from "antd";
import React from "react";

import './Homepage.scss';

export const Landing = () => {
    return (
        <div id="landing" className="landing">
            <div className="landing__image-wrapper">
                
            </div>
            <div className="landing__title-wrapper">
                <h2>Приветствую.</h2>
                <h2>Меня зовут Дмитрий.</h2>
                <h2>Я - Frontend-разработчик.</h2>
                <Button className="landing__title-wrapper__button"
                onClick={() => {document.getElementById('portfolio').scrollIntoView()}}
                >
                    Перейти к работам
                </Button>
            </div>
        </div>
    )
}