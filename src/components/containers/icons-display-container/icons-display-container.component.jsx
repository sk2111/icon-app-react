//libs
import React from 'react';
//css
import styles from './icons-display-container.module.css';
//components
import RenderView from '../../reusables/render-view/render-view.component';
import IconCard from '../../reusables/icon-card/icon-card.component';
import LazyLoadingCardContainer from '../lazy-loading-card-container/lazy-loading-card-container.component';
import LazyLoadingCardWithEvent from '../../reusables/lazy-loading-card/lazy-loading-card-with-event';
//constans
import { ICON_PROP } from '../../../utilities/app.constants';

const { ICON_ID, ICON_NAME, ICON_BASE_64 } = ICON_PROP;

const IconDisplayContainer = ({ iconList, isMoreIconsAvaliableToFetch, fetchMoreIcons }) => {
    return (
        <div className={styles.container}>
            {
                iconList.map((icon) => {
                    return (
                        <IconCard key={icon[ICON_ID]} iconName={icon[ICON_NAME]} iconBase64={icon[ICON_BASE_64]} />
                    );
                })
            }
            <RenderView renderIfTrue={isMoreIconsAvaliableToFetch}>
                <LazyLoadingCardWithEvent fetchMoreIcons={fetchMoreIcons} />
                <LazyLoadingCardContainer />
            </RenderView>
            <RenderView renderIfFalse={isMoreIconsAvaliableToFetch}>
                <div>We fetched all icons sorry no more icons </div>
            </RenderView>
        </div>
    );
};

export default IconDisplayContainer;