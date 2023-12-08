import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainFooter.module.css";

export function MainFooter({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer4_component")}
      tag="footer"
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
              "padding-vertical",
              "padding-xxlarge"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "padding-bottom",
                "padding-xxlarge",
                "has-border-bottom"
              )}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "footer4_top-wrapper")}
                tag="div"
              >
                <_Builtin.NavbarBrand
                  className={_utils.cx(_styles, "footer4_logo-link")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_660f3784-3455-2cc7-4be4-60c8c15e22cc-c15e22c6"
                  )}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65502a727db9aa282c23a481/65504297308e88ddc82a787f_clairty-logo.svg"
                  />
                </_Builtin.NavbarBrand>
                <_Builtin.Grid
                  className={_utils.cx(_styles, "footer4_social-list")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_660f3784-3455-2cc7-4be4-60c8c15e22ce-c15e22c6"
                  )}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer4_social-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xsmall")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22%2012.0611C22%206.50451%2017.5229%202%2012%202C6.47715%202%202%206.50451%202%2012.0611C2%2017.0828%205.65684%2021.2452%2010.4375%2022V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375%207.32296%2011.9305%205.93012%2014.2146%205.93012C15.3088%205.93012%2016.4531%206.12663%2016.4531%206.12663V8.60261H15.1922C13.95%208.60261%2013.5625%209.37822%2013.5625%2010.1739V12.0611H16.3359L15.8926%2014.9694H13.5625V22C18.3432%2021.2452%2022%2017.083%2022%2012.0611Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer4_social-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xsmall")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%203H8C5.23858%203%203%205.23858%203%208V16C3%2018.7614%205.23858%2021%208%2021H16C18.7614%2021%2021%2018.7614%2021%2016V8C21%205.23858%2018.7614%203%2016%203ZM19.25%2016C19.2445%2017.7926%2017.7926%2019.2445%2016%2019.25H8C6.20735%2019.2445%204.75549%2017.7926%204.75%2016V8C4.75549%206.20735%206.20735%204.75549%208%204.75H16C17.7926%204.75549%2019.2445%206.20735%2019.25%208V16ZM16.75%208.25C17.3023%208.25%2017.75%207.80228%2017.75%207.25C17.75%206.69772%2017.3023%206.25%2016.75%206.25C16.1977%206.25%2015.75%206.69772%2015.75%207.25C15.75%207.80228%2016.1977%208.25%2016.75%208.25ZM12%207.5C9.51472%207.5%207.5%209.51472%207.5%2012C7.5%2014.4853%209.51472%2016.5%2012%2016.5C14.4853%2016.5%2016.5%2014.4853%2016.5%2012C16.5027%2010.8057%2016.0294%209.65957%2015.1849%208.81508C14.3404%207.97059%2013.1943%207.49734%2012%207.5ZM9.25%2012C9.25%2013.5188%2010.4812%2014.75%2012%2014.75C13.5188%2014.75%2014.75%2013.5188%2014.75%2012C14.75%2010.4812%2013.5188%209.25%2012%209.25C10.4812%209.25%209.25%2010.4812%209.25%2012Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer4_social-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xsmall")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.1761%204H19.9362L13.9061%2010.7774L21%2020H15.4456L11.0951%2014.4066L6.11723%2020H3.35544L9.80517%2012.7508L3%204H8.69545L12.6279%209.11262L17.1761%204ZM16.2073%2018.3754H17.7368L7.86441%205.53928H6.2232L16.2073%2018.3754Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer4_social-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xsmall")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.5%203C3.67157%203%203%203.67157%203%204.5V19.5C3%2020.3284%203.67157%2021%204.5%2021H19.5C20.3284%2021%2021%2020.3284%2021%2019.5V4.5C21%203.67157%2020.3284%203%2019.5%203H4.5ZM8.52076%207.00272C8.52639%207.95897%207.81061%208.54819%206.96123%208.54397C6.16107%208.53975%205.46357%207.90272%205.46779%207.00413C5.47201%206.15897%206.13998%205.47975%207.00764%205.49944C7.88795%205.51913%208.52639%206.1646%208.52076%207.00272ZM12.2797%209.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217%2017.742%2012.4214%2017.362%2012.4211%2016.9819V16.9818V16.9816V16.9815V16.9812C12.4203%2015.9674%2012.4194%2014.9532%2012.4246%2013.9397C12.426%2013.6936%2012.4372%2013.4377%2012.5005%2013.2028C12.7381%2012.3253%2013.5271%2011.7586%2014.4074%2011.8979C14.9727%2011.9864%2015.3467%2012.3141%2015.5042%2012.8471C15.6013%2013.1803%2015.6449%2013.5389%2015.6491%2013.8863C15.6605%2014.9339%2015.6589%2015.9815%2015.6573%2017.0292V17.0294C15.6567%2017.3992%2015.6561%2017.769%2015.6561%2018.1388V18.3202H18.328V18.1149C18.328%2017.6629%2018.3278%2017.211%2018.3275%2016.7591V16.759V16.7588C18.327%2015.6293%2018.3264%2014.5001%2018.3294%2013.3702C18.3308%2012.8597%2018.276%2012.3563%2018.1508%2011.8627C17.9638%2011.1286%2017.5771%2010.5211%2016.9485%2010.0824C16.5027%209.77019%2016.0133%209.5691%2015.4663%209.5466C15.404%209.54401%2015.3412%209.54062%2015.2781%209.53721L15.2781%209.53721L15.2781%209.53721C14.9984%209.52209%2014.7141%209.50673%2014.4467%209.56066C13.6817%209.71394%2013.0096%2010.0641%2012.5019%2010.6814C12.4429%2010.7522%2012.3852%2010.8241%2012.2991%2010.9314L12.2991%2010.9315L12.2797%2010.9557V9.76176ZM5.68164%2018.3244H8.33242V9.76733H5.68164V18.3244Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer4_social-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xsmall")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.5686%204.77345C21.5163%205.02692%2022.2555%205.76903%2022.5118%206.71673C23.1821%209.42042%2023.1385%2014.5321%2022.5259%2017.278C22.2724%2018.2257%2021.5303%2018.965%2020.5826%2019.2213C17.9071%2019.8831%205.92356%2019.8015%203.40294%2019.2213C2.45524%2018.9678%201.71595%2018.2257%201.45966%2017.278C0.827391%2014.7011%200.871044%209.25144%201.44558%206.73081C1.69905%205.78311%202.44116%205.04382%203.38886%204.78753C6.96561%204.0412%2019.2956%204.282%2020.5686%204.77345ZM9.86682%208.70227L15.6122%2011.9974L9.86682%2015.2925V8.70227Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                </_Builtin.Grid>
              </_Builtin.Grid>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "line-divider")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "padding-top", "padding-medium")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "footer4_bottom-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_copyright")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_660f3784-3455-2cc7-4be4-60c8c15e22dc-c15e22c6"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer4_credit-text")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_660f3784-3455-2cc7-4be4-60c8c15e22dd-c15e22c6"
                    )}
                    tag="div"
                  >
                    {"© 2023 Clarity Education Systems. All rights reserved."}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_links-group")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_660f3784-3455-2cc7-4be4-60c8c15e22df-c15e22c6"
                  )}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer4_legal-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Privacy Policy"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer4_legal-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Terms of Service"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer4_legal-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Cookies Settings"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
