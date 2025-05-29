"use client";

import { PromiseVoidCallback, VoidCallback } from "@/@types/_index";
import { Reminder } from "@/@types/reminder.type";
import useDeleteReminder from "@/hooks/reminder/delete-reminder.hook";
import { Button, ButtonVariants } from "@/ui";
import Image from "next/image";
import React, { useState } from "react";

interface DeleteReminderProps {
  data: Reminder;
  refresh: PromiseVoidCallback;
  isModal: boolean;
  handleToggle: VoidCallback;
}

export default function DeleteReminder({
  data,
  isModal,
  refresh,
  handleToggle,
}: DeleteReminderProps) {
  const { deleteReminder, isDeletingReminder } = useDeleteReminder();

  const handleDeleteReminder = () => {
    deleteReminder(data.reminderId, () => {
      handleToggle();
      refresh();
    });
  };

  return (
    <>
      <div
        className={`bg-black bg-opacity-50 z-50 fixed top-0 left-0 w-full h-full p-5 grid content-center transition-all overflow-hidden ${
          isModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`bg-white w-full grid gap-5 max-w-xl rounded-md mx-auto relative overflow-hidden p-10`}
        >
          <div className="grid gap-5 justify-items-center">
            <span className="relative block w-40">
              <Image
                src={"/delete.svg"}
                width={250}
                height={200}
                alt="Delete Illustration"
              />
            </span>

            <p className="font-bold text-center text-xl text-black max-w-64">
              Are you sure you want to delete{" "}
              <span className="capitalize font-bold text-red-500">
                {data?.title}
              </span>{" "}
              reminder?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 max-w-xs w-full mx-auto">
            <Button variant={ButtonVariants.Neutral} onClick={handleToggle}>
              Cancel
            </Button>
            <Button
              variant={ButtonVariants.DangerFilled}
              isLoading={isDeletingReminder}
              disabled={isDeletingReminder}
              onClick={handleDeleteReminder}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
