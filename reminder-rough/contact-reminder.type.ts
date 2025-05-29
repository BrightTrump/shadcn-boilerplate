import { PaginationParams } from "./_index";

export interface ContactReminder {
  reminderId: string;
  title: string;
  note?: string;
  dueDate: string;
  createdAt: string;
}

export interface ContactReminderParams {
  contactReminderId: string;
}

export interface CreateContactReminderRequestBody {
  title: string;
  note?: string;
  dueDate: string;
  contactId: string;
}

export interface FetchContactRemindersParams extends PaginationParams {
  contactId: string;
}

export interface UpdateContactReminderRequestBody {
  title: string;
  note?: string;
  dueDate: string;
}
