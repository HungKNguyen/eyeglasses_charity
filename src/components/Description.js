import {Stack, Typography} from "@mui/material";

export function Description() {
    return (
        <Stack spacing={2}>
            <Typography variant="body2">
                In the world of effective altruism, we are not only interested in doing the right thing
                &nbsp;but also to do the most with our donations. In this article, we are interested in assessing the cost-
                effectiveness of charities focusing on giving glasses to low-wage workers to increase productivity and
                &nbsp;quality of life. We are confident that this charity cause is highly effective and there exist organizations
                &nbsp;doing these programs that can benefit from more donations.
            </Typography>
            <Typography variant="caption" component="em">
                Hung Nguyen, Riko Ogihara - Nov 17
            </Typography>
        </Stack>
    )
}
