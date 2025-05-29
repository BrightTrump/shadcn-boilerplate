"use client";
import React, { useState } from "react";
import {
  Button,
  ButtonVariants,
  Icon,
  Icons,
  Input,
  Inputs,
  Modal,
  ModalHeader,
} from "@/ui";

export default function RequestForm() {
  const [isModal, setIsModal] = useState(false);

  const handleToggle = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="  text-primary border-b border-primary"
      >
        Request Form
      </button>

      {/* Modal */}
      <Modal isModal={isModal}>
        <div className="grid grid-rows-[auto_1fr] overflow-hidden">
          <ModalHeader
            title="Delete my account/Data "
            closeModal={handleToggle}
          />

          <form className="w-full grid grid-rows-[1fr_auto] h-full gap-5 p-5 pr-0 overflow-hidden">
            {/* Inputs */}
            <div className="grid content-start overflow-y-auto custom-scroll-bar pr-5">
              <div className="grid gap-5">
                <Input
                  type={Inputs.Text}
                  label="FullName"
                  id="fullname"
                  name="fullname"
                  required
                />

                <Input
                  type={Inputs.Email}
                  label="Email Address"
                  id="email"
                  name="email"
                />

                <Input
                  type={Inputs.Number}
                  label="Phone Number"
                  id="tel"
                  name="tel"
                />

                <Input
                  type={Inputs.Select}
                  label="Reason for deletion"
                  placeholder="Select your preferred reason"
                  name="select"
                  isSearch
                />
              </div>

              <div className="grid gap-5">
                <div className="grid gap-3 items-center text-sm pt-5">
                  <h3>Data Deletion Scope</h3>
                  <div className="grid gap-2 pl-2.5">
                    <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                      <div className="bg-primary rounded-sm">
                        <Icon type={Icons.Check} size={16} color="#FFFFFF" />
                      </div>
                      <p>Delete all data and close my account permanently.</p>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                      <div className="w-4 h-4 bg-white border-2 border-[#555555] rounded-sm">
                        {/* <Icon type={Icons.Check} size={16} color="#FFFFFF" /> */}
                      </div>
                      <p>Anonymize my data but keep account access</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                  <div className="bg-primary rounded-sm">
                    <Icon type={Icons.Check} size={16} color="#FFFFFF" />
                  </div>
                  <p className="text-xs">
                    I confirm that I am the account owner and this request is
                    made in accordance with Entobo's privacy policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="grid grid-flow-col gap-2.5 place-items-end ml-auto">
              <Button
                type="submit"
                variant={ButtonVariants.PrimaryOutlined}
                className="w-full mr-5"
              >
                <span className="text-black">Cancel</span>
              </Button>
              <Button
                type="submit"
                variant={ButtonVariants.PrimaryFilled}
                className="w-full mr-5"
              >
                Download Data
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
