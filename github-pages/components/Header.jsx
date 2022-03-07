import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import profile from "../profile";

function Header() {
  return (
    <Box
      sx={{
        display: "grid",
        gridAutoColumns: "1fr",
        gap: 1,
        p: 2,
        background: "white",
      }}
    >
      <Stack sx={{ gridRow: "1", gridColumn: "span 3" }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 500 }}>
          {profile.header.name}
        </Typography>
        <Typography variant="body" component="h2" color="text.secondary">
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
      <Box
        sx={{
          gridRow: "1",
          gridColumn: "span 1",
          display: "flex",
          justifyContent: "end",
        }}
      >
        {/* <Image
          src="https://avatars.githubusercontent.com/u/31248807?s=200"
          height="150"
          width="150"
        /> */}
      </Box>
    </Box>
  );
}

export default Header;
