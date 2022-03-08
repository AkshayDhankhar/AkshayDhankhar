import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getMeta } from "./SEO";

const networks = [
  {
    link: "https://www.linkedin.com/in/rahul-sharma-18b8b374",
    icon: "https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg",
  },
  {
    link: "https://github.com/devsmitra",
    icon: "https://www.vectorlogo.zone/logos/github/github-ar21.svg",
  },
  {
    link: "https://stackoverflow.com/users/8879527/rahul-sharma?tab=profile",
    icon: "https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-ar21.svg",
  },
  {
    link: "https://devsmitra.medium.com",
    icon: "https://www.vectorlogo.zone/logos/medium/medium-ar21.svg",
  },
  {
    link: "https://stackblitz.com/@devsmitra",
    icon: "https://developer.stackblitz.com/img/logo.svg",
    height: 28,
  },
  {
    link: "https://codesandbox.io/u/DevsMitra",
    icon: "https://coollogo.net/wp-content/uploads/2021/11/codesandbox.svg",
    height: 24,
  },
];

function ReachMe() {
  const meta = getMeta();

  return (
    <Box p={2} sx={{ background: "white", mb: 0.5 }}>
      <Typography variant="h6" component="h1" sx={{ fontWeight: 500, pb: 2 }}>
        How to reach me
      </Typography>
      <Stack spacing={4} direction="row" alignItems="center">
        {networks.map((network) => (
          <a href={network.link} target="blank">
            <img
              align="center"
              height={network.height ?? 50}
              src={network.icon}
              alt={meta.title}
              title={meta.title}
            />
          </a>
        ))}
      </Stack>

      <Box
        sx={{
          display: "flex",
          pt: 2,
        }}
      >
        <Box pr={2}>
          <img
            height="200"
            src="https://github-readme-stats.vercel.app/api?username=devsmitra&show_icons=true&locale=en"
            alt={meta.title}
            title={meta.title}
          />
        </Box>
        <img
          height="200"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=devsmitra&layout=compact&langs_count=7"
          alt={meta.title}
          title={meta.title}
        />
      </Box>
    </Box>
  );
}

export default ReachMe;
