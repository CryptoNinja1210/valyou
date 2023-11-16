import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Expression Of Interest",
  "Up and Coming",
  "Professional Artist",
  "Independent Major",
  "Signed Major Artist",
];

const IPOProgress = () => {
  return (
    <div className="background-shadow border rounded-lg p-3">
      <h2 className="text-1xl lg:text-2xl">
        <b>
          Music Artist Brand from Pre-IPO Primary Market to IPO Secondary Market
          progress chart
        </b>
      </h2>
      <div className="lg:hidden flex justify-center items-center p-10">
        <>
          <Stepper activeStep={1} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    style: {
                      color:
                        index === 1
                          ? "#00FF00"
                          : index > 1
                          ? "gray"
                          : "#ff0093",
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </>
      </div>
      <div className="hidden lg:flex justify-center items-center p-24">
        <>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    style: {
                      color:
                        index === 1
                          ? "#00FF00"
                          : index > 1
                          ? "gray"
                          : "#ff0093",
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </>
      </div>
    </div>
  );
};

export default IPOProgress;
