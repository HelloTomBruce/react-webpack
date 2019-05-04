import React from "react";
import { Spin } from "antd";

function Load({ isLoading }) {
    if (isLoading) {
        return <Spin size="large" />;
    }
    return null;
}

export default Load;
