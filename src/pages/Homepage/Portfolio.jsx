import { Carousel } from "antd";
import React, { useRef } from "react";
import { ProjectCard } from "../../components/projectCard/projectCard";

// Icons
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';

import './Homepage.scss';

const projectsMap = {
    viewProject: (
        <div>
            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Должность:</h3> <span>Frontend-разработчик</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Компания:</h3> <span>Codetau</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Длительность:</h3> <span>декабрь 2022 - н.в.</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Стэк технологий:</h3> <span>React (class components), SASS, react-chartjs-2, gantt-task-react, react-pdf, Yarn, antDesign</span></div>

            <p className="description-p">Разработка системы управления проектами на React.</p>

            <ul>

                <li className="description-li">Настройка экосистемы проекта. Подбор необходимых библиотек для работы проекта.</li>

                <li className="description-li">Внедрение графических представлений данных - Dashboard, Диаграмма Ганта (разработка логики на клиентской части + дизайн, работа с REST API).</li>

                <li className="description-li">Внедрение дизайна посадочной страницы на основе макета Figma.</li>

                <li className="description-li">Разработка фронтовой части управления проектами, задачами.</li>

                <li className="description-li">Разработка синхронизации с Google календарем.</li>

            </ul>

        </div>
    ),
    continent: (
        <div>
            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Должность:</h3> <span>JavaScript-программист</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Компания:</h3> <span>Fntastic</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Длительность:</h3> <span>август 2022 - декабрь 2022</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Стэк технологий:</h3> 
            <span> HTML, CSS, JavaScript, jQuery, alpineJS+Spruce, npm, tailwindCSS, WebRTC, Janus, Firebase.</span>
            </div>

            <p className="description-p">Разработка desktop-приложения на базе Electron-библиотеки.</p>

            <ul>

                <li className="description-li">Работа с legacy кодом.</li>

                <li className="description-li">Реализация дизайна на основе прототипа Figma (от верстки до сложных анимаций)</li>

                <li className="description-li">Работа с Firebase / Firebase-functions.</li>

                <li className="description-li">Разработка с использованием WebRTC (передача видео-, аудио-, текстовых данных с помощью Janus-сервера).</li>

                <li className="description-li">Разработка и внедрение функционала различных модулей приложения: презентационной доски, показа экрана, окна настроек, окна администратора и т.д.</li>

            </ul>

        </div>
    ),
    discord: (
        <div>
            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Тип проекта:</h3> <span>PET-проект</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Дата:</h3> <span>август 2022</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Стэк технологий:</h3> 
            <span> Electron, React, react-router-dom</span>
            </div>

            <p className="description-p">Разработка discord-like приложения (Тестовое задание - срок 2 дня)</p>
        </div>
    ),
    tetris: (
        <div>
            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Тип проекта:</h3> <span>PET-проект</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Дата:</h3> <span>июль 2022</span></div>

            <div className="description-h3"><h3 style={{display: 'inline-block'}}>Стэк технологий:</h3> 
            <span> HTML, CSS, JavaScript, Canvas API</span>
            </div>

            <p className="description-p">Разработка учебного проекта (QWANT) - Тетрис. Написано на чистом JavaScript, с использованием классов и canvas.</p>
        </div>
    )
}

export const Portfolio = ({togglePicturesModal, setNewImageSource}) => {

    const carouselRef = useRef();

    return (
        <div id="portfolio" className="portfolio">
            <h2>Проекты</h2>
            <div style={{position: 'relative'}}>
                <Carousel 
                ref={carouselRef}
                dotPosition="top"
                dots={true}
                className='portfolio__carousel'
                >
                    <ProjectCard 
                        imagesSources={[
                            './viewproject/1.png',
                            './viewproject/2.png',
                            './viewproject/3.png',
                        ]}
                        title='Система управления проектами.'
                        description={projectsMap.viewProject}
                        setNewImageSource={setNewImageSource}
                        togglePicturesModal={togglePicturesModal}
                    />
                    <ProjectCard 
                        imagesSources={[
                            './continent/1.png',
                            './continent/2.png',
                            './continent/3.png',
                        ]}
                        title='Виртуальный офис.'
                        description={projectsMap.continent}
                        setNewImageSource={setNewImageSource}
                        togglePicturesModal={togglePicturesModal}
                    />
                    <ProjectCard 
                        imagesSources={[
                            './discord/1.png',
                            './discord/2.png',
                        ]}
                        title='Тестовое задание (Electron).'
                        description={projectsMap.discord}
                        setNewImageSource={setNewImageSource}
                        togglePicturesModal={togglePicturesModal}
                        isPetProject={true}
                        githubLink={'https://github.com/DmitriyTsay/discord-clone'}
                        demoLink={'https://discord-clone-psi-ten.vercel.app/'}
                    />
                    <ProjectCard 
                        imagesSources={[
                            './tetris/1.png',
                            './tetris/2.png',
                        ]}
                        title='Учебный проект (Тетрис).'
                        description={projectsMap.tetris}
                        setNewImageSource={setNewImageSource}
                        togglePicturesModal={togglePicturesModal}
                        isPetProject={true}
                        githubLink={'https://github.com/DmitriyTsay/TetrisJS'}
                        demoLink={'https://tetris-js-tau.vercel.app/'}
                    />
                </Carousel>
                <LeftCircleOutlined 
                    className="portfolio__arrow"
                    style={{
                        left: '-43px',
                    }}
                    onClick={() => {carouselRef.current.prev()}}
                />
                <RightCircleOutlined
                    className="portfolio__arrow"
                    style={{
                        right: '-43px'
                    }}
                    onClick={() => {carouselRef.current.next()}}
                />
            </div>
        </div>
    )
}