import React, { FormEvent } from "react";
import { VoidCallback } from "@/@types/_index";
import { Reminder, ReminderParamsIds } from "@/@types/reminder.type";
import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import { convertUTCToLocalTime } from "@/utils/date.utils";
import useCreateReminder from "@/hooks/reminder/create-reminder.hook";
import useUpdateReminder from "@/hooks/reminder/update-reminder.hook";

interface ReminderFormProps extends ReminderParamsIds {
  data?: Reminder | null;
  refresh: VoidCallback;
  handleCancel: VoidCallback;
  redirectUrl?: string;
}

export default function ReminderForm({
  data,
  refresh,
  handleCancel,
  contactId,
  clientId,
  sessionId,
  redirectUrl,
}: ReminderFormProps) {
  const {
    createReminder,
    formRef,
    handleFormInputChange,
    isFormComplete,
    isLoading,
  } = useCreateReminder({ contactId, clientId, sessionId, redirectUrl });

  const {
    updateReminder,
    formRef: updateReminderFormRef,
    handleFormInputChange: updateReminderHandleFormInputChange,
    isFormComplete: updateReminderIsFormComplete,
    isLoading: updateReminderIsLoading,
  } = useUpdateReminder();

  const handleCreateReminder = (e: FormEvent<HTMLFormElement>) => {
    createReminder(e, (sessionId) => {
      handleCancel();
      refresh();
    });
  };

  const handleUpdateReminder = (e: FormEvent<HTMLFormElement>) => {
    updateReminder(e, data?.reminderId as string, () => {
      handleCancel();
      refresh();
    });
  };

  return (
    <form
      ref={data ? updateReminderFormRef : formRef}
      onInput={
        data ? updateReminderHandleFormInputChange : handleFormInputChange
      }
      onSubmit={data ? handleUpdateReminder : handleCreateReminder}
      className="grid gap-2.5"
    >
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

      <div className="grid grid-cols-2 gap-3 font-semibold text-xs">
        <Button
          type="button"
          onClick={handleCancel}
          variant={ButtonVariants.DangerOutlined}
          className="w-full rounded-sm"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant={ButtonVariants.PrimaryOutlined}
          className="w-full rounded-sm"
          isLoading={isLoading || updateReminderIsLoading}
          disabled={
            (data ? !updateReminderIsFormComplete : !isFormComplete) ||
            isLoading ||
            updateReminderIsLoading
          }
        >
          Set Reminder
        </Button>
      </div>
    </form>
  );
}
