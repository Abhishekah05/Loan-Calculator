// src/About/About.jsx
import React from 'react';
import { Box, Typography, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import { useLoanContext } from '../Context/Context';

// Import icons for sections
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import CalculateIcon from '@mui/icons-material/Calculate';
import PublicIcon from '@mui/icons-material/Public';
import TargetIcon from '@mui/icons-material/GpsFixed';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const About = () => {
  const { darkMode } = useLoanContext();
  
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box component="section" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          About This App
        </Typography>
        <Typography variant="body1" paragraph>
          This Loan Calculator App is a modern, single-page web application built using <strong>React JS</strong> and <strong>Material UI</strong>. 
          It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, 
          and see real-time currency conversions of their EMI using live exchange rates.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box component="section" mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <AssignmentIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h4" component="h2">
            Instructions for Candidates
          </Typography>
        </Box>
        <Typography variant="body1" mb={2}>
          Please follow these instructions to complete and submit your project:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Push the entire project to a public GitHub repository." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Make sure to commit regularly with clear messages after completing each feature." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Use the provided EMI formula to perform calculations." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Use Context API for global state management (e.g. theme, currency)." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates)." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Integrate the ExchangeRate API for live currency conversion." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Ensure the app is fully responsive on all screen sizes." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Implement both light and dark modes using Material UI's theming system." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Add a 404 Not Found page for unmatched routes." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Handle runtime errors gracefully by showing an Error Page." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Once deployed, add the live deployment link in the About section of your GitHub repo." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages)." />
          </ListItem>
        </List>
        <Box mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleIcon color="success" sx={{ mr: 1 }} />
          <Typography variant="body1">
            Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box component="section" mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <BuildIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h4" component="h2">
            Features
          </Typography>
        </Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Loan EMI calculation using standard financial formulas" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Dynamic amortization schedule table with monthly breakdown" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Real-time currency conversion of EMI using a live exchange rate API" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Paginated exchange rate table for 160+ currencies" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Dark/Light mode toggle for a customizable experience" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Collapsible header navigation on mobile screens" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Fully responsive UI built with Material UI" />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box component="section" mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <CodeIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h4" component="h2">
            Technologies Used
          </Typography>
        </Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="React (Hooks, Routing, Context API)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Material UI for styling and responsive components" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Axios for API calls" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Exchange Rate API for real-time currency conversion" />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box component="section" mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <CalculateIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h4" component="h2">
            EMI Formula Used
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          The EMI (Equated Monthly Installment) is calculated using the standard formula:
        </Typography>
        <Typography 
          variant="body1" 
          component="div" 
          sx={{ 
            p: 2, 
            my: 2, 
            fontFamily: 'monospace', 
            bgcolor: darkMode ? 'grey.900' : 'grey.100', 
            borderRadius: 1 
          }}
        >
          EMI = [P × R × (1+R)ᴺ] / [(1+R)ᴺ - 1]
        </Typography>
        <Typography variant="body1" component="div">
          Where:
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="P = Principal loan amount" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="R = Monthly interest rate (annual rate / 12 / 100)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="N = Loan duration in months" />
            </ListItem>
          </List>
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box component="section" mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <PublicIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h4" component="h2">
            Currency Conversion API
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          This app integrates with the free tier of the <Link href="https://exchangerate-api.com" target="_blank" rel="noopener">ExchangeRate-API</Link> to fetch live exchange rates.
        </Typography>
        <Typography variant="body1" paragraph>
          API Endpoint Example:
        </Typography>
        <Typography 
          variant="body1" 
          component="div" 
          sx={{ 
            p: 2, 
            my: 2, 
            fontFamily: 'monospace', 
            bgcolor: darkMode ? 'grey.900' : 'grey.100', 
            borderRadius: 1 
          }}
        >
          https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
        </Typography>
        <Typography variant="body1" paragraph>
          You must register and obtain a free API key to use this endpoint. Then, replace YOUR_API_KEY in the app code with your actual key.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box component="section">
        <Box display="flex" alignItems="center" mb={2}>
          <TargetIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h4" component="h2">
            Purpose of This App
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          This project is designed to assess a candidate's React development skills, including:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="React fundamentals (state, props, hooks)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Component structure and code reusability" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Third-party API integration and live data rendering" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Working with tables, lists, and pagination" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Theme customization (dark/light mode toggle)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Error handling and graceful UI fallbacks" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Responsive design and collapsible mobile header navigation (In Mobile view)" />
          </ListItem>
        </List>
        <Box mt={2} sx={{ display: 'flex', alignItems: 'center', bgcolor: darkMode ? 'warning.dark' : 'warning.light', p: 2, borderRadius: 1 }}>
          <InfoIcon sx={{ mr: 1, color: 'warning.main' }} />
          <Typography variant="body1">
            For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;