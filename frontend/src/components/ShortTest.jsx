import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ShortTest() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(true); // show the message immediately

  useEffect(() => {
    // Delay before loading the forms.app script
    const timer = setTimeout(() => {
      loadFormsApp();
    }, 1200); // 1.2 seconds

    return () => clearTimeout(timer);
  }, []);

  function loadFormsApp() {
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

      // Redirect BEFORE slider bar opens
      navigate("/contact");

      // Open slider after redirect trigger
      instance.open();

      // Hide message once slider appears
      setShowMessage(false);
    };
  }

  return (
    <>
      {showMessage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            fontSize: "22px",
            zIndex: 9999,
            textAlign: "center",
            padding: "20px"
          }}
        >
          Just a minute…<br />
          Generating the questions to test your tech skills.
        </div>
      )}
    </>
  );
}
