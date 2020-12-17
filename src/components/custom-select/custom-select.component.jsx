import React, { useState, useEffect, useRef } from 'react';
//css
import styles from './custom-select.module.css';
//component
import RenderView from '../render-view/render-view.component';
//static 
import { ReactComponent as ArrowDownLogo } from '../../assests/arrow-down.svg';

const CustomSelect = ({ label, style, options, defaultSelectValue, handleSelectValueChange }) => {

    const matchedOptionRef = useRef(null);
    const [selectValue, setSelectValue] = useState(defaultSelectValue);
    const [optionsHidden, setOptionsHidden] = useState(true);

    const containerStyle = optionsHidden ? { maxHeight: '0px', transition: 'none' } : {};
    const selectStyles = style ? style : {};

    useEffect(() => {
        if (!optionsHidden && matchedOptionRef.current) {
            matchedOptionRef.current.scrollIntoView();
        }
    }, [matchedOptionRef, optionsHidden]);

    useEffect(() => {
        handleSelectValueChange(selectValue);
    }, [selectValue, handleSelectValueChange]);

    return (
        <React.Fragment>
            <RenderView renderIfTrue={label}>
                <span className={styles.dropLabel}>{label}</span>
            </RenderView>
            <div className={styles.dropdown}>
                <div
                    className={styles.valueCon}
                    tabIndex="0"
                    onBlur={() => setOptionsHidden(true)}
                    onClick={() => setOptionsHidden(!optionsHidden)}>
                    <div style={selectStyles} className={styles.selectedValue}>{selectValue}</div>
                    <ArrowDownLogo className={styles.arrowDown} />
                </div>
                <div style={containerStyle} className={styles.optionsCon}>
                    {
                        options.map((option) => {
                            const matchedOption = ((option === selectValue) && (!optionsHidden)) ? styles.selectedOption : '';
                            const otherProps = (option === selectValue) ? { ref: matchedOptionRef } : {};
                            return (
                                <p key={option}
                                    className={`${matchedOption} ${styles.option}`}
                                    onMouseDown={() => { setSelectValue(option) }}
                                    {...otherProps}>
                                    {option}
                                </p>
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

CustomSelect.defaultProps = {
    label: '',
    options: [],
    defaultSelectValue: '',
    handleSelectValueChange: () => { }
};

export default CustomSelect;

