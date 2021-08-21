import './button.scss';
import classnames from 'classnames';
import React from 'react';
export interface IButtonProps {
    onClick: Function;
    label: String;
    isActive?: boolean;
    className?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({onClick, label, isActive, className})=>{
    return  (
        <button 
            className={classnames('ui-button', className, {'is-active': isActive})}
            onClick={(e) => onClick(e)}
        >
            {label}
        </button>
    )
}

export default Button;