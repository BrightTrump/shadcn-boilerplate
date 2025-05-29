import { ErrorResponse, VoidCallback } from "@/@types/_index";
import { useToast } from "@/ui";
import { FormEvent, useRef, useState } from "react";
import { useCreateContactReminderMutation } from "@/apis/contact-reminder.apis";
import { convertLocalTimeToUTC, convertToISO } from "@/utils/date.utils";
import { ContactReminder } from "@/@types/contact-reminder.type";

export function useCreateContactReminder() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const { callToast } = useToast();
  const [createContactReminder, { isLoading }] =
    useCreateContactReminderMutation();

  // Function Runs when there is a change in target Input values
  const handleFormInputChange = () => {
    const formData = new FormData(formRef.current || undefined);
    const requiredFields = ["title", "date", "time"];
    const isComplete = requiredFields.every((field) =>
      Boolean(formData.get(field))
    );
    setIsFormComplete(isComplete);
  };
  // Function Runs when Form is submitted
  const handleCreateContactReminder = async (
    e: FormEvent<HTMLFormElement>,
    contactId: string,
    onSuccess: VoidCallback
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const dueDate = convertLocalTimeToUTC(convertToISO(date, time)!);
    const response = await createContactReminder({
      contactId,
      dueDate,
      title,
      note: "default note",
    });

    const error = response.error as ErrorResponse;
    const data = response.data as ContactReminder;

    if (error) {
      callToast({
        message: error.data.Message || "An unexpected error occurred.",
        title: "Error",
        type: "error",
      });
    }
    onSuccess();
  };

  return {
    formRef,
    createContactReminder: handleCreateContactReminder,
    handleFormInputChange,
    isFormComplete,
    isLoading,
  };
}
