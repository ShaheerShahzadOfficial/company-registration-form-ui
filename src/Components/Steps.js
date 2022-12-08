import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
const Steps = () => {
  const steps = [
    "LEGAL ENTITYS",
    "SIGNATORY",
    "PRIMARY CONTACT",
    "TYPE 1",
    "TYPE 2",
    "ISO 27001",
    "PCI",
    "PROFILE",
    "CONFIRMATION"
  ];

  return (
    <Box sx={{ width: "94%", color: "white",flexWrap:"wrap",margin:"auto" }}>
      <Stepper
        activeStep={0}
        alternativeLabel
        sx={{ flexWrap: "wrap", color: "white" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ color: "white" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Steps;
