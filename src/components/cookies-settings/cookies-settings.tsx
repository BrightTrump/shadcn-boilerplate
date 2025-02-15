import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Switch } from "@/components/ui/switch";

export function CookiesSettings() {
  return (
    <div className="">
      <Card className="w-[350px] h-fit">
        <CardHeader>
          <CardTitle>Cookies Settings</CardTitle>
          <CardDescription>Manage your cookies settings here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between pb-2">
            <div>
              <h3 className="text-sm">Strictly Neccessary</h3>
              <p className="text-gray-400 text-sm">
                These cookies are essential inorder to utilize the website and
                use its features.
              </p>
            </div>

            <Switch id="airplane-mode" />
          </div>

          <div className="flex items-center justify-between pb-2">
            <div>
              <h3 className="text-sm">Functional Cookies</h3>
              <p className="text-gray-400 text-sm">
                These cookies allows the website to provide personalized
                functionality.
              </p>
            </div>

            <Switch id="airplane-mode" />
          </div>

          <div className="flex items-center justify-between pb-2">
            <div>
              <h3 className="text-sm">Performance Cookies</h3>
              <p className="text-gray-400 text-sm">
                These cookies helps to improve the performance of the website.
              </p>
            </div>

            <Switch id="airplane-mode" />
          </div>
        </CardContent>
        {/* Footer Buttons */}
        <CardFooter className="flex justify-between pt-2">
          <Button variant="outline" className="w-full">
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
