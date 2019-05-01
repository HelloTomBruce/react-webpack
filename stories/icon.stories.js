import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions"

import SvgIcon from "../src/component/SvgIcon";

storiesOf("Icon", module)
    .addDecorator(story => <div style={{ padding: "30px" }}>{story()}</div>)
    .add("icon example", () => (
        <div style={{ padding: "20px", color: "orange", fontSize: "20px" }}>
            <SvgIcon iconClass="icon-headset" />
        </div>
    ));
