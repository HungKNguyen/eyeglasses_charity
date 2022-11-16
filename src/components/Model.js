import {useContext, useEffect, useState} from "react";
import {Box, Card, CardContent, CardHeader, Slider, Stack, Tooltip, Typography} from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {ThemeContext} from "../theme/theme_context";

export function Model() {
    const theme = useContext(ThemeContext)
    const [W_I, setWI] = useState(70);
    const [W_E, setWE] = useState(60);
    const [W_P, setWP] = useState(100);
    // Input constants
    const cost = 10.2
    const G_LNI = 0.19
    const G_DALYs = 0.013
    const years = 2
    const U_LNI = 1.44
    const U_DALYs = 2.3
    const U_GiveDirectly = 344
    // Intermediate values
    let G_LNI_PER_D
    let G_DALYs_PER_D
    let T_U_LNI
    let T_U_DALYs
    let T_U_Total
    // Output values
    const [O_U_LNI, setO_U_LNI] = useState(0)
    const [O_U_DALYs, setO_U_DALYs] = useState(0)
    const [O_U_Total, setO_U_Total] = useState(0)
    const [O_X_LNI, setO_X_LNI] = useState(0)
    const [O_X_DALYs, setO_X_DALYs] = useState(0)
    const [O_X_Total, setO_X_Total] = useState(0)

    useEffect(() => {
        G_LNI_PER_D = ((G_LNI*years)/cost)*(W_I/100)*(W_E/100)*(W_P/100)
        G_DALYs_PER_D = (G_DALYs*years)/cost
        T_U_LNI = U_LNI*G_LNI_PER_D*100000
        setO_U_LNI(T_U_LNI)
        T_U_DALYs = U_DALYs*G_DALYs_PER_D*100000
        setO_U_DALYs(T_U_DALYs)
        T_U_Total = T_U_LNI + T_U_DALYs
        setO_U_Total(T_U_Total)
        setO_X_LNI(T_U_LNI/U_GiveDirectly)
        setO_X_DALYs(T_U_DALYs/U_GiveDirectly)
        setO_X_Total(T_U_Total/U_GiveDirectly)
    }, [W_I, W_E, W_P])

    function getColor(v) {
        return v >= 5 ? theme.great :
            v >= 2 ? theme.good :
            v >= 1 ? theme.okay :
                theme.bad
    }

    const marks100 = [
        {
            value: 0,
            label: '0%',
        },
        {
            value: 25,
            label: '25%',
        },
        {
            value: 50,
            label: '50%',
        },
        {
            value: 75,
            label: '75%',
        },
        {
            value: 100,
            label: '100%',
        },
    ]
    const marks200 = [
        {
            value: 0,
            label: '0%',
        },
        {
            value: 50,
            label: '50%',
        },
        {
            value: 100,
            label: '100%',
        },
        {
            value: 150,
            label: '150%',
        },
        {
            value: 200,
            label: '200%',
        },
    ];
    return (
        <Card>
            <CardHeader title={
                <Stack direction="row" alignItems="center">Cost-Effective Model&nbsp;
                    <Tooltip title={<Typography>
                        This cost effective model is adapted from GiveWell using data from Reddy et al. 2018.
                        &nbsp;For more details, check the references for GiveWell full model.
                    </Typography>}><HelpOutlineIcon/></Tooltip></Stack>
            } subheader={
                <Typography variant="caption">Based on Give Well's model and Reddy et al. (2018)</Typography>
            }/>
            <CardContent>
                <Typography variant="h6">
                    Weights
                </Typography>
                <Box style={{marginRight: "1vw", marginLeft: "1vw"}}>
                    <Stack direction="row" alignItems="center" style={{marginBottom: "2vh", marginTop: "2vh"}}>
                        Internal Validity&nbsp;
                        <Tooltip title={<Typography>
                            This weight indicate how close existing evidence to estimating the true effect.
                            &nbsp;Better quality and quantities of evidence will leads to a higher weight.
                            &nbsp;Values greater than 100% indicate the possibility of exising evidence underestimating the true effect.
                            &nbsp;GiveWell give this a weight of 70%, reflecting one quality RCT research, but no other significant evidence.
                        </Typography>}><HelpOutlineIcon fontSize="small"/></Tooltip>
                    </Stack>
                    <Slider
                        aria-label="Internal Validity"
                        defaultValue={W_I}
                        valueLabelDisplay="auto"
                        step={5}
                        min={0}
                        max={200}
                        marks={marks200}
                        onChange={(e,v) => setWI(v)}
                    />
                    <Stack direction="row" alignItems="center" style={{marginBottom: "2vh", marginTop: "2vh"}}>
                        External Validity&nbsp;
                        <Tooltip title={<Typography>
                            This weight indicate how much does the income effect generalize to the whole population.
                            &nbsp;Values below 100% indicate the effect will not be as great for the general population.
                            &nbsp;Values above 100% indicate the effect will be greater for the general population.
                            &nbsp;GiveWell give this a weight of 60%, referencing Glewwe and Schaffner (2014)'s ambiguous results
                            &nbsp;as a weak evidence for loss of generality.
                        </Typography>}>
                            <HelpOutlineIcon fontSize="small"/>
                        </Tooltip>
                    </Stack>
                    <Slider
                        aria-label="External Validity"
                        defaultValue={W_E}
                        valueLabelDisplay="auto"
                        step={5}
                        min={0}
                        max={200}
                        color="success"
                        marks={marks200}
                        onChange={(e,v) => setWE(v)}
                    />
                    <Stack direction="row" alignItems="center" style={{marginBottom: "2vh", marginTop: "2vh"}}>
                        Productivity Gains Retention&nbsp;
                        <Tooltip title={<Typography>
                            This weight indicate what proportion of productivity gains will go to the workers'
                            &nbsp;income(rather than local officials, employers). GiveWell's model assumes this to be 100%.
                        </Typography>}><HelpOutlineIcon fontSize="small"/></Tooltip>
                    </Stack>
                    <Slider
                        aria-label="Productivity Gains Retention"
                        defaultValue={W_P}
                        valueLabelDisplay="auto"
                        step={2.5}
                        min={0}
                        max={100}
                        marks={marks100}
                        onChange={(e,v) => setWP(v)}
                    />
                </Box>
            </CardContent>
            <CardContent>
                <Typography variant="h6">
                    Result
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography>
                        Utility gains from income per $100,000:
                    </Typography>
                    <Typography>
                        <b>{O_U_LNI.toLocaleString()}</b>
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-end">
                    <Typography>
                        (<Typography component="span" style={{color: getColor(O_X_LNI)}}>
                        <b>{O_X_LNI.toLocaleString("en-US", {style: "percent", minimumFractionDigits:2})}</b>
                    </Typography>
                        &nbsp;as effective as GiveDirectly)
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography>
                        Utility gains from DALYs per $100,000:
                    </Typography>
                    <Typography>
                        <b>{O_U_DALYs.toLocaleString()}</b>
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-end">
                    <Typography>
                        (<Typography component="span" style={{color: getColor(O_X_DALYs)}}>
                            <b>{O_X_DALYs.toLocaleString("en-US", {style: "percent", minimumFractionDigits:2})}</b>
                        </Typography>
                        &nbsp;as effective as GiveDirectly)
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography>
                        Total utility gains per $100,000:
                    </Typography>
                    <Typography>
                        <b>{O_U_Total.toLocaleString()}</b>
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-end">
                    <Typography>
                        (<Typography component="span" style={{color: getColor(O_X_Total)}}>
                            <b>{O_X_Total.toLocaleString("en-US", {style: "percent", minimumFractionDigits:2})}</b>
                        </Typography>
                        &nbsp;as effective as GiveDirectly)
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
