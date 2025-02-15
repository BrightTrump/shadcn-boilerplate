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
import { Star, Circle } from "lucide-react";

export function ShadcnUi() {
  return (
    <div className="">
      <Card className="w-[350px]">
        <div className="grid grid-cols-[225px_auto] items-center">
          <CardHeader>
            <CardTitle>Shadcn/ui</CardTitle>
            <CardDescription>
              Beautifully designed components built with Radix UI and Tailwind
              CSS.
            </CardDescription>
          </CardHeader>
          <div className="flex flex-col space-y-1.5 w-24 bg-blue-50 rounded-2xl">
            {/* <Label htmlFor="area">Area</Label> */}
            <Select>
              <SelectTrigger id="star">
                <Star className="w-4 h-4" />
                <SelectValue placeholder="Star" />
              </SelectTrigger>
              <SelectContent position="popper" className="w-4">
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <CardContent className="grid grid-cols-[auto_auto_auto] gap-2">
          <div className="flex gap-1 items-center">
            <Circle className="w-3 h-3 text-blue-700 fill-blue-700 " />
            <p>TypeScript</p>
          </div>
          <div className="flex gap-1 items-center">
            <Star className="w-3 h-3" />
            <p>10K</p>
          </div>
          <div>
            <p>Updated April 2024</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
