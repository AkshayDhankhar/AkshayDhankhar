import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const experiences = [
  {
    title: 'Senior Software Enginner',
    org: 'Meesho, Bangalore',
    time: 'Jan 2021 – Present',
    responsiblities: [
      'Architect, Design and develop front-end applications',
      'Created micro front-end architecture to manage larger app into individual apps for scalability, faster development etc.',
      'Collaborate with team members and stakeholders',
      'Build reusable code and libraries for future use',
      'Optimize application for maximum speed and scalability',
      'Following SEO best practices',
    ],
  },
];

function Experience() {
  return (
    <Box p={2} sx={{ background: 'white' }}>
      <Typography variant="h6" component="h1" sx={{ fontWeight: 500, pb: 2 }}>
        Experience
      </Typography>
      {experiences.map((exp) => (
        <Box key={exp.org}>
          <Stack spacing={1} direction="row">
            <Typography variant="h5" component="h2" sx={{ fontWeight: 400 }}>
              {exp.title}
            </Typography>
            <Typography variant="body" component="h3" color="text.secondary">
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
