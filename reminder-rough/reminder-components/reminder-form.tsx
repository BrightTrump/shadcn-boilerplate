import { VoidCallback } from "@/@types/_index";
import { ContactReminder } from "@/@types/contact-reminder.type";
import { useCreateContactReminder } from "@/hooks/contact/create-contact-reminder.hook";
import { useUpdateContactReminder } from "@/hooks/contact/update-contact-reminder.hook";
import { useAppSelector } from "@/hooks/shared/redux.hook";
import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import { convertUTCToLocalTime } from "@/utils/date.utils";
import React, { FormEvent } from "react";

interface ReminderFormProps {
  data?: ContactReminder | null;
  refresh: VoidCallback;
  handleCancel: VoidCallback;
}

export default function ReminderForm({
  data,
  refresh,
  handleCancel,
}: ReminderFormProps) {
  const contactId = useAppSelector(
    (state) => state.contacts.contactInView?.contactId
  );

  const {
    createContactReminder,
    formRef,
    handleFormInputChange,
    isFormComplete,
    isLoading,
  } = useCreateContactReminder();

  const {
    updateContactReminder,
    formRef: updateContactReminderFormRef,
    handleFormInputChange: updateContactReminderHandleFormInputChange,
    isFormComplete: updateContactReminderIsFormComplete,
    isLoading: updateContactReminderIsLoading,
  } = useUpdateContactReminder();

  const handleCreateContactReminder = (e: FormEvent<HTMLFormElement>) => {
    createContactReminder(e, contactId as string, () => {
      handleCancel();
      refresh();
    });
  };

  const handleUpdateContactReminder = (e: FormEvent<HTMLFormElement>) => {
    updateContactReminder(e, data?.reminderId as string, () => {
      handleCancel();
      refresh();
    });
  };

  return (
    <form
      ref={data ? updateContactReminderFormRef : formRef}
      onInput={
        data
          ? updateContactReminderHandleFormInputChange
          : handleFormInputChange
      }
      onSubmit={
        data ? handleUpdateContactReminder : handleCreateContactReminder
      }
      className="grid gap-2.5"
    >
      {/* Inputs */}
      <div className="grid gap-2.5">
        <Input
          type={Inputs.Text}
          id="title"
          name="title"
          placeholder="Title"
          defaultValue={data?.title}
        />

        <Input
          type={Inputs.Date}
          id="date"
          name="date"
          placeholder="Date"
          defaultValue={data?.dueDate}
        />
        <Input
          type={Inputs.Time}
          id="time"
          name="time"
          placeholder="Select time"
          defaultValue={
            data ? convertUTCToLocalTime(data?.dueDate!).substring(0, 7) : ""
          }
        />
      </div>

      {/* Submit */}
      <div className="grid grid-cols-2 gap-3 font-semibold text-xs">
        <Button
          type="button"
          onClick={handleCancel}
          variant={ButtonVariants?.DangerOutlined}
          className="w-full rounded-sm"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant={ButtonVariants.PrimaryOutlined}
          className="w-full rounded-sm"
          isLoading={isLoading || updateContactReminderIsLoading}
          disabled={
            (data ? !updateContactReminderIsFormComplete : !isFormComplete) ||
            isLoading ||
            updateContactReminderIsLoading
          }
        >
          Set Reminder
        </Button>
      </div>
    </form>
  );
}
