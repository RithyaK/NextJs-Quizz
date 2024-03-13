import { useInfoContext } from "@/components/InfoContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const MenuPage = () => {
  //
  const router = useRouter();
  const { test } = useInfoContext();
  //
  console.log(router.query.username);
  console.log(test);

  //
  return <div>MENU PAGE </div>;
};

export default MenuPage;
