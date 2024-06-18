import React from "react";

function mealDetailsPage({ params }) {
  return (
    <main>
      <h1>{params.mealSlug}</h1>
    </main>
  );
}

export default mealDetailsPage;
