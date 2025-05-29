import { ErrorResponse, VoidCallback } from "@/@types/_index";
import { useDeleteContactReminderMutation } from "@/apis/contact-reminder.apis";
import { useToast } from "@/ui";

export function useDeleteContactReminder() {
  const { callToast } = useToast();
  const [deleteContactReminder, { isLoading }] =
    useDeleteContactReminderMutation();

  const handleDeleteContactReminder = async (
    contactReminderId: string,
    onSuccess: VoidCallback
  ) => {
    const response = await deleteContactReminder({ contactReminderId });
    const error = response.error as ErrorResponse;
    if (response.error) {
      callToast({
        message: error.data.detail,
        title: error.data.title,
        type: "error",
      });
      return;
    }
    onSuccess();
  };

  return {
    deleteContactReminder: handleDeleteContactReminder,
    isDeletingContactReminder: isLoading,
  };
}
