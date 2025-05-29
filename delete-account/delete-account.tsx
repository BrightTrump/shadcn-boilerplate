import { Icon, Icons, Input, Inputs } from "@/ui";
import React from "react";
import RequestForm from "./request-form";

export default function DeleteAccount() {
  return (
    <div className="grid gap-2.5">
      <div className="w-max grid grid-cols-[auto_1fr] gap-5 items-center">
        <h2>Delete my Account/Data Request</h2>
        <RequestForm />
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-1">
        <Icon type={Icons.Info} size={16} color="#555555" />
        <div className="text-[#555555] text-sm grid gap-5">
          <p>
            Start a deletion or anonymization process (with warnings). Submit a
            formal request to have your account and associated personal data
            permanently deleted. You&apos;ll be guided through a confirmation
            process.
          </p>
        </div>
      </div>
    </div>
  );
}
