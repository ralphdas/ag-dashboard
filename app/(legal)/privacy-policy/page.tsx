import PageTitle from "@common/PageTitle";
import Paragraph from "@common/Paragraph";
import TitleHeader from "@common/TitleHeader";

export default function Page() {
  return (
    <div className="md:p-10 mt-28">
      <div className="max-w-3xl mx-auto text-left">
        <PageTitle>Privacy Policy</PageTitle>
        <Paragraph className="mb-6 text-sm text-adsbin-grey-200">
          Last updated: 2021-01-01
        </Paragraph>
        <Paragraph className="text-lg">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from our
          website.
        </Paragraph>
        <TitleHeader className="text-2xl">
          Personal Information We Collect
        </TitleHeader>
        <TitleHeader className="">Device Information</TitleHeader>
        <Paragraph>
          We collect information about the device you use to access our website,
          including information about the device type, operating system, and
          browser type.
        </Paragraph>
        <TitleHeader className="">Log Information</TitleHeader>
        <Paragraph>
          We collect information about your interactions with our website,
          including the pages you visit, the time and date of your visit, and
          the duration of your visit.
        </Paragraph>
        <TitleHeader className="">Cookies</TitleHeader>
        <Paragraph>
          We use cookies to collect information about your visit to our website,
          including information about your browsing behavior and preferences.
        </Paragraph>
        <TitleHeader className="">How We Use Your Information</TitleHeader>
        <Paragraph className="mb-6">
          We use the information we collect to provide, maintain, and improve
          our website, as well as to communicate with you about our products and
          services.
        </Paragraph>
      </div>
    </div>
  );
}
