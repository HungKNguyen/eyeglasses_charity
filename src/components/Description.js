import {Stack, Typography} from "@mui/material";

export function Description() {
    return (
        <Stack spacing={2}>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="caption" component="em">
                Hung Nguyen, Riko Ogihara - Nov-17
            </Typography>
        </Stack>
    )
}
