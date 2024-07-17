const FooterDownload = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <header>
        <h1 className="text-[20px] font-semibold text-white">Download App</h1>
      </header>

      <div className="flex flex-col gap-4">
        <p className="text-[#fafafa] opacity-40">
          Save $3 with App New User Only
        </p>

        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <img src="/images/Qr Code.png" alt="qr code" />

          <div className="flex flex-col gap-2">
            <img src="/images/googleplay.png" alt="googleplay" />
            <img src="/images/appstore.png" alt="appstore" />
          </div>
        </div>

        <div className="flex items-center mt-3 gap-[30px]">
          <img src="/images/icons/Icon-Facebook.svg" alt="facebook" />
          <img src="/images/icons/Icon-Twitter.svg" alt="Twitter" />
          <img src="/images/icons/icon-instagram.svg" alt="instagram" />
          <img src="/images/icons/Icon-Linkedin.svg" alt="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default FooterDownload;
