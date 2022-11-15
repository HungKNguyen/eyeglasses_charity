import {Container, createTheme, List, ListItem, Stack, ThemeProvider, Typography} from "@mui/material";
import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";

export function Overview() {
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
    const overviews = [
        "Placeholder1",
        "Placeholder2",
        "Placeholder3",
        "Placeholder4",
        "Placeholder5",
    ]
    return (
        <ThemeProvider theme={list_theme}>
            <Stack spacing={2}>
                <Typography variant="h4">
                    Overview
                </Typography>
                <Container style={{
                    padding: "2vh 2vw",
                    backgroundColor: theme.background_highlight,
                    color: theme.primary_dark,
                    borderRadius: "10px",
                }}>
                    <List>
                        {overviews.map((text) => (
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
