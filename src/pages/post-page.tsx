import { useEffect } from "react";
import { getData } from "../store/services/get-data";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

const PostPage = () => {
  useEffect(() => {
    getData();
  }, []);
  const data = useSelector((state: RootState) => state.data.data);
  console.log(data);
  return <div>Это страница с постами</div>;
};

export default PostPage;
