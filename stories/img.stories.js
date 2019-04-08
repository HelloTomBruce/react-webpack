import React from "react"
import { storiesOf } from "@storybook/react"
// import { action } from "@storybook/addon-actions"

import ImgDisplay from "../src/component/img"

storiesOf("Img", module)
  .addDecorator(story => <div style={{ padding: "30px" }}>{story()}</div>)
  .add("with style", () => (
    <ImgDisplay
      width="200px"
      height="200px"
      src="https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7e685ef2f903918fc8d13bca613d264b/b3119313b07eca80787730f59f2397dda14483b5.jpg"
    />
  ))
