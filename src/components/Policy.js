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
