import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.apis";
import {
  ContactReminder,
  ContactReminderParams,
  CreateContactReminderRequestBody,
  FetchContactRemindersParams,
  UpdateContactReminderRequestBody,
} from "@/@types/contact-reminder.type";
import {
  HttpMethod,
  PaginatedResponse,
  SuccessResponse,
} from "@/@types/_index";

const contactReminderApis = createApi({
  reducerPath: "contactReminderApis",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    CreateContactReminder: builder.mutation<
      ContactReminder,
      CreateContactReminderRequestBody
    >({
      query: (body) => ({
        method: "POST",
        url: `/contact-reminders`,
        body,
      }),
    }),

    fetchContactReminders: builder.query<
      PaginatedResponse<ContactReminder>,
      FetchContactRemindersParams
    >({
      query: (params) => ({
        method: HttpMethod.GET,
        url: `/contact-reminders`,
        params,
      }),
    }),

    updateContactReminder: builder.mutation<
      SuccessResponse,
      {
        params: ContactReminderParams;
        body: UpdateContactReminderRequestBody;
      }
    >({
      query: ({ params, body }) => ({
        method: HttpMethod.PATCH,
        url: `/contact-reminders/${params.contactReminderId}`,
        body,
      }),
    }),

    deleteContactReminder: builder.mutation<
      SuccessResponse,
      ContactReminderParams
    >({
      query: ({ contactReminderId }) => ({
        method: HttpMethod.DELETE,
        url: `/contact-reminders/${contactReminderId}`,
      }),
    }),
  }),
});

export const {
  useCreateContactReminderMutation,
  useLazyFetchContactRemindersQuery,
  useUpdateContactReminderMutation,
  useDeleteContactReminderMutation,
} = contactReminderApis;

export default contactReminderApis;
