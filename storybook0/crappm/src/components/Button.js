import React from 'react'

const Button = ({children, ...inprops}) => (
    <button {...inprops}>{children}</button>
);

export default Button