/** @format */

import React from "react";
import { useRouter } from "next/router";

export default function View() {
  const router = useRouter();
  return (
    <div className='_view'>
      <h2>Hello World {router.query.id}</h2>
    </div>
  );
}
