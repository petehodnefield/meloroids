import React from "react";
import Link from "next/link";
const PrivacyPolicy = () => {
  const h2Styles = "text-1.125 font-semibold mb-1";
  const pStyles = "text-1";
  const textSection = "mb-6";
  const hasTextBelow = "mb-2";
  const ulStyles = "list-disc pl-8";
  return (
    <div className="flex items-center justify-center w-full">
      <div className="px-6 pt-6 lg:pt-12 flex flex-col w-full md:max-w-48 lg:max-w-70">
        <h1 className="text-2 font-semibold mb-4">Privacy Policy</h1>{" "}
        <p className={`${pStyles} mb-4`}>Effective as of September 01, 2023</p>
        <p className={`mb-6`}>
          Protecting your private information is our priority. This Statement of
          Privacy applies to<Link href="/"> https://www.meloroids.io</Link>, and
          Meloroids LLC and governs data collection and usage. For the purposes
          of this Privacy Policy, unless otherwise noted, all references to
          Meloroids LLC include<Link href="/"> https://www.meloroids.io</Link>.
          The Meloroids LLC website is a music producer resource site. By using
          the Meloroids LLC website, you consent to the data practices described
          in this statement.
        </p>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>
            Collection of your Personal Information
          </h2>
          <div>
            <p className={`${pStyles} ${hasTextBelow}`}>
              In order to better provide you with products and services offered,
              Meloroids LLC may collect personally identifiable information,
              such as your:
            </p>
            <ul className={`${ulStyles} mb-2`}>
              <li>Email Address</li>
              <li>Instagram Handle</li>
            </ul>
          </div>
          <p>
            {" "}
            We do not collect any personal information about you unless you
            voluntarily provide it to us. However, you may be required to
            provide certain personal information to us when you elect to use
            certain products or services. These may include: (a) registering for
            an account; (b) entering a sweepstakes or contest sponsored by us or
            one of our partners; (c) signing up for special offers from selected
            third parties; (d) sending us an email message; (e) submitting your
            credit card or other payment information when ordering and
            purchasing products and services. To wit, we will use your
            information for, but not limited to, communicating with you in
            relation to services and/or products you have requested from us. We
            also may gather additional personal or non-personal information in
            the future.
          </p>
        </div>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>Use of Your Personal Information</h2>
          <p className={`${pStyles} ${hasTextBelow}`}>
            Meloroids LLC collects and uses your personal information to operate
            and deliver the services you have requested.
          </p>
          <p className={`${pStyles}`}>
            Meloroids LLC may also use your personally identifiable information
            to inform you of other products or services available from Meloroids
            LLC and its affiliates.
          </p>
        </div>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>
            Sharing Information with Third Parties
          </h2>
          <p className={`${pStyles}  ${hasTextBelow}`}>
            Meloroids LLC does not sell, rent or lease its customer lists to
            third parties.
          </p>
          <p className={`${pStyles}  ${hasTextBelow}`}>
            Meloroids LLC may share data with trusted partners to help perform
            statistical analysis, send you email or postal mail, provide
            customer support, or arrange for deliveries. All such third parties
            are prohibited from using your personal information except to
            provide these services to Meloroids LLC, and they are required to
            maintain the confidentiality of your information.
          </p>
          <p className={`${pStyles}`}>
            Meloroids LLC may disclose your personal information, without
            notice, if required to do so by law or in the good faith belief that
            such action is necessary to: (a) conform to the edicts of the law or
            comply with legal process served on Meloroids LLC or the site; (b)
            protect and defend the rights or property of Meloroids LLC; and/or
            (c) act under exigent circumstances to protect the personal safety
            of users of Meloroids LLC, or the public.
          </p>
        </div>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>Tracking User Behavior</h2>
          <p className={`${pStyles}`}>
            Meloroids LLC may keep track of the websites and pages our users
            visit within Meloroids LLC, in order to determine what Meloroids LLC
            services are the most popular. This data is used to deliver
            customized content and advertising within Meloroids LLC to customers
            whose behavior indicates that they are interested in a particular
            subject area.
          </p>
        </div>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>Automatically Collected Information</h2>
          <p className={`${pStyles}`}>
            Information about your computer hardware and software may be
            automatically collected by Meloroids LLC. This information can
            include: your IP address, browser type, domain names, access times
            and referring website addresses. This information is used for the
            operation of the service, to maintain quality of the service, and to
            provide general statistics regarding use of the Meloroids LLC
            website.
          </p>
        </div>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>
            Security of your Personal Information
          </h2>
          <div>
            <p className={`${pStyles}  ${hasTextBelow}`}>
              {" "}
              Meloroids LLC secures your personal information from unauthorized
              access, use, or disclosure. Meloroids LLC uses the following
              methods for this purpose:
            </p>
            <ul className={`${ulStyles}`}>
              <li className="mb-2">SSL Protocal</li>
            </ul>
          </div>
          <p className={`${pStyles}  ${hasTextBelow}`}>
            When personal information (such as a credit card number) is
            transmitted to other websites, it is protected through the use of
            encryption, such as the Secure Sockets Layer (SSL) protocol.
          </p>
          <p>
            We strive to take appropriate security measures to protect against
            unauthorized access to or alteration of your personal information.
            Unfortunately, no data transmission over the Internet or any
            wireless network can be guaranteed to be 100% secure. As a result,
            while we strive to protect your personal information, you
            acknowledge that: (a) there are security and privacy limitations
            inherent to the Internet which are beyond our control; and (b)
            security, integrity, and privacy of any and all information and data
            exchanged between you and us through this Site cannot be guaranteed.
          </p>
        </div>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>Right to Deletion</h2>
          <p className={`${pStyles} ${hasTextBelow}`}>
            Subject to certain exceptions set out below, on receipt of a
            verifiable request from you, we will:
          </p>
          <ul className={`${ulStyles}`}>
            <li>Delete your personal information from our records; and</li>
            <li>
              Direct any service providers to delete your personal information
              from their records.
            </li>
          </ul>
          <p className={`${pStyles} mt-4 mb-2`}>
            Please note that we may not be able to comply with requests to
            delete your personal information if it is necessary to:
          </p>
          <ul className={`${ulStyles}`}>
            <li>
              Complete the transaction for which the personal information was
              collected, fulfill the terms of a written warranty or product
              recall conducted in accordance with federal law, provide a good or
              service requested by you, or reasonably anticipated within the
              context of our ongoing business relationship with you, or
              otherwise perform a contract between you and us;
            </li>
            <li>
              Detect security incidents, protect against malicious, deceptive,
              fraudulent, or illegal activity; or prosecute those responsible
              for that activity;
            </li>
            <li>
              Debug to identify and repair errors that impair existing intended
              functionality;
            </li>
            <li>
              Exercise free speech, ensure the right of another consumer to
              exercise his or her right of free speech, or exercise another
              right provided for by law;
            </li>
            <li>
              Comply with the California Electronic Communications Privacy Act;
            </li>
            <li>
              Engage in public or peer-reviewed scientific, historical, or
              statistical research in the public interest that adheres to all
              other applicable ethics and privacy laws, when our deletion of the
              information is likely to render impossible or seriously impair the
              achievement of such research, provided we have obtained your
              informed consent;
            </li>
            <li>
              Enable solely internal uses that are reasonably aligned with your
              expectations based on your relationship with us;
            </li>
            <li>Comply with an existing legal obligation; or</li>
            <li>
              Otherwise use your personal information, internally, in a lawful
              manner that is compatible with the context in which you provided
              the information.
            </li>
          </ul>
        </div>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>Children Under Thirteen</h2>
          <p className={`${pStyles}`}>
            Meloroids LLC does not knowingly collect personally identifiable
            information from children under the age of thirteen. If you are
            under the age of thirteen, you must ask your parent or guardian for
            permission to use this website.
          </p>
        </div>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>Email Communications</h2>
          <p className={`${pStyles} ${hasTextBelow}`}>
            {" "}
            From time to time, Meloroids LLC may contact you via email for the
            purpose of providing announcements, promotional offers, alerts,
            confirmations, surveys, and/or other general communication. In order
            to improve our Services, we may receive a notification when you open
            an email from Meloroids LLC or click on a link therein.
          </p>
          <p className={`${pStyles}`}>
            If you would like to stop receiving marketing or promotional
            communications via email from Meloroids LLC, you may opt out of such
            communications by clicking on the UNSUBSCRIBE button.
          </p>
        </div>
        <div className={`${textSection}`}>
          <h2 className={`${h2Styles}`}>Changes to this Statement</h2>
          <p className={`${pStyles}`}>
            Meloroids LLC reserves the right to change this Privacy Policy from
            time to time. We will notify you about significant changes in the
            way we treat personal information by sending a notice to the primary
            email address specified in your account, by placing a prominent
            notice on our website, and/or by updating any privacy information.
            Your continued use of the website and/or Services available after
            such modifications will constitute your: (a) acknowledgment of the
            modified Privacy Policy; and (b) agreement to abide and be bound by
            that Policy.
          </p>
        </div>
        <div className={`${textSection}`}>
          <h2 className={h2Styles}>Contact Us</h2>
          <p className="mb-4">
            Meloroids LLC welcomes your questions or comments regarding the
            Terms:
          </p>
          <div className="mb-4">
            <p>Meloroids LLC</p>
            <p>3454 Pete Miller Ct N</p>
            <p>Stillwater, Minnesota 55082</p>
          </div>

          <div className="mb-4">
            <h3 className="font-medium">Email Address:</h3>
            <p>mongamonga@meloroids.io</p>
          </div>

          <div className="mb-4">
            <h3 className="font-medium">Telephone number:</h3>
            <p>(651)-354-1707</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
