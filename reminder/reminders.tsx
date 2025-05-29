"use client";

import React, { useState } from "react";
import { Reminder, ReminderParamsIds } from "@/@types/reminder.type";
import ReminderForm from "./reminder-form";
import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Item from "./item";
import useFetchReminders from "@/hooks/reminder/fetch-reminders.hook";

interface ReminderProps extends ReminderParamsIds {
  redirectUrl?: string;
}

export default function Reminders({
  contactId,
  clientId,
  sessionId,
  redirectUrl,
}: ReminderProps) {
  const { reminders, refresh, pageNumber, setPageNumber, pageLoading } =
    useFetchReminders({ contactId, clientId, sessionId });

  const [reminderForm, setReminderForm] = useState<Reminder | null | undefined>(
    undefined
  );

  return (
    <div className="grid grid-rows-[auto_1fr] overflow-hidden gap-3 pl-5 py-5">
      <div className="pr-5">
        {reminderForm === undefined && (
          <Button
            onClick={() => setReminderForm(null)}
            variant={ButtonVariants.PrimaryOutlined}
            className="w-full text-xs"
          >
            <Icon type={Icons.Plus} size={14} color="#003DA6" />
            Set Reminder
          </Button>
        )}

        {reminderForm !== undefined && (
          <ReminderForm
            data={reminderForm}
            refresh={refresh}
            contactId={contactId}
            clientId={clientId}
            sessionId={sessionId}
            redirectUrl={redirectUrl}
            handleCancel={() => setReminderForm(undefined)}
          />
        )}
      </div>

      <div className="grid gap-2 content-start overflow-y-auto custom-scroll-bar pr-5">
        {reminders?.items.map((reminder, index) => (
          <Item
            key={index}
            reminder={reminder}
            refresh={refresh}
            onEdit={() => setReminderForm(reminder)}
          />
        ))}
      </div>
    </div>
  );
}
