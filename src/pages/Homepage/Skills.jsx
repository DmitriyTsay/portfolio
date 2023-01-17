import { Row, Tooltip } from "antd";
import React from "react";

import './Homepage.scss';

export const Skills = ({showSkillsModal, toggleSkillsModal}) => {
    return (
        <div id="skills" className="skills">
            <h2>Мои навыки</h2>
            <p style={{
                color: 'gray'
            }}>Кликни, чтобы раскрыть информацию</p>
            <Row style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div className="skills__image-wrapper">
                    <Tooltip
                        color={'black'}
                        overlayInnerStyle={{
                            color: 'white'
                        }}
                        title={'HTML'}
                    >
                        <img onClick={() => {toggleSkillsModal('html')}} alt="HTML-LOGO" src="/html.png"/>
                    </Tooltip>
                </div>

                <div className="skills__image-wrapper">
                    <Tooltip
                        color={'black'}
                        overlayInnerStyle={{
                            color: 'white'
                        }}
                        title={'CSS'}
                    >
                        <img onClick={() => {toggleSkillsModal('css')}} alt="CSS-LOGO" src="/css.png"/>
                    </Tooltip>
                </div>

                <div className="skills__image-wrapper">
                    <Tooltip
                        color={'black'}
                        overlayInnerStyle={{
                            color: 'white'
                        }}
                        title={'JavaScript'}
                    >
                        <img onClick={() => {toggleSkillsModal('javascript')}} alt="Javascript-LOGO" src="/javascript.png"/>
                    </Tooltip>
                </div>
            </Row>
            <Row style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px'
            }}>
                <div className="skills__image-wrapper" >
                    <Tooltip
                        color={'black'}
                        overlayInnerStyle={{
                            color: 'white'
                        }}
                        title={'React'}
                    >
                    <img style={{width: '100%', height: 'unset'}} onClick={() => {toggleSkillsModal('react')}} alt="REACT-LOGO" src="/react.png"/>
                    </Tooltip>
                </div>

                <div className="skills__image-wrapper" >
                    <Tooltip
                        color={'black'}
                        overlayInnerStyle={{
                            color: 'white'
                        }}
                        title={'Прочие навыки'}
                    >
                        <h1 className="others" onClick={() => {toggleSkillsModal('others')}}>Others</h1>
                    </Tooltip>
                </div>
            </Row>
        </div>
    )
}