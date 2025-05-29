"use client";

import React, { useState } from "react";
import { useFetchContactReminders } from "@/hooks/contact/fetch-contact-reminder.hook";
import { isDateExpired } from "@/utils/date.utils";
import { ContactReminder } from "@/@types/contact-reminder.type";
import { useAppSelector } from "@/hooks/shared/redux.hook";
import ReminderForm from "./reminder-form";
import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Item from "./item";

export default function Reminders() {
  const contactId = useAppSelector(
    (state) => state.contacts.contactInView?.contactId
  );

  const { contactReminders, refresh, pageNumber, setPageNumber, pageLoading } =
    useFetchContactReminders(contactId!);

  const [reminderForm, setReminderForm] = useState<
    ContactReminder | null | undefined
  >(undefined);

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
            handleCancel={() => setReminderForm(undefined)}
          />
        )}
      </div>

      <div className="grid gap-2 content-start overflow-y-auto custom-scroll-bar pr-5">
        {contactReminders?.items.map((reminder, index) => (
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
