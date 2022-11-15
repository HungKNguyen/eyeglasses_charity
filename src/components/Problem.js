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
        "Placeholder1",
        "Placeholder2",
        "Placeholder3",
    ]
    const magnitude_list = [
        "Placeholder1",
        "Placeholder2",
        "Placeholder3",
    ]
    const effect_list = [
        "Placeholder1",
        "Placeholder2",
        "Placeholder3",
    ]

    return (
        <>
            <ThemeProvider theme={list_theme}>
                <Typography variant="h4">
                    Problem
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Container style={{
                        padding: "2vh 2vw",
                        borderRadius: "10px",
                        border: "3px solid",
                        borderColor: theme.primary,
                        height: "100%"
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
                        borderColor: theme.secondary,
                        height: "100%"
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
                        borderColor: theme.primary,
                        height: "100%"
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
        </>
    )

}
