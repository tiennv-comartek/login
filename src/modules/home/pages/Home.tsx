import { Avatar } from "antd";
import { useEffect, useState } from "react";

function Home() {
  const [loading, setLoanding] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(
        (result) => {
         
          setLoanding(true);
          setData(result.results);
        },
        (error) => {
          setLoanding(true);
          setError(error);
        });
  },[] );
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loading) {
    return <div>Loading...</div>;
  } else {
  
    return (
      <div>
      <Avatar >UwU</Avatar>
     { data[0].name.title }.{ data[0].name.first } { data[0].name.last }
      </div >
    )
  }
}
export default Home;