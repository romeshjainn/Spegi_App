import { useEffect } from "react";
import { App } from "@capacitor/app";

const useBackButtonHandler = () => {
  useEffect(() => {
    const handleBackButton = async () => {
      if (
        window.location.pathname == "/home" ||
        window.location.pathname == "/login" ||
        window.location.pathname == "/select-company"
      ) {
        console.log(window.location.pathname, "location.pathname");
        await App.exitApp();
      } else {
        window.history.back();
      }
    };

    if (App) {
      const backButtonListener = App.addListener(
        "backButton",
        handleBackButton
      );

      return () => {
        backButtonListener.remove();
      };
    }
  }, []);
};

export default useBackButtonHandler;
