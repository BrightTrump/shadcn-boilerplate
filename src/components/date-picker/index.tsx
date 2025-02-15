import React from "react";
import { Content } from "./content";
import { Card, CardTitle } from "@/components/ui";

export default function DatePicker() {
  return (
    <div>
      <Card className="w-[350px] h-fit p-4">
        <CardTitle className="pb-2">Pick a date</CardTitle>
        <Content />
      </Card>
    </div>
  );
}
