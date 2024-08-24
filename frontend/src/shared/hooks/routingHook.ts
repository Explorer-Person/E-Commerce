import { useLocation, useNavigate } from "react-router-dom";

export default function RoutingUtil() {
  const navigate = useNavigate();
  const {hash} = useLocation();
  const linkTo = (endpoint: string) => {
    return navigate(endpoint);
  };

  return { linkTo, currentHash: hash.slice(1) };
}
