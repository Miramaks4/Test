import React from 'react';

export const MyTextArea = ({stylevalue, divclassname, stylevaluecontein}) => {
    return (
        <div style={stylevaluecontein}>
            <div className={divclassname} contentEditable style={stylevalue}></div>
        </div>


    );
};