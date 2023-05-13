import Home from "@/pages";
import { getLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const isLoggedIn = getLocalStorage("otp") !== null;
    const router = useRouter();
    useEffect(() => {
      if (!isLoggedIn) {
        toast.error("Please login first");
        router.push("/");
      }
    }, []);

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
