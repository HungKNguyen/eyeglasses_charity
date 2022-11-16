import {useContext, useState} from "react";
import {ThemeContext} from "../theme/theme_context";
import {
    Container,
    createTheme, Link,
    Step,
    StepLabel,
    Stepper,
    ThemeProvider
} from "@mui/material";

export function Navigator(){
    const steps = ["Overview", "Problem", "Causes", "Solutions", "Evidence", "Policies", "References"]
    const [activeStep, setActiveStep] = useState(0);
    const theme = useContext(ThemeContext);
    const step_theme = createTheme({
        components: {
            MuiStepIcon: {
                styleOverrides: {
                    root: {
                        "&.Mui-active": {
                            color: theme.secondary
                        }
                    }
                }
            },
            MuiStepConnector: {
                styleOverrides: {
                    line: {
                        height: "5vh"
                    }
                }
            }
        }
    })
    return (
        <Container style={{position : "fixed", bottom: "5vh"}}>
            <ThemeProvider theme={step_theme}>
                <Stepper activeStep={activeStep} nonLinear orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step} onClick={() => setActiveStep(index)}>
                            <StepLabel>
                                <Link href={`#${step}`} underline="none" color="inherit">{step}</Link>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </ThemeProvider>
        </Container>

    )
}
