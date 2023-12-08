import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HonestyPolicy.module.css";

export function HonestyPolicy({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_honesty-policy")}
      tag="header"
      id="honesty-policy"
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
            className={_utils.cx(
              _styles,
              "padding-section-medium",
              "has-border_bottom"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "content_honesty-policy")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "column_inner",
                  "left",
                  "max-width-small"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "image-rounded",
                    "shadow-xlarge",
                    "hue-adjust"
                  )}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65502a727db9aa282c23a481/6550530ffb2a945891b71adf_honesty-policy-bg.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "column_inner", "right")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-style-h4")}
                    tag="h2"
                  >
                    {"Honesty Policy"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "text-size-small")}
                >
                  <_Builtin.Strong>{"Please note"}</_Builtin.Strong>
                  {
                    ": Your individual viewing license is for you alone. Please do not share your account access information with anyone else as the system can identify if multiple IPs are being used and will automatically close your account and it will not be reopened as per the terms of service (section 10). Your review purchase is only for you. Thank you for your honesty!!!"
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
