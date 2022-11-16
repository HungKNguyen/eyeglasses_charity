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
        {title: "Title1", src:"#"},
        {title: "Title2", src:"#"},
        {title: "Title3", src:"#"},
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
