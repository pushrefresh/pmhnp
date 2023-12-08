import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BrowserDisclaimer.module.css";

export function BrowserDisclaimer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "background-color-graywarm50")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-medium")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-small")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "disclaimer_wrapper")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-style-h3")}
                tag="h2"
              >
                {"Please Note — Use Google Chrome OR Firefox"}
                <br />
                {""}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "padding-4")}
                tag="div"
              />
              <_Builtin.Paragraph>
                {
                  "The seminars are designed to be viewed in one setting. They were created with embedded pop-up questions in a timed session. If you need to pause during the middle of a seminar, please annotate the time where you stopped. After you leave the system, or if the seminar has been paused for too long, you will need to log back in and physically advance to the point that you were previously viewing. This is a security feature as each viewing session is logged and synced with your student account."
                }
                <br />
                {"‍"}
                <br />
                {
                  "Keep in mind that you will need to re-answer any pop-up questions that are embedded in the seminars if they occur prior to the start time you are searching for. You have purchased access to the seminar viewing system and not the rights to an individual video, so each time you log back into the system it will treat it as a new viewing experience. "
                }
                <br />
                {"‍"}
                <br />
                {
                  "Due to the nature of the security features on the seminars and pop-up questions, you will need to disable any firewalls or advanced security features (pop-up blockers) to avoid buffering issues (this can happen if you are watching the seminars using the internet or wifi at a large hospital, clinic, or government facility (e.g., the VA). We recommend using your mobile device if you encounter a buffering issue due to this situation. "
                }
                <br />
                {"‍"}
                <br />
                {
                  '"Pop-up Question Disabled" versions of the seminars are now available at the bottom of each seminar page. This will let you seamlessly navigate through the videos and avoid issues with security programs and firewalls. You will have to pause and restart the videos manually if you wish to practice the questions that appear in the seminar before Dr. Rossi goes over the answers. Happy studying and shine brightly!'
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
