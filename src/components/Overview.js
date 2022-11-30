import {Box, createTheme, List, ListItem, Stack, ThemeProvider, Typography} from "@mui/material";
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
        <span>Presbyopia is a near vision impairment from increasing in age. Globally, there is 1.8 billion people
            &nbsp;affected and 826 million people has yet to be addressed. This causes an estimated US $25 billion in global
            &nbsp;productivity loss</span>,
        <span>The market has a lack of proficient ophthalmic support personnel especially in developing countries as
            &nbsp;some governments fail to provide the appropriate eye care services and funding. The market fails to
            &nbsp;provide glasses at affordable price points due to high transportation costs and people in poverty both
            &nbsp;lack knowledge of proper eye care and hold bias against seeking it</span>,
        <span>Evidence from research show that distributing corrective glasses can produce a 20% productivity increase
            &nbsp;while remain low-cost, thus making it a cost-effective charitable program (8x time as effective as
            &nbsp;GiveDirectly)</span>,
        <span>We recommend donating to Visionspring, given their strong emphasis in cost-effectiveness, focus on
            &nbsp;distributing corrective glasses, and potential to utilize further funding</span>,
    ]
    return (
        <ThemeProvider theme={list_theme}>
            <Stack spacing={3}>
                <Typography variant="h4">
                    Overview
                </Typography>
                <Box style={{
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
                </Box>
            </Stack>
        </ThemeProvider>
    )
}
