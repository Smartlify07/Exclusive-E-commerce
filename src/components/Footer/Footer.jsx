import FooterAccount from "./FooterAccount";
import FooterCopyright from "./FooterCopyright";
import FooterDownload from "./FooterDownload";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterSubscribe from "./FooterSubscribe";
import FooterSupport from "./FooterSupport";

const Footer = () => {
  return (
    <footer className="bg-black pt-14 pb-5 flex flex-col items-center">
      <div className="lg:w-10/12  grid grid-auto-fit gap-y-10">
        <FooterSubscribe />
        <FooterSupport />
        <FooterAccount />
        <FooterQuickLinks />
        <FooterDownload />
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
