import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ReCaptcha({ sitekey, onChange }) {
  const [recaptchaInstance, setRecaptchaInstance] = useState(null);

  const handleRecaptchaChange = (token) => {
    onChange(token);
  };

  const handleLoadRecaptcha = () => {
    if (recaptchaInstance) {
      recaptchaInstance.reset();
    }
  };

  return (
    <ReCAPTCHA
      className="mt-4"
      sitekey={sitekey}
      onChange={handleRecaptchaChange}
      onExpired={handleLoadRecaptcha}
      onErrored={handleLoadRecaptcha}
      ref={(el) => setRecaptchaInstance(el)}
    />
  );
}

export default ReCaptcha;
