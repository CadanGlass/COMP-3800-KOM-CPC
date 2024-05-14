import React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

const MailchimpForm = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <form
          action="https://komcpc.us1.list-manage.com/subscribe/post?u=df676da1af2d845814cbf381e&amp;id=c09a90203c&amp;f_id=008f17e5f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div hidden>
              <input type="hidden" name="tags" value="5884365" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{
                position: "absolute",
                left: "-5000px",
                ariaHidden: "true",
              }}
            >
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input
                type="text"
                name="b_df676da1af2d845814cbf381e_c09a90203c"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  style={{
                    backgroundColor: "#C02F2F", // Red color
                    color: "white",
                    borderColor: "#C02F2F",
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    padding: "-8px 20px",
                    borderRadius: "5px",
                    fontWeight: "600"
                  }} // Inline styles
                />
                <p style={{ margin: "0px auto" }}>
                  <a
                    href="http://eepurl.com/iPO0iI"
                    title="Mailchimp - email marketing made easy and fun"
                    style={{
                      display: "inline-block",
                      backgroundColor: "transparent",
                      borderRadius: "4px",
                    }}
                  >
                    <img
                      className="refferal_badge"
                      src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                      alt="Intuit Mailchimp"
                      style={{
                        width: "220px",
                        height: "40px",
                        display: "flex",
                        padding: "2px 0px",
                        justifyContent: "center",
                        alignItems: "center",
                        filter: isDark ? "invert(1)" : "none", // Invert colors in dark mode
                      }}
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MailchimpForm;
