import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Switch,
  FormControlLabel,
  Typography,
  Box,
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './ChatbotForm.css';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00a4a6',
    },
    secondary: {
      main: '#333',
    },
  },
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00a4a6',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#333',
      paper: '#424242',
    },
  },
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});

const ChatbotForm = () => {
  const [themeMode, setThemeMode] = useState('light');
  const [botName, setBotName] = useState('');
  const [description, setDescription] = useState('');
  const [purpose, setPurpose] = useState('');
  const [goals, setGoals] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [defaultResponse, setDefaultResponse] = useState('');
  const [dataCollection, setDataCollection] = useState(false);

  const handleGoalsChange = (event) => {
    const value = event.target.value;
    setGoals(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  const handleThemeChange = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }} >
            Chatbot Builder
          </Typography>
          <FormControlLabel
            control={
              <Switch
                onChange={handleThemeChange}
                name="themeToggle"
                color="default"
              />
            }
            label="Dark Mode"
          />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Create Your AI Powered Chatbot
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="botName"
              label="Bot Name"
              name="botName"
              value={botName}
              onChange={(e) => setBotName(e.target.value)}
              className="form-field"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              id="description"
              label="Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-field"
            />
            <FormControl fullWidth margin="normal" className="form-field">
              <InputLabel id="purpose-label">Purpose</InputLabel>
              <Select
                labelId="purpose-label"
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                label="Purpose"
              >
                <MenuItem value="customer-support">Customer Support</MenuItem>
                <MenuItem value="faq">FAQ</MenuItem>
                <MenuItem value="lead-generation">Lead Generation</MenuItem>
                <MenuItem value="lead-generation">Operational Efficiency</MenuItem>
                <MenuItem value="lead-generation">Marketing and Promotion</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="contained" className="form-field">
              <InputLabel id="goals-label">Goals</InputLabel>
              <Select
                labelId="goals-label"
                id="goals"
                multiple
                value={goals}
                onChange={handleGoalsChange}
                renderValue={(selected) => selected.join(', ')}
              >
                <MenuItem value="answer-questions">Answer Common Questions</MenuItem>
                <MenuItem value="book-appointments">Book Appointments</MenuItem>
                <MenuItem value="generate-leads">Generate Leads</MenuItem>
                <MenuItem value="generate-leads">Market New Products</MenuItem>
                <MenuItem value="generate-leads">Market On Sale Products</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="welcomeMessage"
              label="Welcome Message"
              name="welcomeMessage"
              value={welcomeMessage}
              onChange={(e) => setWelcomeMessage(e.target.value)}
              className="form-field"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="defaultResponse"
              label="Default Response"
              name="defaultResponse"
              value={defaultResponse}
              onChange={(e) => setDefaultResponse(e.target.value)}
              className="form-field"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={dataCollection}
                  onChange={(e) => setDataCollection(e.target.checked)}
                  name="dataCollection"
                  color="primary"
                />
              }
              label="Enable Data Collection"
              className="form-field"
            />
            <Box sx={{ mt: 4 }}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Create Chatbot
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ChatbotForm;
