import Home from "@/pages";
import { getLocalStorage } from "@/utils/localStorage";
import { toast } from "react-toastify";

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const isLoggedIn = getLocalStorage("otp") !== null;

    if (!isLoggedIn) {
      return <Home />;
    }

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
