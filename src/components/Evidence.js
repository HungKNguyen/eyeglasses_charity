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
