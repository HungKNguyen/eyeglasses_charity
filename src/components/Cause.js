import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";
import {Container, createTheme, List, ListItem, Stack, ThemeProvider, Typography} from "@mui/material";

export function Cause() {
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
    const causes = [
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
                    Causes
                </Typography>
                <Container>
                    <List>
                        {causes.map((text) => (
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
