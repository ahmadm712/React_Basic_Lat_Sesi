import React from "react";
import { useParams,useRouteMatch } from "react-router";

export default function ProfilPage() {
  let { list_profile } = useParams();
  console.log(useRouteMatch());
  return (
    <div>
      <h1>Profil Page {list_profile}</h1>
    </div>
  );
}
