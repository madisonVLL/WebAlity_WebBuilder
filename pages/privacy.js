import Layout from '../components/Layout';
import Image from "next/image";
import signature from "../public/web_sign.png"

const Privacy = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> September 4th, 2024</p>
        <br></br>
        <h2>1. Introduction</h2>
        <p>Welcome to WebAlity (Company, we, our, us). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="web-ality.com">web-ality.com</a> and when you use our web design and hosting services.</p>
        <br></br>
        <h2>2. Information We Collect</h2>
        <p>We may collect personal information in a variety of ways, including:</p>
            <ul className="mx-5 list-disc">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, billing address, and payment information.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, operating system, device information, and website usage statistics.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and similar tracking technologies to monitor activity on our website and store certain information. You can control cookies through your browser settings.</li>
            </ul>
        <br></br>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including:</p>
        <ul className="mx-5 list-disc">
            <li><strong>Service Delivery:</strong> To create and manage your website, provide web hosting services, and communicate with you regarding your account and our services.</li>
            <li><strong>Customer Support:</strong> To respond to your inquiries, troubleshoot issues, and provide customer support.</li>
            <li><strong>Billing and Payments:</strong> To process payments, manage billing, and send invoices.</li>
            <li><strong>Improvement and Analytics:</strong> To analyze usage and improve our website and services.</li>
            <li><strong>Marketing Communications:</strong> To send you promotional materials and updates about our services, with your consent.</li>
        </ul>
        <br></br>
        <h2>4. How We Share Your Information</h2>
        <p>We do not sell or rent your personal information. However, we may share your information in the following circumstances:</p>
        <ul className="mx-5 list-disc">
            <li><strong>Service Providers:</strong> We may share your information with third-party service providers that assist us in operating our website, processing payments, and providing our services.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the new owner.</li>
        </ul>
        <br></br>
        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
        <br></br>
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="mx-5 list-disc">
            <li><strong>Access and Update:</strong> Request access to the personal information we hold about you and request corrections or updates to inaccurate or incomplete data.</li>
            <li><strong>Delete:</strong> Request deletion of your personal information, subject to legal and contractual obligations.</li>
            <li><strong>Withdraw Consent:</strong> Withdraw your consent for us to use your personal information at any time.</li>
        </ul>
        <br></br>
        <h2>7. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
        <br></br>
        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.</p>
        <br></br>
        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
        <br></br>
        <p><strong>WebAlity</strong><br></br>
        Email: <a href="mailto:madison@landlocket.com">madison@landlocket.com</a><br></br>
        </p>
        <br></br>
        <p><i><b>Thank You,</b></i></p>
        <Image src={signature} alt="Web Ality Signature" width={100} />
        <br></br>
        </div>
    </Layout>
  );
};

export default Privacy;
