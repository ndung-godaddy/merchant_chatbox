import React from 'react';
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
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './ChatbotForm.css';

const theme = createTheme();

const ChatbotForm = () => {
  const [botName, setBotName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [purpose, setPurpose] = React.useState('');
  const [goals, setGoals] = React.useState([]);
  const [welcomeMessage, setWelcomeMessage] = React.useState('');
  const [defaultResponse, setDefaultResponse] = React.useState('');
  const [dataCollection, setDataCollection] = React.useState(false);

  const handleGoalsChange = (event) => {
    const value = event.target.value;
    setGoals(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Create AI Chatbot
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
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" className="form-field">
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
            <Box sx={{ mt: 3 }}>
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
