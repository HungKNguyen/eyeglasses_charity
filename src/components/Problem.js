import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";
import {Container, createTheme, List, ListItem, Stack, ThemeProvider, Typography} from "@mui/material";
import {Map} from "./Map";


export function Problem() {
    const theme = useContext(ThemeContext);
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
    const description_list = [
        <span><b>Goertz et al. (2014)</b> defines presbyopia as an age-related visual impairment that results from the
            &nbsp;gradual decrease in accommodation expected with age which can affect quality of life</span>,
        <span>Major risk of presbyopia is age however, disease, trauma and medications can affect as well</span>,
        <span>Current treatments includes optical or surgical refractive modification</span>
    ]
    const magnitude_list = [
        <span>The number of affected people globally is 1.8 billion and 826 million people has yet to be treated</span>,
        <span>Ownership of glasses to cure presbyopia in low-income and middle-income countries is 10%</span>,
        <span>WHO states that the number of people with unaddressed near vision impairment is greater than 80% in western, eastern and central sub-Saharan Africa</span>,
    ]
    const effect_list = [
        <span>Presbyopia causes an estimated US $25 billion in global productivity loss</span>,
        <span>Presbyopic patients report up to 22% decrease in quality-of-life (QoL) score, and up to 80% patients with uncorrected presbyopia report difficulty in performing near-vision related tasks</span>,
    ]

    return (
        <Stack spacing={3}>
            <ThemeProvider theme={list_theme}>
                <Typography variant="h4">
                    Problem
                </Typography>
                <Stack direction="row" spacing={2} alignItems="stretch">
                    <Container style={{
                        padding: "2vh 2vw",
                        borderRadius: "10px",
                        border: "3px solid",
                        borderColor: theme.primary
                    }}>
                        <Typography variant="h6">
                            Description
                        </Typography>
                        <List>
                            {description_list.map((text) => (
                                <ListItem key={text}>
                                    {text}
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                    <Container style={{
                        padding: "2vh 2vw",
                        borderRadius: "10px",
                        border: "3px solid",
                        borderColor: theme.secondary
                    }}>
                        <Typography variant="h6">
                            Magnitude
                        </Typography>
                        <List>
                            {magnitude_list.map((text) => (
                                <ListItem key={text}>
                                    {text}
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                    <Container style={{
                        padding: "2vh 2vw",
                        borderRadius: "10px",
                        border: "3px solid",
                        borderColor: theme.primary
                    }}>
                        <Typography variant="h6">
                            Effect
                        </Typography>
                        <List>
                            {effect_list.map((text) => (
                                <ListItem key={text}>
                                    {text}
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                </Stack>
                <Map/>
            </ThemeProvider>
        </Stack>
    )

}
