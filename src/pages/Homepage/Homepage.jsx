import { Button } from "antd";
import React from "react";

import './Homepage.scss';

export const Homepage = () => {
    return (
        <div className="homepage">
            <div className="homepage__title-wrapper">
                <h1>Tsay Dmitriy</h1>
                <h1>Frontend Developer</h1>
            </div>
            <Button>
                Observe my works
            </Button>
        </div>
    )
}