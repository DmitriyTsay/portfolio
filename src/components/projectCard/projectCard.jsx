import { Button } from "antd";
import React from "react";

import './projectCard.scss';

export const ProjectCard = ({imagesSources, title, description, setNewImageSource, togglePicturesModal, isPetProject, githubLink, demoLink}) => {
    const openPictureModal = (source) => {
        setNewImageSource(source);
        togglePicturesModal();
    }

    const goTo = (link) => {
        window.open(link, "_blank")
    } 

    return (
        <div className='project'>
            <div className='project__image-holder'>
                {imagesSources?.map((source) => {
                    return (
                        <img src={source} 
                        alt='Project' 
                        key={`${source}`}
                        className='project__image'
                        onClick={() => {openPictureModal(source)}}
                        />
                    )
                })}
            </div>
            <h2 className='project__h2'>
                {title ? title : ''}
            </h2>
            <div className='project__description'>
                {description ? description : ''}
            </div>
            {isPetProject ? (
                <div className="project__buttons-holder">
                    <Button onClick={() => goTo(githubLink)}>
                        GitHub
                    </Button>
                    <Button onClick={() => goTo(demoLink)}>
                        Demo
                    </Button>
                </div>
            ) : null}
        </div>
    )
}