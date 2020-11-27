//libs
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//css
import styles from './project-icons-page.module.css';
//components
import IconsPageHeader from '../../components/icons-page-header/icons-page-header.component';
//reselect
import { selectCurrentUserAccessRole } from '../../redux/user/user.selectors';
//constants
import { PROJECT_ICONS_HEADER_LABEL } from '../../utilities/app.constants';


const ProjectIconsPage = ({ currentUserAccessRole }) => {
    return (
        <div className={styles.viewContainer}>
            <IconsPageHeader label={PROJECT_ICONS_HEADER_LABEL} showUploadButton={currentUserAccessRole} />
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    currentUserAccessRole: selectCurrentUserAccessRole
});

export default connect(mapStateToProps)(ProjectIconsPage);