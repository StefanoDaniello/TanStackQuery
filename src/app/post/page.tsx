"use client";
import React, { Suspense, useState } from "react";
import Card from "../../../components/Card";

export default function Page() {
  return (
    // gestione del suspense
    <Suspense fallback={<div>Loading...</div>}>
      <Card />
    </Suspense>
  );
}
