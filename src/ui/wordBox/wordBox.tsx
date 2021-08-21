import './wordBox.scss';
import React from 'react';

const WordBox: React.FunctionComponent = (props) => {

    return <>
        <div className="ui-wordBox">
            {props.children}
        </div>
    </>
}

export default WordBox;


  