import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://forms.app/cdn/embed.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.formsapp) {
        new window.formsapp(
          "69220a708771255e28e67b68",
          "fullscreen",
          {},
          "dapp-job-application-form"
        );
      }
    };

    document.body.appendChild(script);

    // Cleanup (optional)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div formsappId="69220a708771255e28e67b68"></div>
    </div>
  );
}
