import { useEffect, useState } from "react";
import "./LoadingPage.scss";

const LoadingPage = (props) => {
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(fasle);

  useEffect(() => {
    if (isMounted.current) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    else{
        if(props.loading)isMounted.current = true;
    }
  });
};
