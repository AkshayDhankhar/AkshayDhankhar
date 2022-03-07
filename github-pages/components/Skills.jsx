import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Image from 'next/image';

const skills = [
  'https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg',
  'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg',
  'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg',
  'https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg',
  'https://www.vectorlogo.zone/logos/angular/angular-ar21.svg',
  'https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg',
  'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg',
  'https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg',
  'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg',
  'https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg',
  'https://www.vectorlogo.zone/logos/json/json-ar21.svg',
  'https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg',
  'https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg',
  'https://www.vectorlogo.zone/logos/bitbucket/bitbucket-ar21.svg',
  'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg',
  'https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg',
  'https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg',
  'https://www.vectorlogo.zone/logos/arangodb/arangodb-ar21.svg',
  'https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg',
  'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  'https://www.vectorlogo.zone/logos/redis/redis-ar21.svg',
  'https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg',
  'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg',
  'https://www.vectorlogo.zone/logos/eslint/eslint-ar21.svg',
  'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg',
  'https://www.vectorlogo.zone/logos/nginx/nginx-ar21.svg',
  'https://www.vectorlogo.zone/logos/mochajs/mochajs-ar21.svg',
  'https://www.vectorlogo.zone/logos/chaijs/chaijs-ar21.svg',
  'https://www.vectorlogo.zone/logos/socketio/socketio-ar21.svg',
];

function Skills() {
  return (
    <Box p={2} sx={{ background: 'white' }}>
      <Typography variant="h6" component="h1" sx={{ fontWeight: 500, pb: 2 }}>
        Skills
      </Typography>
      {skills.map((url) => (
        <Box key={url} component="span" pr={1} pb={1}>
          <img height="50" width="100px" src={url} />
        </Box>
      ))}
    </Box>
  );
}

export default Skills;
