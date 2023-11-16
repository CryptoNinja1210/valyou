import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = Cookies.get("token");
      if (token) {
        setIsAuthenticated(true);
      } else {
        router.push("/login");
      }
    }, []);

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };

  return Auth;
};
