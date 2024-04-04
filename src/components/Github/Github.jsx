// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  const follower = useLoaderData();
  // const [follower, setFollowers] = useState("");
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/prashantpawarpr`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFollowers(data);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img
        className="flex rounded-lg"
        alt="profile"
        width={300}
        height={300}
        src={follower.avatar_url}
      ></img>
      <h1>Github followers:{follower.followers}</h1>
    </div>
  );
};

export default GitHub;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/prashantpawarpr");
  return response.json();
};
