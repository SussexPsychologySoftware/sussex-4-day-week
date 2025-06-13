import CMS from "decap-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.scss";

import ContactPreview from "./cms-preview-templates/contact";
import ControlEmployerPreview from "./cms-preview-templates/control-employer";
import FooterPreview from "./cms-preview-templates/footer";
import HomePreview from "./cms-preview-templates/home";
import HowItWorksPreview from "./cms-preview-templates/how-it-works";
import ResourcesPreview from "./cms-preview-templates/resources";
import SignupPreview from "./cms-preview-templates/signup";
import SuccessStoriesPreview from "./cms-preview-templates/success-stories";
import TeamPreview from "./cms-preview-templates/team";

console.log("Loading Decap CMS...");
console.log("Styles loaded:", styles ? "Yes" : "No");

// Register preview styles
CMS.registerPreviewStyle(styles, {raw: true});
console.log("Preview styles registered");

// Register all preview templates with exact names from config.yml
console.log("Registering preview templates...");

CMS.registerPreviewTemplate("contact", ContactPreview);
console.log("Registered: contact");

CMS.registerPreviewTemplate("control_employer", ControlEmployerPreview);
console.log("Registered: control_employer");

CMS.registerPreviewTemplate("footer", FooterPreview);
console.log("Registered: footer");

CMS.registerPreviewTemplate("home", HomePreview);
console.log("Registered: home");

CMS.registerPreviewTemplate("how_it_works", HowItWorksPreview);
console.log("Registered: how_it_works");

CMS.registerPreviewTemplate("resources", ResourcesPreview);
console.log("Registered: resources");

CMS.registerPreviewTemplate("signup", SignupPreview);
console.log("Registered: signup");

CMS.registerPreviewTemplate("success_stories", SuccessStoriesPreview);
console.log("Registered: success_stories");

CMS.registerPreviewTemplate("team", TeamPreview);
console.log("Registered: team");

// Add event listeners to debug what's happening
CMS.registerEventListener('entry.save', (data) => {
    console.log("Entry saved:", data);
});

CMS.registerEventListener('entry.publish', (data) => {
    console.log("Entry published:", data);
});

// Initialize CMS
console.log("Initializing CMS...");
CMS.init();
console.log("CMS initialized");