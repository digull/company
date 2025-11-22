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
          "691dde478b2742893844d890",
          "fullscreen",
          {},
          "https://z52vrx9d.forms.app"
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
      <div formsappId="691dde478b2742893844d890"></div>
    </div>
  );
}
