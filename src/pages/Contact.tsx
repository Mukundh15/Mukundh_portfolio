import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Avatar,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";
import { GitHub, LinkedIn, Mail, Public } from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSuccess(true);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      detail: "mukundhdubasi9@gmail.com",
      link: "mailto:mukundhdubasi9@gmail.com",
      color: "#f44336",
    },
    {
      icon: <GitHub />,
      title: "GitHub",
      detail: "github.com/Mukundh15",
      link: "https://github.com/Mukundh15",
      color: "#333",
    },
    {
      icon: <LinkedIn />,
      title: "LinkedIn",
      detail: "linkedin.com/in/mukundh-dubasi-7a7158293/",
      link: "https://www.linkedin.com/in/mukundh-dubasi-7a7158293/",
      color: "#0e76a8",
    },
    {
      icon: <Public />,
      title: "Project",
      detail: "LFPortal - Lost & Found",
      link: "https://lfportal.onrender.com",
      color: "#4caf50",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, py: 6 }}>
      <Typography variant="h4" gutterBottom textAlign="center" fontWeight={600}>
        Contact Me
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Contact Info Cards */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper elevation={3} sx={{ p: 2, display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{ bgcolor: info.color, mr: 2 }}
                    aria-label={info.title}
                  >
                    {info.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {info.detail}
                      </a>
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Box textAlign="right" mt={2}>
                <Button type="submit" variant="contained" color="primary">
                  Send
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* Snackbar for success */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setSuccess(false)}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
