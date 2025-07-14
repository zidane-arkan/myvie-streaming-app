import React from "react";
import PropTypes from "prop-types";



const Button = ({
    className = '',
    disabled,
    variant = 'primary',
    type = "submit",
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full ${disabled && 'opacity-40'} btn-${variant}` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(["primary", "warning", "danger", "light-outline", "white-outline"]),
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    children: PropTypes.node,
};

export default Button;