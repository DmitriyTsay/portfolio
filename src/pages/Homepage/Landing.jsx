import { Button } from "antd";
import React from "react";

import './Homepage.scss';

export const Landing = () => {

    const goTo = (link) => {
        window.open(link, "_blank");
    }

    return (
        <div id="landing" className="landing">
            <div className="landing__image-wrapper">
                
            </div>
            <div className="landing__title-wrapper">
                <h2>Приветствую.</h2>
                <h2>Меня зовут Дмитрий.</h2>
                <h2>Я - Frontend-разработчик.</h2>
                <Button className="landing__title-wrapper__button"
                onClick={() => {goTo('https://drive.google.com/file/d/1rm1JSI8ozLBi0ugPoN5fto8M7fPIAHlN/view?usp=share_link')}}
                >
                    Скачать резюме
                </Button>
            </div>
        </div>
    )
}