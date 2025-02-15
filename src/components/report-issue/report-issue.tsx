import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Textarea } from "@/components/ui/textarea";

export function ReportIssue() {
  return (
    <div className="">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Report an issue</CardTitle>
          <CardDescription>
            What area are you having problems with?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex justify-between">
                {/* Area Select */}
                <div className="flex flex-col space-y-1.5 w-36">
                  <Label htmlFor="area">Area</Label>
                  <Select>
                    <SelectTrigger id="area">
                      <SelectValue placeholder="Select an area" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Security Level Select */}
                <div className="flex flex-col space-y-1.5 w-36">
                  <Label htmlFor="securityLevel">Security Level</Label>
                  <Select>
                    <SelectTrigger id="securityLevel">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="severity-1">Severity 1</SelectItem>
                      <SelectItem value="severity-2">Severity 2</SelectItem>
                      <SelectItem value="severity-3">Severity 3</SelectItem>
                      <SelectItem value="severity-4">Severity 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter subject" />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Please, include all the information relevant to your issue." />
              </div>
            </div>
          </form>
        </CardContent>

        {/* Footer Buttons */}
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button variant="roundedPrimary">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
