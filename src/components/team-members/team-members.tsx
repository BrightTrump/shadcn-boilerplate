import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TeamMembers() {
  return (
    <div className="">
      <Card className="w-[350px] h-fit">
        <CardHeader>
          <CardTitle>Team members</CardTitle>
          <CardDescription>
            Invite your team members to collaborate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="space-y-0.2">
                <h3 className="text-sm">Sophia Davis</h3>
                <p className="text-gray-400 text-sm">m@example.com</p>
              </div>
            </div>

            <Select>
              <SelectTrigger id="area" className="w-24">
                <SelectValue placeholder="Owner" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="billing">Owner</SelectItem>
                <SelectItem value="basic">Member</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="space-y-0.2">
              <h3 className="text-sm">Sophia Davis</h3>
              <p className="text-gray-400 text-sm">m@example.com</p>
            </div>

            <Select>
              <SelectTrigger id="area" className="">
                <SelectValue placeholder="Member" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="billing">Member</SelectItem>
                <SelectItem value="basic">Owner</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
