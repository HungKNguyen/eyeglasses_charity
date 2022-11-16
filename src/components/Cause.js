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
        <span>The Market lacks sufficiently trained ophthalmic support personnel such as assistants and technicians in developing countries</span>,
        <span>Governments are partially responsible from the lack of willingness and funding to provide primary eye care services in rural areas</span>,
        <span>The Market fails to deliver glasses to rural areas at a good cost since the total indirect cost of acquiring eyeglasses is significantly more than eyeglasses themselves</span>,
        <span>Poor people lack knowledge and has cultural biases about eyeglasses and does not know that affordable products exist to help their vision</span>,
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
