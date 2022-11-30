import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";
import {
    Container,
    createTheme, Link,
    Step,
    StepLabel,
    Stepper,
    ThemeProvider
} from "@mui/material";

export function Navigator({activeStep}){
    const steps = ["Overview", "Problem", "Causes", "Solutions", "Evidence", "Policies", "References"]
    const theme = useContext(ThemeContext);
    const step_theme = createTheme({
        components: {
            MuiStepIcon: {
                styleOverrides: {
                    root: {
                        "&.Mui-active": {
                            color: theme.secondary
                        },
                        "&.Mui-completed": {
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
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step}>
                            <Link href={`#${step}`} underline="none" color="inherit">
                                <StepLabel>{step}</StepLabel>
                            </Link>
                        </Step>
                    ))}
                </Stepper>
            </ThemeProvider>
        </Container>

    )
}

Navigator.defaultProps = {
    activeStep: 0,
}
