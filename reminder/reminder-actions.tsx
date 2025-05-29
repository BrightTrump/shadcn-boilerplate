import { VoidCallback } from "@/@types/_index";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon, Icons } from "@/ui";
import { MoreVertical } from "lucide-react";
import React from "react";

interface ReminderActionsProps {
  onEdit: VoidCallback;
  onDelete: VoidCallback;
}

export default function ReminderActions({
  onEdit,
  onDelete,
}: ReminderActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="grid place-content-center outline-none rounded-sm h-8 w-8 p-0 data-[state=open]:bg-muted">
          <MoreVertical size={20} />
          <span className="sr-only">Open menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem asChild>
          <button
            onClick={() => onEdit()}
            className="text-gray-900 grid grid-cols-[auto_1fr] items-center gap-3 py-1 w-full text-left cursor-pointer opacity-70 hover:opacity-100 transition-all"
          >
            <Icon type={Icons.EditSquare} size={17} color="#111827" />
            Edit
          </button>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <button
            onClick={() => onDelete()}
            className="text-[#F04438] grid grid-cols-[auto_1fr] items-center gap-3 py-1 w-full text-left cursor-pointer opacity-70 hover:opacity-100 transition-all"
          >
            <Icon type={Icons.TableBin} size={20} color="#F04438" />
            Delete
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
