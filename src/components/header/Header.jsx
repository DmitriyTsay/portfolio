import { Button, Space } from "antd";
import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons"

import './Header.scss';

export const Header = () => {

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView();
    }

    const goTo = (link) => {
        window.open(link, "_blank");
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <Button 
                    className="header__nav__main"
                    onClick={() => {scrollTo('landing')}}
                >
                    <h3>Tsay Dmitriy</h3>
                </Button>

                <Space style={{
                    marginRight: '20px'
                }}>
                    <Button 
                        className="header__nav__additional anchor"
                        onClick={() => {scrollTo('skills')}}
                    >
                        Навыки
                    </Button>

                    <Button 
                        className="header__nav__additional anchor"
                        onClick={() => {scrollTo('portfolio')}}
                    >
                        Проекты
                    </Button>

                    <Button 
                        className="header__nav__additional anchor"
                        onClick={() => {scrollTo('contacts')}}
                    >
                        Контакты
                    </Button>

                    <Button 
                        className="header__nav__additional icon"
                        onClick={() => {goTo('https://github.com/DmitriyTsay')}}
                    >
                        <GithubOutlined />
                    </Button>

                    <Button 
                        className="header__nav__additional icon"
                        onClick={() => {goTo('https://www.linkedin.com/in/dmitriy-tsay-8478a2167/')}}
                    >
                        <LinkedinOutlined />
                    </Button>
                </Space>
            </nav>
        </header>
    )
}