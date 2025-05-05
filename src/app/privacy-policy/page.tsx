import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const privacy = `
# Privacy Policy

Team Learn India built the Learn India app as a free app. This SERVICE is provided by Team Learn India at no cost and is intended for use as is.

This page informs users about our policies regarding the collection, use, and disclosure of Personal Information for anyone using our Service.

By using our Service, you agree to the collection and use of information in accordance with this policy. Any Personal Information collected is used solely to provide and improve the Service. We do not use or share your information except as described in this Privacy Policy.

The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, unless otherwise defined.

## Information Collection and Use

For a better experience, we may require you to provide certain personally identifiable information. However, we do not collect any personal data directly. Any information requested will remain on your device and is not collected by us.

The app may use third-party services that collect information to identify you. These include:

- Google Play Services  
- Google Analytics for Firebase  
- Firebase Crashlytics

## Log Data

In case of an error in the app, we may collect data and information (via third-party services) on your device called Log Data. This may include IP address, device name, OS version, app configuration, timestamp, and other technical stats.

## Cookies

The app itself does not use cookies. However, third-party services used in the app may use cookies to improve their services. You can accept or refuse these cookies through your device settings.

## Service Providers

We may engage third-party companies for:

- Facilitating the Service  
- Providing the Service on our behalf  
- Performing Service-related tasks  
- Assisting in usage analysis

These third parties may have access to your Personal Information solely to perform assigned tasks and are obligated not to use it for any other purpose.

## Security

We strive to protect your information using commercially acceptable methods but cannot guarantee absolute security.

## Links to Other Sites

The app may contain links to external sites. These are not operated by us. We recommend reviewing their privacy policies as we are not responsible for their content or practices.

## Children’s Privacy

We do not knowingly collect personal information from children under 13. If we become aware of such data being submitted, we delete it immediately. Parents/guardians may contact us to ensure appropriate action is taken.

## Changes to This Privacy Policy

We may update this policy from time to time. Changes will be posted on this page, so users are advised to review periodically.

**Effective Date:** 2020-09-22  
**Contact Us:** [projectlearnindia@gmail.com](mailto:projectlearnindia@gmail.com)
`;

export default function AboutPage() {
  return <Markdown remarkPlugins={[remarkGfm]}>{privacy}</Markdown>;
}
