import React from "react";
import CreateAccount from "@/components/auth/create-account";
import PaymentMethod from "@/components/payment-method/payment-method";
import { TeamMembers } from "@/components/team-members/team-members";
import { ShareDocument } from "@/components/share-document/share-document";
import DatePicker from "@/components/date-picker";
import { Notification } from "@/components/notification/notification";
import { ReportIssue } from "@/components/report-issue/report-issue";
import { ShadcnUi } from "@/components/shadcn-ui/shadcn-ui";
import { CookiesSettings } from "@/components/cookies-settings/cookies-settings";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-16">
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-2 rounded-2xl p-6">
        {/* Col-1 */}
        <div className="space-y-6">
          <CreateAccount />
          <PaymentMethod />
        </div>
        {/* Col-2 */}
        <div className="space-y-6">
          <TeamMembers />
          <ShareDocument />
          <DatePicker />
          <Notification />
        </div>
        {/* Col-3 */}
        <div className="space-y-6">
          <ReportIssue />
          <ShadcnUi />
          <CookiesSettings />
        </div>
      </div>
    </div>
  );
}
