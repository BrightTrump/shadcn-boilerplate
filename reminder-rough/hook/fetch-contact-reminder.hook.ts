import { useToast } from "@/ui";
import { useLayoutEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { usePageNumber } from "../shared/page-number.hook";
import { ErrorResponse } from "@/@types/_index";
import { useLazyFetchContactRemindersQuery } from "@/apis/contact-reminder.apis";
import { setContactReminders } from "@/store/slices/contact-reminder";

export function useFetchContactReminders(contactId: string) {
  const dispatch = useDispatch();
  const { callToast } = useToast();
  const { pageNumber, setPageNumber, pageLoading, setPageLoading } =
    usePageNumber();
  const [fetchContactReminders, { data }] = useLazyFetchContactRemindersQuery();

  const fetchData = async () => {
    const response = await fetchContactReminders({
      contactId,
      pageNumber,
      pageSize: 10,
    });

    setPageLoading(false);

    const error = response.error as ErrorResponse;
    if (error) {
      callToast({
        message: error.data.detail || "An unexpected error occurred.",
        title: "Error",
        type: "error",
      });
    }

    dispatch(setContactReminders(response.data));
  };

  useLayoutEffect(() => {
    fetchData();
  }, [pageNumber, contactId]);

  return {
    contactReminders: data,
    refresh: fetchData,
    pageNumber,
    setPageNumber,
    pageLoading,
  };
}
