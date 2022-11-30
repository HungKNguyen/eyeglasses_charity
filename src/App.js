import './App.css';
import {TabBar} from "./components/TabBar";
import {useContext, useState} from "react";
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
import {NavigatorObserver} from "./components/NavigatorObserver";

function App() {
    const theme = useContext(ThemeContext);
    const [activeStep, setActiveStep] = useState(0);

    function onStep(index) {
        if (index > activeStep) {
            setActiveStep(index)
        }
    }

    return (
        <div style={{color: theme.text_dark, background: theme.background}}>
            <TabBar/>
            <Grid container style={{paddingTop: 100}}>
                <Grid item xs={2}>
                    <Navigator activeStep={activeStep}/>
                </Grid>
                <Grid item xs={9}>
                    <Stack spacing={6}>
                        <Description/>
                        <NavigatorObserver id="Overview" onSeen={() => onStep(0)}>
                            <Overview/>
                        </NavigatorObserver>
                        <NavigatorObserver id="Problem" onSeen={() => onStep(1)}>
                            <Problem/>
                        </NavigatorObserver>
                        <NavigatorObserver id="Causes" onSeen={() => onStep(2)}>
                            <Cause/>
                        </NavigatorObserver>
                        <NavigatorObserver id="Solutions" onSeen={() => onStep(3)}>
                            <Solution/>
                        </NavigatorObserver>
                        <NavigatorObserver id="Evidence" onSeen={() => onStep(4)}>
                            <Evidence/>
                        </NavigatorObserver>
                        <NavigatorObserver id="Policies" onSeen={() => onStep(5)}>
                            <Policy/>
                        </NavigatorObserver>
                        <NavigatorObserver id="References" onSeen={() => onStep(6)}>
                            <Reference/>
                        </NavigatorObserver>
                        <div style={{height: 100}}/>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
