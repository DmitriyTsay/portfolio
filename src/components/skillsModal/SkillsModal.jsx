import { Divider, Modal } from "antd";
import React, { useEffect, useState } from "react";

import '../../pages/Homepage/Homepage.scss';

const returnDesiredDescription = (tool) => {
    if (tool === 'html') {
        return (
            <div className="skills-modal">
                <p>Обладаю твердыми знаниями и обширным опытом в работе с HTML.</p>

                <p>Умею, люблю и практикую семантическую верстку, обладаю пониманием для чего она нужна и в каких местах её необходимо применять.</p>

                <p>Умею использовать HTML в JSX-элементах (React).</p>

                <p>Также занимался версткой шаблонов электронных писем для серверов на php, могу писать читабельные инлайновые стили для данной цели.</p>

                <p>Стараюсь придерживаться <a target="_blank" rel="noopener noreferrer" href="https://github.com/hail2u/html-best-practices/blob/main/README.ru.md">"лучших практик"</a> в работе с HTML.</p>
            </div>
        )
    } else if (tool === 'css') {
        return (
            <div className="skills-modal">
                <p>Из базового - умею работать как с Flexbox, так и с Grid. Понимаю, в каких ситуациях какой из макетов лучше использовать.</p>

                <p>Умею создавать простые анимации при помощи transition и сложные анимации на основе @keyframes.</p>

                <p>Умею использовать псевдоклассы и псевдоэлементы.</p>

                <p>Разрабатывал респонсивные и адаптивные дизайны. Знаю отличие между этими двумя понятиями, понимаю как их применять по отдельности и в комбинации.</p>

                <p>Работал с различными CSS-библиотеками: TailwindCSS, Bootstrap. <span style={{color: 'gray', fontStyle: 'italic'}}>(Не особо люблю работать только с их использованием, т.к. считаю, что это делает HTML код нечитабельным, предпочитаю использовать из библиотек только реально нужные и упрощающие работу классы)</span></p>
            
                <p>Также умею и работаю с метаязыком SASS (ранее через библиотеку node-sass, в текущий момент через просто sass).</p>
            </div>
        )
    } else if (tool === 'javascript') {
        return (
            <div className="skills-modal">
                <p>Работал как на ванильном JS, так и с использованием различных библиотек и фреймворков.</p>

                <p>Уровень владения ванильным JS: <span style={{fontWeight: '600', color: 'black'}}>Продвинутый</span>.</p>

                <p>Работал с манипуляцией DOM-деревом, разработкой фронтовых компонентов и их рендером, без использования фреймворков.</p>

                <p>Работал с базами данных (запросами), WebRTC-технологиями (передачей аудио-/видео- сообщений). Понимаю где и зачем нужна асинхронность.</p>

                <p>Разрабатывал сложные анимации с использованием requestAnimationFrame().</p>

                <p>Немного работал с веб-воркерами.</p>

                <Divider />

                <h3>jQuery</h3>

                <p>Опыт аналогичный ванильному JS.</p>

                <p>Также работал с анимациями на jQuery - animate().</p>

                <Divider />

                <p>Помимо ванильного JS и jQuery, также работал с alpineJS + Spruce (store для alpine), обучался Vue (однако затем решил переключиться на углубленное изучение React), а также React (более подробно - кликните на навык React).</p>
            </div>
        )
    } else if (tool === 'react') {
        return (
            <div className="skills-modal">
                <p>Занимался React-разработкой как на классовых компонентах, так и на функциональных компонентах.</p>

                <p>Понимаю как работает React и насколько ускоряет frontend-разработку.</p> 
                
                <p>Обладаю фундаментальными знаниями по state, props, жизненному циклу компонентов, контролируемым инпутам и пр.</p>

                <p>Также разрабатывал React приложение с подключением дополнительных библиотек:</p>

                <ul>
                    <li>
                        antDesign, Bootstrap, react-icons (Дизайн);
                    </li>
                    <li>
                        react-router-dom (Routing);
                    </li>
                    <li>
                        react-chartjs-2, gantt-task-react (Диаграммы);
                    </li>
                    <li>
                        react-pdf (Работа с файлами);
                    </li>
                    <li>
                        и других.
                    </li>
                </ul>

                <Divider />

                <h3>Redux</h3>

                <p>Не имею опыта коммерческой разработки с Redux - только на уровне обучения и pet-проектов.</p>

                <p>Понимаю какие данные необходимо хранить в Redux store, и для чего он вообще нужен.</p>
            </div>
        )
    } else if (tool === 'others') {
        return (
            <div className="skills-modal">

                <Divider />

                <h3>Хард скиллы</h3>

                <p>Занимался разработкой десктопного приложения на Electron с использованием HTML, CSS, JS.</p>

                <p>Занимался внедрением дизайна на основе Figma-макетов.</p>

                <p>Умею осуществлять pixel-perfect при помощи Figma/Photoshop.</p>

                <p>Помимо фронтенд-разработки, также немного занимался бэкенд-разработкой на nodeJS с использованием Firebase.</p>

                <p>Занимался версткой шаблонов электронных писем для php-laravel.</p>

                <Divider />

                <h3>Софт скиллы</h3>

                <p>Способен работать как в команде, так и в одиночку.</p>

                <p>Могу дать оценку необходимого времени на объем разработки с допустимыми погрешностями.</p>

                <p>Понимаю необходимость своевременного коммуницирования с начальством/коллегами по рабочим вопросам <span style={{fontStyle: 'italic', color: 'black'}}>(в случае дедлайнов, неожиданных трудностей)</span>.</p>

                <p>Обладаю эмоциональным интеллектом, коммуникативными навыками.</p>

                <p>Питаю страсть к разработке и обучению в профессиональной сфере.</p>

            </div>
        )
    }
}

export const SkillsModal = ({toolForModal, showSkillsModal, toggleSkillsModal}) => {
    const [ title, setTitle ] = useState(null);

    useEffect(() => {
        if (toolForModal === 'html') {
            setTitle('HTML')
        }

        if (toolForModal === 'css') {
            setTitle('CSS')
        }

        if (toolForModal === 'javascript') {
            setTitle('JavaScript')
        }

        if (toolForModal === 'react') {
            setTitle('React')
        }

        if (toolForModal === 'others') {
            setTitle('Прочие навыки')
        }
    }, [toolForModal])


    return (
        <Modal
        open={showSkillsModal}
        maskClosable={true}
        title={title}
        footer={null}
        bodyStyle={{
            color: 'black',
            height: 'auto'
        }}
        onCancel={() => {toggleSkillsModal()}}
        >
            {returnDesiredDescription(toolForModal)}
        </Modal>
    )
}