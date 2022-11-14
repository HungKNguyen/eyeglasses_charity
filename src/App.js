import './App.css';
import {TabBar} from "./components/TabBar";
import {useContext} from "react";
import {ThemeContext} from "./theme/theme_context";
import {Grid} from "@mui/material";
import {Navigator} from "./components/Navigator";

function App() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{color: theme.text_dark, background: theme.background}}>
            <TabBar title={"Researching Cost-effectiveness of Eyeglasses Distribution Charity"}/>
            <Grid container style={{paddingTop: 100}}>
                <Grid item xs={2}>
                    <Navigator/>
                </Grid>
                <Grid item xs={9} style={{height: 1000}}>
                    Content
                </Grid>
                <Grid item xs={1}>
                    Empty
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
