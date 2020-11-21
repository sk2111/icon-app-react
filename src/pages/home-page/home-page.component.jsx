//libs
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
//css
import styles from './home-page.module.css';
//component
import ProtectedRoute from '../../components/protected-route/protected-route.component';
import HomeHeader from '../../components/home-header/home-header.component';
import NavigationMenu from '../../components/navigation-menu/navigation-menu.component';
//route paths
import { ALL_ICONS, PROJECTS, FAVORITES, EDIT, MESSAGES } from '../../utilities/route.paths';


const HomePage = () => {

    const [navMenuExpanded, setNavMenuExpanded] = useState(true);

    const navigationStyle = navMenuExpanded ? { width: '250px' } : { width: '80px' };

    return (
        <div className={styles.rootContainer}>
            <section style={navigationStyle} className={styles.leftContainer}>
                <NavigationMenu />
            </section>
            <section className={styles.rightContainer}>
                <section className={styles.rightHeader}>
                    <HomeHeader navMenuExpanded={navMenuExpanded} setNavMenuExpanded={setNavMenuExpanded} />
                </section>
                <section className={styles.rightContent}>
                    <Switch>
                        <Route exact path={ALL_ICONS} render={() => { return <div>I am All icons page</div> }} />
                        <Route exact path={PROJECTS} render={() => { return <div>I am projects page</div> }} />
                        <Route exact path={FAVORITES} render={() => { return <div>I am favourites page</div> }} />
                        <Route exact path={EDIT} render={() => { return <div>I am edit page</div> }} />
                        <Route exact path={MESSAGES} render={() => { return <div>I am messages page</div> }} />
                    </Switch>
                </section>
            </section>
        </div>
    );
};

export default ProtectedRoute(HomePage);