import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ShortTest() {
  const navigate = useNavigate();

  useEffect(() => {
    // Mutation observer to detect slider closing
    const observer = new MutationObserver(() => {
      const slider = document.querySelector(".formsapp-slider");
      const overlay = document.querySelector(".formsapp-overlay");

      // If both disappear → user closed the slider
      if (!slider && !overlay) {
        navigate("/contact");
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Load forms.app script only once
    let script = document.getElementById("formsapp-script");
    if (!script) {
      script = document.createElement("script");
      script.id = "formsapp-script";
      script.src = "https://forms.app/cdn/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    script.onload = () => {
      const instance = new window.formsapp(
        "69220a708771255e28e67b68",
        "slider",
        {
          overlay: "rgba(45,45,45,0.5)",
          width: "767px",
          height: "100vh",
          align: "right",
        },
        "https://vc3b3ipj.forms.app"
      );

      instance.open();
    };

    return () => observer.disconnect();
  }, [navigate]);

  return null;
}
