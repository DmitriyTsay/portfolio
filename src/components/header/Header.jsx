import { Button, Space } from "antd";
import React from "react";

import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <Button className="header__nav__main">
                    Tsay Dmitriy
                </Button>
                <Space>
                    <Button className="header__nav__additional">
                        Skills
                    </Button>
                    <Button className="header__nav__additional">
                        Works
                    </Button>
                    <Button className="header__nav__additional">
                        Contact
                    </Button>
                    <Button className="header__nav__additional">
                        Github
                    </Button>
                    <Button className="header__nav__additional">
                        LinkedIn
                    </Button>
                </Space>
            </nav>
        </header>
    )
}