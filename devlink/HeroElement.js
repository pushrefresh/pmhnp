import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HeroElement.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65502a727db9aa282c23a484|7c8b9f8d-faa9-204e-72ce-60ab858c4755","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65502a727db9aa282c23a484|7c8b9f8d-faa9-204e-72ce-60ab858c4755","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1699763478178},"e-54":{"id":"e-54","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInBottom","autoStopEventId":"e-55"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"a17dfd27-5596-d93d-23d5-93decd6af18b"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1702414915282}},"actionLists":{"a-7":{"id":"a-7","title":"Home Hero In View","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"value":0,"unit":""}},{"id":"a-7-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"value":0,"unit":""}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"value":1,"unit":""}},{"id":"a-7-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":250,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"value":1,"unit":""}},{"id":"a-7-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":350,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":350,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1699763481730},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeroElement({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section_header5")} tag="header">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "header5_content")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "padding-section-medium")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "max-width-large")}
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
                    className={_utils.cx(
                      _styles,
                      "text-color-white",
                      "heading-style-h1"
                    )}
                    data-w-id="a17dfd27-5596-d93d-23d5-93decd6af18b"
                    tag="h1"
                  >
                    {"PMHNP Student Portal"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "text-size-medium",
                    "text-color-peace"
                  )}
                >
                  {
                    "Welcome to Clarity Education Systems’ Student Portal. This review course is for psychiatric mental health nurse practitioners (PMHNP) preparing to pass their American Nurses Credentialing Center (ANCC)® certification exam. If you have not yet registered for our on-demand and/or in-person PMHNP certification review courses, we invite you to visit "
                  }
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "text-style-link",
                      "is-alternate"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    {"PMHNPtesting.com"}
                  </_Builtin.Link>
                  {" to learn more about our program."}
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-top", "margin-medium")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-group")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button", "is-alternate")}
                      button={true}
                      options={{
                        href: "#courseIntroduction",
                      }}
                    >
                      {"Explore Content"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "button",
                        "is-secondary",
                        "is-alternate"
                      )}
                      button={true}
                      options={{
                        href: "#honesty-policy",
                      }}
                    >
                      {"Purchase Program"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "header5_background-image-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "image-overlay-layer")}
          tag="div"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "header5_background-image")}
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/65502a727db9aa282c23a481/655048fe729040d7cd037c0a_websiteopen%20(1).png"
        />
      </_Builtin.Block>
    </_Component>
  );
}
