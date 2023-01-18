
import React, { useState } from "react";
import { PicturesModal } from "../../components/picturesModal/picturesModal";
import { SkillsModal } from "../../components/skillsModal/SkillsModal";
import { Contacts } from "./Contacts";

import './Homepage.scss';
import { Landing } from "./Landing";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";

export const Homepage = () => {
    const [ showSkillsModal, setShowSkillsModal ] = useState(false);
    const [ toolForModal, setToolForModal ] = useState(null);

    const [ showPicturesModal, setShowPicturesModal ] = useState(false);
    const [ imageSourceForModal, setImageSourceForModal ] = useState(null);

    const toggleSkillsModal = (tool) => {
        if (!tool) {
            setShowSkillsModal(false);
            return;
        } 

        setToolForModal(tool);
        setShowSkillsModal(true);
    }

    const togglePicturesModal = () => {
        setShowPicturesModal(!showPicturesModal);
    }

    const setNewImageSource = (source) => {
        setImageSourceForModal(source);
    }

    return (
        <div className="homepage">
            <Landing />
            <Skills showSkillsModal={showSkillsModal} toggleSkillsModal={toggleSkillsModal}/>
            <SkillsModal 
                toolForModal={toolForModal} 
                showSkillsModal={showSkillsModal} 
                toggleSkillsModal={toggleSkillsModal}
            />
            <PicturesModal 
                imageSource={imageSourceForModal}
                showPicturesModal={showPicturesModal}
                togglePicturesModal={togglePicturesModal}
            />
            <Portfolio 
                togglePicturesModal={togglePicturesModal}
                setNewImageSource={setNewImageSource}
            />
            <Contacts />
        </div>
    )
}