'use client'
import React from "react";

function WrapperComponent({ children }) {
    const [count, setCount] = React.useState(0);
    return <button>{children(count)}</button>;
}

export default WrapperComponent
