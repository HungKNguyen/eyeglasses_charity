import {useContext} from "react";
import {ThemeContext} from "../theme/theme_context";
import {
    Link,
    Paper,
    Stack,
    Table, TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import styled from "@emotion/styled";

export function Reference() {
    const theme = useContext(ThemeContext)
    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.primary,
            color: theme.text_light,
            fontWeight: "bold",
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(() => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.background_highlight,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const rows = [
        {title: "Fricke et al. 2018",
            src:"https://www.sciencedirect.com/science/article/pii/S0161642017337971?via%3Dihub"},
        {title: "Glewwe and Schaffner, 2014",
            src:"https://www.semanticscholar.org/paper/The-Impact-of-the-Provision-of-Near-Vision-Glasses-Glewwe/829837ada46fa994fca9dbe490e2266e052a6b45?p2df"},
        {title: "Goertz et al. 2014",
            src:"https://pubmed.ncbi.nlm.nih.gov/24910300/"},
        {title: "Reddy et al. 2018",
            src:"https://www.thelancet.com/action/showPdf?pii=S2214-109X%2818%2930329-2"},
        {title: "Visionspring website",
            src:"https://visionspring.org/"},
        {title: "Sightsavers website",
            src:"https://www.sightsavers.org/"},
        {title: "GiveWell: Distribution of Eyeglasses in Developing Countries",
            src:"https://www.givewell.org/international/technical/programs/eyeglasses#How_cost-effective_is_the_program"},
        {title: "GiveWell: Eyeglasses to Improve Workers' Manual Dexterity",
            src:"https://www.givewell.org/international/technical/programs/eyeglasses-workers-manual-dexterity#How_cost-effective_is_the_program"},
        {title: "GiveWell: Cost Effectiveness Model",
            src:"https://docs.google.com/spreadsheets/d/1Fvh9pKEOZk5cWspKsCaqppEGw1zMIAU8ntOLwlT5YuQ/edit#gid=0"},
        {title: "WHO: Blindness and vision impairment - Fact Sheet",
            src:"https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment"},
        {title: "WHO: World Report on Vision",
            src:"https://www.who.int/publications/i/item/9789241516570"},
    ];

    return (
        <Stack spacing={2}>
            <Typography variant="h4">
                References
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Documents</StyledTableCell>
                            <StyledTableCell align="right">Source</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.title}>
                                <StyledTableCell component="th" scope="row">
                                    {row.title}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Link component="a" href={row.src} underline="hover">Link</Link>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}
