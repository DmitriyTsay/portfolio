import { Button, Row } from "antd";
import React from "react";

import './Homepage.scss';

import {BsTelegram, BsWhatsapp} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

export const Contacts = () => {

    const goTo = (link) => {
        window.open(link, "_blank");
    }

    return (
        <div id="contacts" className="contacts">
            <h2 className="section-title">Контакты</h2>
            <Row 
            className="contacts__row">
                <div className="contacts-card">
                    <BsTelegram 
                        className="contacts-card__icon telegram"
                    />
                    <h3>Telegram</h3>
                    <p>+7(776)-168-44-11</p>
                    <Button onClick={() => {goTo('https://t.me/tsaydmitriy')}}>
                        Написать сообщение
                    </Button>
                </div>
                <div className="contacts-card">
                    <BsWhatsapp 
                        className="contacts-card__icon whatsapp"
                    />
                    <h3>WhatsApp</h3>
                    <p>+7(776)-168-44-11</p>
                    <Button onClick={() => {goTo('https://api.whatsapp.com/send/?phone=77761684411&text&type=phone_number&app_absent=0')}}>
                        Написать сообщение
                    </Button>
                </div>
                <div className="contacts-card">
                    <AiOutlineMail 
                        className="contacts-card__icon"
                    />
                    <h3>Email</h3>
                    <p>dmtrtsay@gmail.com</p>
                    <Button style={{border: '0px solid', boxShadow: 'unset', cursor: 'auto', background: 'transparent'}} disabled={true}>
                        
                    </Button>
                </div>
            </Row>
        </div>
    )
}