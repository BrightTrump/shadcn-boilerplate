"use client";

import { PromiseVoidCallback, VoidCallback } from "@/@types/_index";
import { ContactReminder } from "@/@types/contact-reminder.type";
import { useDeleteContactReminder } from "@/hooks/contact/delete-contact-reminder.hook";
import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Image from "next/image";
import React, { useState } from "react";

interface DeleteReminderProps {
  data: ContactReminder;
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
  const { deleteContactReminder, isDeletingContactReminder } =
    useDeleteContactReminder();

  const handleDeleteContactReminder = () => {
    deleteContactReminder(data.reminderId, () => {
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
              isLoading={isDeletingContactReminder}
              disabled={isDeletingContactReminder}
              onClick={handleDeleteContactReminder}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
