import useScrollTrigger from '@mui/material/useScrollTrigger';
import {AppBar, Slide, Toolbar, Typography} from "@mui/material";
import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";

export function TabBar(props) {
    const theme = useContext(ThemeContext);
    const trigger = useScrollTrigger();
    return (
        <Slide in={!trigger} style={{backgroundColor: theme.primary, color: theme.text_light, padding: "1vh 1vw"}}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Researching Cost-effectiveness of Eyeglasses Distribution Charity
                    </Typography>
                </Toolbar>
            </AppBar>
        </Slide>
    );
}
