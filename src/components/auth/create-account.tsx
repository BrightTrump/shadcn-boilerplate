import React from "react";
import Image from "next/image";
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
} from "@/components/ui";
import { Mail, Github } from "lucide-react";

export default function CreateAccount() {
  return (
    <div className="">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription className="pb-4">
            Enter your email below to create your account
          </CardDescription>
          <div className="flex justify-between">
            <div>
              <Button variant="outline">
                <Github className="w-5 h-5" />
                Github
              </Button>
            </div>
            <div>
              <Button variant="outline">
                <Image
                  src={"/google.jpg"}
                  width={25}
                  height={25}
                  alt="Empty State Illustration"
                />
                Google
              </Button>
            </div>
          </div>
          <div>
            {/* <Separator orientation="horizontal" /> */}
            <p className="text-sm text-center pt-4">OR CONTINUE WITH</p>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>

                <div className="flex relative items-center">
                  <Mail className="w-3 h-3 text-black absolute top-3 left-2" />
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    className="pl-6"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="pwd" placeholder="" />
              </div>
            </div>
          </form>
        </CardContent>

        {/* Footer Buttons */}
        <CardFooter className="flex justify-between pt-2">
          <Button variant="roundedPrimary" className="w-full">
            Create account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
