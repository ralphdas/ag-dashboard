import PageTitle from "@common/PageTitle";
import React from "react";
import Paragraph from "@common/Paragraph";
import TitleHeader from "@common/TitleHeader";

const TermsOfService: React.FC = () => {
  return (
    <div className="md:p-10 mt-28">
      <div className="max-w-3xl mx-auto text-left text-gray-800 md:text-lg">
        <PageTitle>Terms of Service</PageTitle>
        <Paragraph className="text-xl my-6">
          Welcome to our Terms of Service page. Please read these terms
          carefully before using our service.
        </Paragraph>
        <TitleHeader>Introduction</TitleHeader>
        <Paragraph>
          These terms and conditions outline the rules and regulations for the
          use of our website.
        </Paragraph>
        <TitleHeader>Intellectual Property Rights</TitleHeader>
        <Paragraph>
          Other than the content you own, under these terms, we own all the
          intellectual property rights and materials contained in this website.
        </Paragraph>
        <TitleHeader>Restrictions</TitleHeader>
        <Paragraph>
          You are specifically restricted from all of the following:
        </Paragraph>
        <ul className="list-disc list-inside mb-6 text-adsbin-evergreens">
          <li>Publishing any website material in any other media;</li>
          <li>
            Selling, sublicensing and/or otherwise commercializing any website
            material;
          </li>
          <li>Publicly performing and/or showing any website material;</li>
          <li>
            Using this website in any way that is or may be damaging to this
            website;
          </li>
          <li>
            Using this website in any way that impacts user access to this
            website;
          </li>
          <li>
            Using this website contrary to applicable laws and regulations, or
            in any way may cause harm to the website, or to any person or
            business entity;
          </li>
          <li>
            Engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this website;
          </li>
          <li>Using this website to engage in any advertising or marketing.</li>
        </ul>
        <TitleHeader>Your Content</TitleHeader>
        <Paragraph>
          In these website standard terms and conditions, "Your Content" shall
          mean any audio, video text, images or other material you choose to
          display on this website.
        </Paragraph>
        <TitleHeader>No warranties</TitleHeader>
        <Paragraph>
          This website is provided "as is," with all faults, and we express no
          representations or warranties, of any kind related to this website or
          the materials contained on this website.
        </Paragraph>
        <TitleHeader>Limitation of liability</TitleHeader>
        <Paragraph>
          In no event shall we, nor any of our officers, directors and
          employees, be held liable for anything arising out of or in any way
          connected with your use of this website.
        </Paragraph>
        <TitleHeader>Indemnification</TitleHeader>
        <Paragraph>
          You hereby indemnify to the fullest extent us from and against any
          and/or all liabilities, costs, demands, causes of action, damages and
          expenses arising in any way related to your breach of any of the
          provisions of these terms.
        </Paragraph>
        <TitleHeader>Severability</TitleHeader>
        <Paragraph>
          If any provision of these terms is found to be invalid under any
          applicable law, such provisions shall be deleted without affecting the
          remaining provisions herein.
        </Paragraph>
        <TitleHeader>Variation of Terms</TitleHeader>
        <Paragraph>
          We are permitted to revise these terms at any time as we see fit, and
          by using this website you are expected to review these terms on a
          regular basis.
        </Paragraph>
        <TitleHeader>Assignment</TitleHeader>
        <Paragraph>
          We are allowed to assign, transfer, and subcontract our rights and/or
          obligations under these terms without any notification. However, you
          are not allowed to assign, transfer, or subcontract any of your rights
          and/or obligations under these terms.
        </Paragraph>
        <TitleHeader>Entire Agreement</TitleHeader>
        <Paragraph>
          These terms constitute the entire agreement between us and you in
          relation to your use of this website, and supersede all prior
          agreements and understandings.
        </Paragraph>
        <TitleHeader>Governing Law & Jurisdiction</TitleHeader>
        <Paragraph>
          These terms will be governed by and interpreted in accordance with the
          laws of Dubai and you submit to the non-exclusive jurisdiction of the
          state and federal courts located for the resolution of any disputes.
        </Paragraph>
      </div>
    </div>
  );
};

export default TermsOfService;
