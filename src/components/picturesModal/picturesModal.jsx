
import { Modal } from "antd";
import React from "react";

import '../../pages/Homepage/Homepage.scss';

export const PicturesModal = ({imageSource, showPicturesModal, togglePicturesModal}) => {

    console.log(imageSource)

    return (
        <Modal
        open={showPicturesModal}
        maskClosable={true}
        footer={null}
        centered={true}
        width={'80%'}
        bodyStyle={{
            color: 'black',
            height: 'auto'
        }}
        onCancel={() => {togglePicturesModal()}}
        >
            <img src={imageSource} alt='Modal' style={{width: '100%'}}/>
        </Modal>
    )
}