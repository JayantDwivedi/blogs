import Home from "@/pages";

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const isLoggedIn = true;

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
