import { PaginatedResponse } from "@/@types/_index";
import { ContactReminder } from "@/@types/contact-reminder.type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data?: PaginatedResponse<ContactReminder>;
}

const initialState: InitialStateProps = {};

const contactRemindersSlice = createSlice({
  name: "contactReminders",
  initialState,
  reducers: {
    setContactReminders: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setContactReminders } = contactRemindersSlice.actions;

export default contactRemindersSlice;
