import { convertUTCToLocalTime, formatDateShort } from "@/utils/date.utils";
import React, { useState } from "react";
import DeleteReminder from "./delete-reminder";
import { ContactReminder } from "@/@types/contact-reminder.type";

import { PromiseVoidCallback, VoidCallback } from "@/@types/_index";
import ReminderActions from "./reminder-actions";

interface ItemProps {
  reminder: ContactReminder;
  refresh: PromiseVoidCallback;
  onEdit: VoidCallback;
}

export default function Item({ reminder, refresh, onEdit }: ItemProps) {
  const [isDelete, setIsDelete] = useState(false);

  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto] items-center border border-[#DEDEDE] text-black rounded-sm p-2.5">
        {/* Date */}
        <div className="text-center px-2.5 grid border-r border-[#DEDEDE]">
          <span className="text-sm font-semibold">
            {formatDateShort(reminder?.dueDate).substring(2, 6)}
          </span>
          <span className="text-lg font-bold">
            {formatDateShort(reminder?.dueDate).substring(0, 2)}
          </span>
        </div>

        {/* Details */}
        <div className="grid gap-1 px-2.5">
          <p className="text-sm font-semibold line-clamp-1">
            {reminder?.title}
          </p>
          <div className="text-xs grid grid-flow-col gap-1 items-center justify-start">
            <span className="font-medium text-[#8C8C8C] uppercase">
              {convertUTCToLocalTime(reminder?.dueDate)}
            </span>
            <span className="w-1 h-1 rounded-full block bg-[#8C8C8C]"></span>
            <span>Dylan Abraham</span>
          </div>
        </div>

        {/* Actions */}
        <ReminderActions onEdit={onEdit} onDelete={() => setIsDelete(true)} />
      </div>

      <DeleteReminder
        data={reminder}
        refresh={refresh}
        isModal={isDelete}
        handleToggle={() => {
          setIsDelete(false);
        }}
      />
    </>
  );
}
