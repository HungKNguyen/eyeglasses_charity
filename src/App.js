import './App.css';
import {TabBar} from "./components/TabBar";
import {useContext} from "react";
import {ThemeContext} from "./theme/theme_context";
import {Grid, Stack} from "@mui/material";
import {Navigator} from "./components/Navigator";
import {Description} from "./components/Description";
import {Overview} from "./components/Overview";
import {Problem} from "./components/Problem";
import {Cause} from "./components/Cause";
import {Solution} from "./components/Solution";
import {Evidence} from "./components/Evidence";
import {Policy} from "./components/Policy";
import {Reference} from "./components/Reference";

function App() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{color: theme.text_dark, background: theme.background}}>
            <TabBar/>
            <Grid container style={{paddingTop: 100}}>
                <Grid item xs={2}>
                    <Navigator/>
                </Grid>
                <Grid item xs={9}>
                    <Stack spacing={5}>
                        <Description/>
                        <div id="Overview"/>
                        <Overview/>
                        <div id="Problem"/>
                        <Problem/>
                        <div id="Causes"/>
                        <Cause/>
                        <div id="Solutions"/>
                        <Solution/>
                        <div id="Evidence"/>
                        <Evidence/>
                        <div id="Policies"/>
                        <Policy/>
                        <div id="References"/>
                        <Reference/>
                        <div style={{height: 100}}/>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
