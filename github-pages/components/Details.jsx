import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import profile from "../data/profile";

function Details() {
  return (
    <Stack p={2} sx={{ background: "white" }}>
      <Typography variant="h6" component="h1" sx={{ fontWeight: 500 }}>
        What I Do
      </Typography>
      <Typography variant="body2" component="h3" color="text.secondary" pt={1}>
        {profile.header.description}
      </Typography>
    </Stack>
  );
}

export default Details;
