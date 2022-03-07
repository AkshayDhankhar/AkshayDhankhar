import Box from '@mui/material/Box';
import Header from '../components/Header';
import Details from '../components/Details';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <Stack spacing={0.5}>
      <Header />
      <Details />
      <Skills />
      <Experience />
    </Stack>
  );
}
