import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Bell, AtSign, BellOff } from "lucide-react";

export function Notification() {
  return (
    <div className="">
      <Card className="w-[350px] h-fit">
        <CardHeader>
          <CardTitle>Notification</CardTitle>
          <CardDescription>
            Choose what you want to be notified about.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 pb-2">
            <Bell className="w-6 h-6 text-gray-700" />
            <div className="space-y-0.2">
              <h3 className="text-sm">Everything</h3>
              <p className="text-gray-400 text-sm">
                Email digest, mentions and all activity.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 pb-2">
            <AtSign className="w-6 h-6 text-gray-700" />
            <div className="space-y-0.2">
              <h3 className="text-sm">Available</h3>
              <p className="text-gray-400 text-sm">
                Only mentions and comments.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pb-2">
            <BellOff className="w-6 h-6 text-gray-700" />
            <div className="space-y-0.2">
              <h3 className="text-sm">Ignoring</h3>
              <p className="text-gray-400 text-sm">
                Turn off all notifications.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
