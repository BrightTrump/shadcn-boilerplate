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
import { CreditCard } from "lucide-react";
import { FaPaypal, FaApple } from "react-icons/fa";

export default function PaymentMethod() {
  return (
    <div className="">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Payment method</CardTitle>
          <CardDescription className="pb-4">
            Add a new payment method to your account.
          </CardDescription>
          <div className="flex justify-between">
            <div className="grid place-items-center h-fit w-[25%] border-2 border-green-800 rounded-xl p-2">
              <CreditCard className="w-6 h-6" />
              <p className="text-center text-xs pt-2">Card</p>
            </div>
            <div className="grid place-items-center h-fit w-[25%] border-2 rounded-xl p-2">
              <FaPaypal className="w-6 h-6 text-gray-700" />
              <p className="text-center">Paypal</p>
            </div>
            <div className="grid place-items-center h-fit w-[25%] border-2 rounded-xl p-2">
              <FaApple className="w-6 h-6" />
              <p className="text-center text-center text-xs pt-2">Apple</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Name</Label>

                <div className="flex ">
                  <Input id="email" placeholder="First Last"></Input>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Card number</Label>
                <Input id="num" placeholder="" />
              </div>
            </div>

            <div className="flex justify-between pt-4 w-full">
              {/* Select month */}
              <div className="flex flex-col space-y-1.5 w-[30%]">
                <Label htmlFor="expires">Expires</Label>
                <Select>
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="january">January</SelectItem>
                    <SelectItem value="february">February</SelectItem>
                    <SelectItem value="march">March</SelectItem>
                    <SelectItem value="april">April</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Select year*/}
              <div className="flex flex-col space-y-1.5 w-[30%]">
                <Label htmlFor="year">Year</Label>
                <Select>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* CVC*/}
              <div className="flex flex-col space-y-1.5 w-[30%]">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="num" placeholder="CVC"></Input>
              </div>
            </div>
          </form>
        </CardContent>

        {/* Footer Buttons */}
        <CardFooter className="flex justify-between pt-2">
          <Button variant="roundedPrimary" className="w-full">
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
