import './App.css';
import {TabBar} from "./components/TabBar";
import {useContext} from "react";
import {ThemeContext} from "./theme/theme_context";
import {Grid, Stack} from "@mui/material";
import {Navigator} from "./components/Navigator";
import {Description} from "./components/Description";
import {Overview} from "./components/Overview";
import {Problem} from "./components/Problem";

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
                    <Stack spacing={4}>
                        <Description/>
                        <Overview/>
                        <Problem/>
                        <div/>
                        {/*<Cause/>*/}
                        {/*<Solution/>*/}
                        {/*<Evidence/>*/}
                        {/*<Policy/>*/}
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
