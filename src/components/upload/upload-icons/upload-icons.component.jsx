//libs
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//styles
import styles from './upload-icons.module.css';
//components
import CustomButton from '../../reusables/custom-button/custom-button.component';
import UploadZone from '../upload-zone/upload-zone.component';
import PreviewUploadIcons from '../preview-upload-icons/preview-upload-icons.component';
import ConfigureUploadIcons from '../configure-upload-icons/configure-upload-icons.component';
import RenderView from '../../reusables/render-view/render-view.component';
//actions
import { uploadFilesToCommonIcons, deleteCommonIcon, changeModalView, closeUploadModal } from '../../../redux/upload-icons/upload-icons.actions';
//reselect
import { selectUploadedIcons, selectCurrentModalView } from '../../../redux/upload-icons/upload-icons.selectors';
//helpers
import { normalizeUploadFileIconsStructure } from '../../../utilities/helper.functions';
//constants
import { MODAL_IN_UPLOAD_VIEW, MODAL_IN_CONFIGURE_VIEW } from '../../../utilities/app.constants';

const UploadIcons = ({ uploadedIcons, uploadFilesToCommonIcons, deleteCommonIcon,
    closeUploadModal, currentModalView, changeModalView }) => {

    console.log("Current Modal view", currentModalView);

    const isUserUploadedIcons = !!uploadedIcons.length;
    const nextBtnClass = styles.nextBtn + ' ' + (isUserUploadedIcons ? '' : styles.disabled);

    const handleCommonIconsFileUpload = (uploadedFiles) => {
        const normalizedIconData = normalizeUploadFileIconsStructure(uploadedFiles);
        uploadFilesToCommonIcons(normalizedIconData);
    };

    const handleNextBtnView = () => {
        if (uploadedIcons.length) {
            changeModalView(MODAL_IN_CONFIGURE_VIEW);
        }
    };

    const closeUploadModalView = () => {
        closeUploadModal();
    };

    return (
        <div className={styles.uploadContainer}>
            <RenderView renderIfTrue={currentModalView === MODAL_IN_UPLOAD_VIEW}>
                <UploadZone validFileNameExtension=".svg" acceptType="image/svg+xml" handleFileUpload={handleCommonIconsFileUpload} />
                <div className={styles.horizonLine}></div>
                <h4 className={styles.viewHeaderText}>Added files</h4>
                <PreviewUploadIcons iconList={uploadedIcons} deleteIcon={deleteCommonIcon} />
                <div className={styles.buttonContainer}>
                    <CustomButton className={nextBtnClass} primary onClick={handleNextBtnView}>Next</CustomButton>
                    <CustomButton secondary onClick={closeUploadModalView}>Cancel</CustomButton>
                </div>
            </RenderView>
            <RenderView renderIfTrue={currentModalView === MODAL_IN_CONFIGURE_VIEW}>
                <ConfigureUploadIcons closeUploadModalView={closeUploadModalView} />
            </RenderView>
        </div>
    );
};



const mapStateToProps = createStructuredSelector({
    uploadedIcons: selectUploadedIcons,
    currentModalView: selectCurrentModalView
});

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFilesToCommonIcons: (icons) => { dispatch(uploadFilesToCommonIcons(icons)) },
        deleteCommonIcon: (iconId) => { dispatch(deleteCommonIcon(iconId)) },
        changeModalView: (view) => { dispatch(changeModalView(view)) },
        closeUploadModal: () => dispatch(closeUploadModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadIcons);