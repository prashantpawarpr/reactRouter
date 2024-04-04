import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <h1 className="bg-gray-500 text-white text-3xl p-4  ">User:{userid}</h1>
  );
};

export default User;
