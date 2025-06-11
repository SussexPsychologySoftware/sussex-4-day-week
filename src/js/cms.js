import CMS from "decap-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.scss";

import ContactPreview from "./cms-preview-templates/contact";
import ControlEmployerPreview from "./previews/control-employer";
import FooterPreview from "./cms-preview-templates/footer";
import HomePreview from "./cms-preview-templates/home";
import HowItWorksPreview from "./cms-preview-templates/how-it-works";
import ResourcesPreview from "./cms-preview-templates/resources";
import SignupPreview from "./cms-preview-templates/signup";
import SuccessStoriesPreview from "./cms-preview-templates/success-stories";
import TeamPreview from "./cms-preview-templates/team";

CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("control-employer", ControlEmployerPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("how-it-works", HowItWorksPreview);
CMS.registerPreviewTemplate("resources", ResourcesPreview);
CMS.registerPreviewTemplate("signup", SignupPreview);
CMS.registerPreviewTemplate("success-stories", SuccessStoriesPreview);
CMS.registerPreviewTemplate("resources", ResourcesPreview);
CMS.registerPreviewTemplate("team", TeamPreview);
CMS.init();
