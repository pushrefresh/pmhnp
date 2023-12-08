import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./MainNav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1415"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643147930078},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1432"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643147930078},"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65502a727db9aa282c23a484|7c8b9f8d-faa9-204e-72ce-60ab858c4755","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65502a727db9aa282c23a484|7c8b9f8d-faa9-204e-72ce-60ab858c4755","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1699763478178},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699821698925},"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699825952844},"e-32":{"id":"e-32","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699825952844},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-13","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-13-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699833697288}},"actionLists":{"a":{"id":"a","title":"Navbar 10 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd85"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd87"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd84"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd84"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd87"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-2":{"id":"a-2","title":"Navbar 10 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd87"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd84"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd87"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd84"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd85"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-7":{"id":"a-7","title":"Home Hero In View","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"value":0,"unit":""}},{"id":"a-7-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"value":0,"unit":""}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-color-white.heading-style-h1","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42dac","06470014-be49-6a3b-cc30-65bc56f70625"]},"value":1,"unit":""}},{"id":"a-7-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":250,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"value":1,"unit":""}},{"id":"a-7-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-color-peace","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d8b","ad10d188-ddc7-620c-dfec-b08112b3c9d9"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":350,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":350,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".button.is-alternate","selectorGuids":["54fad521-88c9-e3ab-71ff-4c1469d42d7c","54fad521-88c9-e3ab-71ff-4c1469d42e55"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1699763481730},"a-12":{"id":"a-12","title":"Navbar Scroll","continuousParameterGroups":[{"id":"a-12-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-12-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":255,"blue":255,"alpha":1},"target":{"objectId":"@var_variable-3e79b69a-39e3-a44d-2838-1de80b9399b9","id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd9"}}},{"id":"a-12-n-3","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":255,"blue":255,"alpha":0},"target":{"objectId":"@var_variable-02b297de-c112-f2d8-db5d-91a3e4fe0a85","id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2"}}},{"id":"a-12-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd3"},"heightValue":7,"widthUnit":"PX","heightUnit":"rem","locked":false}},{"id":"a-12-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65502a727db9aa282c23a484|be65212f-a23f-acf5-8418-520c5b8557a4"},"globalSwatchId":"","rValue":234,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-12-n-9","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65502a727db9aa282c23a484|be65212f-a23f-acf5-8418-520c5b8557a4"},"globalSwatchId":"","rValue":40,"bValue":87,"gValue":69,"aValue":1}},{"id":"a-12-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar10_logo.is-alternate","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6e","758808db-f907-27c5-3d95-6e3480697f57"]},"value":1,"unit":""}},{"id":"a-12-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd5"},"value":0,"unit":""}},{"id":"a-12-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-icon_line-top","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd84"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-12-n-16","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-icon_line-middle","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd85"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-12-n-17","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-icon_line-bottom","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd87"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"keyframe":5,"actionItems":[{"id":"a-12-n-2","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":40,"green":69,"blue":87,"alpha":1},"target":{"objectId":"@var_variable-3e79b69a-39e3-a44d-2838-1de80b9399b9","id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd9"}}},{"id":"a-12-n-4","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":234,"green":236,"blue":238,"alpha":1},"target":{"objectId":"@var_variable-02b297de-c112-f2d8-db5d-91a3e4fe0a85","id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2"}}},{"id":"a-12-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd3"},"heightValue":5.5,"widthUnit":"PX","heightUnit":"rem","locked":false}},{"id":"a-12-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65502a727db9aa282c23a484|be65212f-a23f-acf5-8418-520c5b8557a4"},"globalSwatchId":"","rValue":40,"bValue":87,"gValue":69,"aValue":1}},{"id":"a-12-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65502a727db9aa282c23a484|be65212f-a23f-acf5-8418-520c5b8557a4"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-12-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar10_logo.is-alternate","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6e","758808db-f907-27c5-3d95-6e3480697f57"]},"value":0,"unit":""}},{"id":"a-12-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd5"},"value":1,"unit":""}},{"id":"a-12-n-18","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-icon_line-top","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd84"]},"globalSwatchId":"","rValue":40,"bValue":87,"gValue":69,"aValue":1}},{"id":"a-12-n-19","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-icon_line-middle","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd85"]},"globalSwatchId":"","rValue":40,"bValue":87,"gValue":69,"aValue":1}},{"id":"a-12-n-20","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-icon_line-bottom","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd87"]},"globalSwatchId":"","rValue":40,"bValue":87,"gValue":69,"aValue":1}}]}]}],"createdOn":1699816188098},"a-14":{"id":"a-14","title":"Mobile Nav Open","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":255,"blue":255,"alpha":0},"target":{"objectId":"@var_variable-02b297de-c112-f2d8-db5d-91a3e4fe0a85","useEventTarget":"PARENT","selector":".navbar10_component","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6b"]}}},{"id":"a-14-n-8","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65502a727db9aa282c23a484|be65212f-a23f-acf5-8418-520c5b8557a4"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-14-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65502a727db9aa282c23a484|be65212f-a23f-acf5-8418-520c5b8557a4"},"globalSwatchId":"","rValue":40,"bValue":87,"gValue":69,"aValue":1}},{"id":"a-14-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar10_logo.is-alternate","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6e","758808db-f907-27c5-3d95-6e3480697f57"]},"value":1,"unit":""}},{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar10_logo.is-primary","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6e","a5e4ef24-68b6-dbe7-2a2b-7380e8856a88"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-14-n-2","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"ease","duration":250,"value":{"red":234,"green":236,"blue":238,"alpha":1},"target":{"objectId":"@var_variable-02b297de-c112-f2d8-db5d-91a3e4fe0a85","useEventTarget":"PARENT","selector":".navbar10_component","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6b"]}}},{"id":"a-14-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"selector":".navbar10_logo.is-primary","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6e","a5e4ef24-68b6-dbe7-2a2b-7380e8856a88"]},"value":1,"unit":""}},{"id":"a-14-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"selector":".navbar10_logo.is-alternate","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6e","758808db-f907-27c5-3d95-6e3480697f57"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1699825957078},"a-15":{"id":"a-15","title":"Mobile Nav Close","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"ease","duration":250,"value":{"red":255,"green":255,"blue":255,"alpha":0},"target":{"objectId":"@var_variable-02b297de-c112-f2d8-db5d-91a3e4fe0a85","useEventTarget":"PARENT","selector":".navbar10_component","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6b"]}}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"selector":".navbar10_logo.is-alternate","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6e","758808db-f907-27c5-3d95-6e3480697f57"]},"value":1,"unit":""}},{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"selector":".navbar10_logo.is-primary","selectorGuids":["9a888b2f-5de2-4b1d-ba3c-bc3673fabd6e","a5e4ef24-68b6-dbe7-2a2b-7380e8856a88"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699825957078},"a-13":{"id":"a-13","title":"Nav Scroll - Tablet/Mobile","continuousParameterGroups":[{"id":"a-13-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-13-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":255,"blue":255,"alpha":0},"target":{"objectId":"@var_variable-02b297de-c112-f2d8-db5d-91a3e4fe0a85","id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2"}}},{"id":"a-13-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd5"},"value":0,"unit":""}},{"id":"a-13-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd6"},"value":1,"unit":""}},{"id":"a-13-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2"},"heightValue":15,"widthUnit":"PX","heightUnit":"%","locked":false}}]},{"keyframe":5,"actionItems":[{"id":"a-13-n-2","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":234,"green":236,"blue":238,"alpha":1},"target":{"objectId":"@var_variable-02b297de-c112-f2d8-db5d-91a3e4fe0a85","id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2"}}},{"id":"a-13-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd5"},"value":1,"unit":""}},{"id":"a-13-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd6"},"value":0,"unit":""}},{"id":"a-13-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ee2c7fa7-2501-cf86-931c-c02a8c207dd2"},"heightValue":12,"widthUnit":"PX","heightUnit":"%","locked":false}}]}]}],"createdOn":1699825325930}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MainNav({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar10_component")}
      data-w-id="ee2c7fa7-2501-cf86-931c-c02a8c207dd2"
      tag="div"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "medium",
        animation: "default",
        docHeight: true,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar10_container")}
        data-w-id="ee2c7fa7-2501-cf86-931c-c02a8c207dd3"
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "navbar10_logo-link")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "navbar10_logo", "is-primary")}
            data-w-id="ee2c7fa7-2501-cf86-931c-c02a8c207dd5"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65502a727db9aa282c23a481/65504297308e88ddc82a787f_clairty-logo.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "navbar10_logo", "is-alternate")}
            data-w-id="ee2c7fa7-2501-cf86-931c-c02a8c207dd6"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65502a727db9aa282c23a481/65504856f224407ac99a8342_clairty-logo-alt.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "navbar10_menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar10_menu-left")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar10_link")}
              data-w-id="ee2c7fa7-2501-cf86-931c-c02a8c207dd9"
              options={{
                href: "#",
              }}
            >
              {"Home"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar10_link")}
              options={{
                href: "#",
              }}
            >
              {"Meet Dr. Rossi"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar10_link")}
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar10_link")}
              options={{
                href: "#",
              }}
            >
              {"Seminars"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar10_link")}
              options={{
                href: "#",
              }}
            >
              {"Exams"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar10_link")}
              options={{
                href: "#",
              }}
            >
              {"Flash Cards"}
            </_Builtin.NavbarLink>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar10_menu-right")}
            tag="div"
          >
            <_Builtin.NotSupported _atom="UserLogOutLogIn" />
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "is-alternate")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Dashboard"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "navbar10_menu-button")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-icon")}
            data-w-id="ee2c7fa7-2501-cf86-931c-c02a8c207dea"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon_line-top")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon_line-middle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon_line-middle-inner")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon_line-bottom")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
