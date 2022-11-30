import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";
import {Container, createTheme, List, ListItem, Stack, ThemeProvider, Typography} from "@mui/material";

export function Policy() {
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
    const policy = [
        <span>From the study we gathered, we believe that distributing correction eye glasses to presbyopic workers is a
        &nbsp;cost effective solution. Just the values from increasing quality of life is comparable to GiveDirectly.
        &nbsp;Including the values from increasing income, we are looking at a program which can be 8x times as effective as
        &nbsp;GiveDirectly.</span>,
        <span>From our research, we believe that there is a large gap for additional funding. Using crude estimate,
        &nbsp;addressing uncorrected presbyopia in regions with low income and high proportion of uncorrected presbyopia
        &nbsp;would cost nearly 4 billion for 400 million individuals. To compare, in 2021, Visionspring only distributed
        &nbsp;1.1 million corrective pairs of glasses.</span>,
        <span>For government agencies and organizations, we recommend prioritizing corrective glasses distribution over
        &nbsp;other vision programs as well as focusing on regions with high rate of uncorrected presbyopia. For local governments,
        &nbsp;we recommend increasing eye care capacity, awareness of presbyopia, as well as fully funding or subsidizing
        &nbsp;corrective glasses.</span>,
        <span>For donors, we recommend donating to Visionspring, for a few reasons. Firstly, Visionspring focuses on
        &nbsp;distributing corrective glasses over other vision programs. Secondly, Visionspring put importance in the cost-effectiveness
        &nbsp;of its programs - also citing Reddy et al (2018). Thirdly, we believe Visionspring can use more donation to scale up their program</span>,
    ]
    return (
        <ThemeProvider theme={list_theme}>
            <Stack spacing={3}>
                <Typography variant="h4">
                    Policy Recommendation
                </Typography>
                <Container>
                    <List>
                        {policy.map((text) => (
                            <ListItem key={text}>
                                {text}
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Stack>
        </ThemeProvider>
    )
}
