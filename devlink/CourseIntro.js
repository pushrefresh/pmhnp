import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CourseIntro.module.css";

export function CourseIntro({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "background-color-graywarm50")}
      tag="div"
      id="courseIntroduction"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-align-center",
                "margin-0",
                "heading-style-h2"
              )}
              tag="h2"
            >
              {"Watch — Course Introduction"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "padding-6")}
              tag="div"
            />
            <_Builtin.NotSupported _atom="LightboxWrapper" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
