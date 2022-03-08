import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const experiences = [
  {
    title: "Senior Software Engineer",
    org: "Meesho, Bangalore",
    time: "Jan 2021 – Present",
    responsiblities: [],
  },
  {
    title: "Senior Software Engineer",
    org: "SAP Labs, Bangalore",
    time: "Sept 2018 – Jan 2021",
    responsiblities: [],
  },

  {
    title: "Senior Software Engineer",
    org: "PowerSchool, Bangalore",
    time: "Jan 2018 – Sept 2018",
    responsiblities: [],
  },

  {
    title: "Senior Software Engineer",
    org: "Brillio, Bangalore",
    time: "July 2016 – Jan 2018",
    responsiblities: [],
  },

  {
    title: "Software Engineer",
    org: "Above Solutions pvt. ltd., Bangalore",
    time: "Jun 2014 – June 2016",
    responsiblities: [],
  },
];

function Experience() {
  return (
    <Box p={2} sx={{ background: "white", mb: 0.5 }}>
      <Typography variant="h6" component="h1" sx={{ fontWeight: 500, pb: 2 }}>
        Experience
      </Typography>
      {experiences.map((exp) => (
        <Box key={exp.org}>
          <Stack spacing={1} direction="row" alignItems="baseline">
            <Typography variant="h6" component="h2">
              {exp.title}
            </Typography>
            <Typography variant="body2" component="h3" color="text.secondary">
              ({exp.org})
            </Typography>
          </Stack>

          <Typography variant="body2" component="p" color="text.secondary">
            {exp.time}
          </Typography>
          <Box pt={1}>
            {exp.responsiblities.map((res) => (
              <Typography
                variant="body2"
                component="p"
                color="text.secondary"
                key={res}
              >
                ● {res}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Experience;
