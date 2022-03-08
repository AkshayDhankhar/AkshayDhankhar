import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import profile from "../data/profile";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        background: "white",
        mb: 0.5,
      }}
    >
      <Stack sx={{ pr: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 500 }}>
          {profile.header.name}
        </Typography>
        <Typography variant="body2" component="h2" color="text.secondary">
          {profile.header.title}
        </Typography>

        {/* <Typography
          variant="body2"
          component="h3"
          color="text.secondary"
          pt={2}
        >
          {profile.header.description}

        </Typography> */}
      </Stack>
      {/* <Avatar
        src="https://avatars.githubusercontent.com/u/31248807?s=200"
        sx={{ width: 100, height: 100 }}
      /> */}
    </Box>
  );
}

export default Header;
