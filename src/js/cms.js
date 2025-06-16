import CMS from "decap-cms-app";

// import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.scss";
import ContactPreview from "./cms-preview-templates/contact";
import ControlEmployerPreview from "./cms-preview-templates/control-employer";
import FooterPreview from "./cms-preview-templates/footer";
import HomePreview from "./cms-preview-templates/home";
import HowItWorksPreview from "./cms-preview-templates/how-it-works";
import ResourcesPreview from "./cms-preview-templates/resources";
import SignupPreview from "./cms-preview-templates/signup";
import SuccessStoriesPreview from "./cms-preview-templates/success-stories";
import TeamPreview from "./cms-preview-templates/team";

// CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewStyle("https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css");
// src/css/imports/ main.scss, _forms.scss, _variables.scss
CMS.registerPreviewStyle(`
  :root {
    /* Colors */
    --primary: rgba(24, 155, 211, 1);
    --highlight: rgba(251, 251, 164, 1);
    --white: rgba(255, 255, 255, 1);
    --off-white: rgba(255, 253, 252, 1);
  }

  /* Custom color classes to match your site */
  .primary { 
    color: var(--primary);
  }
  
  .bg-primary {
    background-color: var(--primary);
  }
  
  .bg-highlight {
    background-color: var(--highlight);
  }
  
  .bg-off-white {
    background-color: var(--off-white);
  }

`, {raw: true});

CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("control_employer", ControlEmployerPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("homepage", HomePreview);
CMS.registerPreviewTemplate("how_it_works", HowItWorksPreview);
CMS.registerPreviewTemplate("resources", ResourcesPreview);
CMS.registerPreviewTemplate("signup", SignupPreview);
CMS.registerPreviewTemplate("success_stories", SuccessStoriesPreview);
CMS.registerPreviewTemplate("team", TeamPreview);

CMS.init();

//
// import CMS from "decap-cms-app";
// import React from "react";
//
// // Simple contact preview for testing
// const ContactPreview = ({entry, widgetFor}) => {
//   console.log("ContactPreview called with:", {entry, widgetFor});
//
//   const data = entry?.getIn ? entry.getIn(["data"]).toJS() : {};
//   console.log("Contact data:", data);
//
//   return React.createElement("div", {
//     style: {padding: "20px", fontFamily: "sans-serif"}
//   }, [
//     React.createElement("h1", {key: "title"}, data.title || "Contact Preview"),
//     React.createElement("p", {key: "email"}, `Email: ${data.email || "No email"}`),
//     React.createElement("p", {key: "instructions"}, data.instructions || "No instructions"),
//     React.createElement("div", {key: "debug"}, [
//       React.createElement("h3", {key: "debug-title"}, "Debug Info:"),
//       React.createElement("pre", {key: "debug-data"}, JSON.stringify(data, null, 2))
//     ])
//   ]);
// };
//
// console.log("Registering minimal contact preview...");
// CMS.registerPreviewTemplate("contact", ContactPreview);
//
// console.log("Initializing CMS...");
// CMS.init();
//
