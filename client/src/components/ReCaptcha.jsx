import ReCAPTCHA from "react-google-recaptcha";

function ReCaptcha({ sitekey, onChange }) {
  const handleRecaptchaChange = (token) => {
    onChange(token);
  };

  return (
    <ReCAPTCHA
      className="mt-4"
      sitekey={sitekey}
      onChange={handleRecaptchaChange}
    />
  );
}

export default ReCaptcha;
