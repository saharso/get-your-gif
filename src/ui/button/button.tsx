import './button.scss';
import classnames from 'classnames';
import React from 'react';
export interface IButtonProps {
    onClick: Function;
    label: String;
    isActive?: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = ({onClick, label, isActive})=>{
    return  (
        <button 
            className={classnames('ui-button', {'is-active': isActive})}
            onClick={(e) => onClick(e)}
        >
            {label}
        </button>
    )
}

export default Button;