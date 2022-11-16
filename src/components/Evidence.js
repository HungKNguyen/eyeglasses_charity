import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";
import {
    Container,
    createTheme, Grid,
    List,
    ListItem,
    Stack,
    ThemeProvider,
    Typography
} from "@mui/material";
import {Model} from "./Model";

export function Evidence() {
    const theme = useContext(ThemeContext)
    const list_theme = createTheme({
        components: {
            MuiList: {
                styleOverrides: {
                    root: {
                        listStyleType: "disc"
                    }
                }
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        display: "list-item"
                    }
                }
            }
        }
    })
    const evidence = [
        <span>There are few but quality evidence to support distributing eyeglasses as an effective program.
        &nbsp;This includes two randomized controlled trials, <b>Glewwe and Schaffner (2014)</b> and <b>Reddy et al. (2018)</b>.</span>,
        <span><b>Glewwe and Schaffner (2014)</b> focused on Rwandan women and their productivity in weaving baskets, earrings,
        &nbsp;other handicraft objects. They measured productivity by various metrics, including number of product per 8 hours,
        &nbsp;percentage of good quality products, and average value created per minute.</span>,
        <span>However, due to a limited sample size (N=239) and research design issues that leads to lack of motivation from
        &nbsp;participant, <b>Glewwe and Schaffner (2014)</b> was only able to show a productivity difference between presbyopic women
        &nbsp;without glasses and non-presbyopic women (40% lower).</span>,
        <span><b>Reddy et al. (2018)</b> focuses on tea picker aged 40 years or older in India with uncorrected presbyopia.
        &nbsp;They measured productivity increase by the weight of tea picked</span>,
        <span>The study managed to find strong evidence for an increase in productivity by providing correction glasses.
        On average providing correction glasses will lead to an increase of 20% in productivity for the tea pickers, and the effect is
        &nbsp;stronger for older age groups.</span>,
        <span>In addition, 98.3% of the participant finds the glasses useful. Follow-up survey reveals that participants willing to pay
        &nbsp;from $5.57 to $6.64 for a replacement glasses if needed. This amount is below the cost of $10.20 per person
        &nbsp;(making and delivering glasses) suggesting a gap for donations.</span>
    ]

    return (
        <ThemeProvider theme={list_theme}>
            <Stack spacing={2}>
                <Typography variant="h4">
                    Evidence
                </Typography>
                <Grid container>
                    <Grid item xs={7}>
                        <Container>
                            <List>
                                {evidence.map((text) => (
                                    <ListItem key={text}>
                                        {text}
                                    </ListItem>
                                ))}
                            </List>
                        </Container>
                    </Grid>
                    <Grid item xs={5}>
                       <Model/>
                    </Grid>
                </Grid>
            </Stack>
        </ThemeProvider>
    )
}
