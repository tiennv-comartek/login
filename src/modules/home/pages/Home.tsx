
import { useEffect, useState } from "react";
import checkLogin from "../../auth/hoc/checkLogin";

import MasterLayout from "../../../components/pages/MasterLayout";

const Home = () => {
  const [loading, setLoanding] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoanding(true);
          setData(result.results);
        },
        (error) => {
          setLoanding(true);
          setError(error);
        }
      );
  }, []);
  //menu

  if (error) {
    return <div>Error: {error.message} </div>;
  } else if (!loading) {
    return <div>Loading...</div>;
  } else {
    
    return (
      <MasterLayout data={data} />
    );
  }
};
export default checkLogin(Home);
