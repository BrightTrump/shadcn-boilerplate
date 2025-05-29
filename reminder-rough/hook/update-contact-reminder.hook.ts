import { VoidCallback } from "@/@types/_index";
import { useToast } from "@/ui";
import { FormEvent, useRef, useState } from "react";
import { useUpdateContactReminderMutation } from "@/apis/contact-reminder.apis";
import { convertLocalTimeToUTC, convertToISO } from "@/utils/date.utils";

export function useUpdateContactReminder() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const { callToast } = useToast();
  const [updateContactReminder, { isLoading }] =
    useUpdateContactReminderMutation();

  // Function Runs when there is a change in target Input values
  const handleFormInputChange = () => {
    const formData = new FormData(formRef.current || undefined);
    const requiredFields = ["title", "date", "time"];
    const isComplete = requiredFields.every((field) =>
      Boolean(formData.get(field))
    );
    setIsFormComplete(isComplete);
  };

  const handleUpdateContactReminder = async (
    e: FormEvent<HTMLFormElement>,
    contactReminderId: string,
    onSuccess: VoidCallback
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const dueDate = convertLocalTimeToUTC(convertToISO(date, time)!);
    const params = {
      contactReminderId,
    };

    const body = {
      title,
      note: "default note",
      dueDate,
    };
    const response = await updateContactReminder({ body, params });
    const error = response.error as any;
    if (response.error) {
      callToast({
        message: error.data.Message || "An unexpected error occurred",
        title: "Error",
        type: "error",
      });
      return;
    }
    callToast({
      message: "ContactReminder Successfully Updated.",
      title: "Success",
      type: "success",
    });
    onSuccess();
  };

  return {
    formRef,
    updateContactReminder: handleUpdateContactReminder,
    handleFormInputChange,
    isLoading,
    isFormComplete,
  };
}
