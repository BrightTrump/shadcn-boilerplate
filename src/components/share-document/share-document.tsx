import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ShareDocument() {
  return (
    <div className="">
      <Card className="w-[350px] h-fit">
        <CardHeader>
          <CardTitle>Share this document</CardTitle>
          <CardDescription>
            Anyone with the link canview this document.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input type="email" placeholder="https://github.com/shadcn.png" />
            <Button variant="outline">Copy link</Button>
          </div>
          <div className="">
            <h3 className="text-sm py-4">People with access</h3>
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
                <SelectTrigger id="area" className="w-28">
                  <SelectValue placeholder="Can edit" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="billing">Owner</SelectItem>
                  <SelectItem value="basic">Member</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
                <SelectTrigger id="area" className="w-28">
                  <SelectValue placeholder="Can view" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="billing">Owner</SelectItem>
                  <SelectItem value="basic">Member</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
                <SelectTrigger id="area" className="w-28">
                  <SelectValue placeholder="Can view" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="billing">Owner</SelectItem>
                  <SelectItem value="basic">Member</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
