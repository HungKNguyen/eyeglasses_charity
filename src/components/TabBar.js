import useScrollTrigger from '@mui/material/useScrollTrigger';
import {AppBar, Button, createTheme, Slide, Toolbar, Typography} from "@mui/material";
import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";
import {ThemeProvider} from "@mui/material";
import Paper from "../resources/paper.pdf";

export function TabBar() {
    const theme = useContext(ThemeContext);
    const trigger = useScrollTrigger();
    const btn_theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        "&.MuiButton-outlined": {
                            color: theme.text_light,
                            borderColor: theme.text_light
                        },
                        "&:hover": {
                            backgroundColor: theme.text_light + '19'
                        }
                    }
                }
            }
        }
    })
    return (
        <Slide in={!trigger} style={{backgroundColor: theme.primary, color: theme.text_light, padding: "1vh 1vw"}}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Researching Cost-effectiveness of Eyeglasses Distribution Charity
                    </Typography>
                    <ThemeProvider theme={btn_theme}>
                        <Button variant="outlined" size="large" component="a" href={Paper}>Full PDF Paper</Button>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
        </Slide>
    );
}
