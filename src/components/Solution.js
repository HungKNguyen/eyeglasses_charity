import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia, Container,
    createTheme,
    Link, List, ListItem,
    Stack,
    ThemeProvider,
    Typography
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export function Solution() {
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
    const visionSpring = [
        <span>Dedicates to reduce poverty through the sale of affordable corrective glasses</span>,
        <span>Distributed to 24 countries</span>,
        <span>Partners with ten organizations, NGO’s and institutions to make the first refractive error free district in Bangladesh</span>,
        <span>Distributed to 8.7 million people and made a total of $1.8 billion in economic impact</span>,
    ]
    const sightSavers = [
        <span>Sightsavers works in 30 countries globally, focusing on Africa and Asia</span>,
        <span>They treat multiple eye conditions, including cataracts and refractive error(which include presbyopia)</span>,
        <span>They treat other neglected tropical diseases such as intestinal worms and lymphatic filariasis</span>,
        <span>They also campaign for disability rights</span>
    ]
    return (
        <Stack spacing={3}>
            <Typography variant="h4">
                Solutions
            </Typography>
            <ThemeProvider theme={list_theme}>
                <Card>
                    <Stack direction="row">
                        <CardMedia component="img" image="https://s12982.pcdn.co/wp-content/uploads/2014/03/VisionSpring.logo2_.2021.212x212.jpg"
                                   sx={{ width: 400 }}/>
                        <CardContent style={{width: "100%", padding: "3vh 1vw"}}>
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
                                <Typography variant="h4" style={{color: theme.primary_dark}}>
                                    VisionSpring
                                </Typography>
                                <CardActions>
                                    <Link component="a" underline="hover" variant="h6"
                                          href="https://visionspring.org/"
                                          style={{color: theme.text_gray}}>
                                        Visit their website <OpenInNewIcon/>
                                    </Link>
                                </CardActions>
                            </Stack>
                            <Container style={{
                                color: theme.primary_dark,
                            }}>
                                <List>
                                    {visionSpring.map((text) => (
                                        <ListItem key={text}>
                                            {text}
                                        </ListItem>
                                    ))}
                                </List>
                            </Container>
                        </CardContent>
                    </Stack>
                </Card>
                <Card>
                    <Stack direction="row">
                        <CardMedia component="img" image="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ghirmbcbyfbsunybjzzj"
                                   sx={{ width: 400 }}/>
                        <CardContent style={{width: "100%", padding: "3vh 1vw"}}>
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
                                <Typography variant="h4" style={{color: theme.secondary_dark}}>
                                    Sightsavers
                                </Typography>
                                <CardActions>
                                    <Link component="a" underline="hover" variant="h6"
                                          href="https://www.sightsavers.org/"
                                          style={{color: theme.text_gray}}>
                                        Visit their website <OpenInNewIcon/>
                                    </Link>
                                </CardActions>
                            </Stack>
                            <Container style={{
                                color: theme.secondary_dark,
                            }}>
                                <List>
                                    {sightSavers.map((text) => (
                                        <ListItem key={text}>
                                            {text}
                                        </ListItem>
                                    ))}
                                </List>
                            </Container>
                        </CardContent>
                    </Stack>
                </Card>
            </ThemeProvider>
        </Stack>
    )
}
