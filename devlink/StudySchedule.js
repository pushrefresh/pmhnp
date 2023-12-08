import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./StudySchedule.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65502a727db9aa282c23a484|7c8b9f8d-faa9-204e-72ce-60ab858c4755","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65502a727db9aa282c23a484|7c8b9f8d-faa9-204e-72ce-60ab858c4755","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1699763478178}},"actionLists":{"a-7":{"id":"a-7","title":"Home Hero In View","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"value":0,"unit":""}},{"id":"a-7-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"value":0,"unit":""}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"value":1,"unit":""}},{"id":"a-7-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":250,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"value":1,"unit":""}},{"id":"a-7-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":350,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":350,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1699763481730}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function StudySchedule({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section", "background-color-clarity400")}
      tag="div"
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
            <_Builtin.Block
              className={_utils.cx(_styles, "study-schedule-example-wrapper")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "text-align-center",
                  "heading-style-h3"
                )}
                tag="h3"
              >
                {"Study Schedule Suggestion"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "max-width-large",
                  "text-align-center",
                  "text-color-clarity75"
                )}
              >
                {
                  "Six and Two-week study schedule example. If you need more or less time - great! It is all about you! This us a great starting point for organizing your studies!"
                }
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "padding-6")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "button", "is-alternate")}
                button={true}
                options={{
                  href: "#",
                }}
              >
                {"Join Program to View"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
