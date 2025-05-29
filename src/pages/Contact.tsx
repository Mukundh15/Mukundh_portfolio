import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: "Email",
      detail: "mukundhdubasi9@gmail.com",
      description: "Send me an email anytime!",
      color: "#1976d2"
    },
    {
      icon: <GitHubIcon />,
      title: "GitHub",
      detail: "github.com/Mukundh15",
      description: "Check out my code repositories",
      color: "#333"
    },
    {
      icon: <LinkedInIcon />,
      title: "LinkedIn",
      detail: "www.linkedin.com/in/mukundh-dubasi",
      description: "Let's connect professionally",
      color: "#0077b5"
    }
  ];

  const steps = [
    "I'll review your message",
    "Quick response",
    "Let's discuss"
  ];

  return (
    <Box sx={{ minHeight: "100vh", py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            Get In Touch
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: "auto" }}>
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's build something amazing together!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} lg={4}>
            <Box mb={4}>
              <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                Let's Connect
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </Typography>
            </Box>

            <Box mb={4}>
              {contactInfo.map((info) => (
                <Card key={info.title} sx={{ mb: 2, "&:hover": { boxShadow: 4 } }}>
                  <CardContent>
                    <Box display="flex" alignItems="flex-start" gap={2}>
                      <Avatar sx={{ bgcolor: info.color, width: 48, height: 48 }}>
                        {info.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="semibold">
                          {info.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={0.5}>
                          {info.detail}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {info.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* Response Time Card */}
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                textAlign: "center",
                background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)"
              }}
            >
              <Avatar sx={{ bgcolor: "#1976d2", mx: "auto", mb: 2, width: 56, height: 56 }}>
                <AccessTimeIcon />
              </Avatar>
              <Typography variant="h6" fontWeight="semibold" gutterBottom>
                Response Time
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Usually within 24 hours
              </Typography>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <Card
  elevation={6}
  sx={{
    p: 4,
    borderRadius: 4,
    backgroundColor: "white",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
  }}
>
  <CardContent>
    <Typography
      variant="h4"
      component="h2"
      gutterBottom
      fontWeight="bold"
      textAlign="center"
    >
      Send Me a Message
    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
      textAlign="center"
      mb={3}
    >
      Fill out the form below and I’ll get back to you as soon as possible.
    </Typography>

    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, px: { xs: 0, md: 6 } }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
            variant="outlined"
            placeholder="Tell me about your project or just say hello..."
          />
        </Grid>
      </Grid>

      <Box textAlign="center">
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isSubmitting}
          startIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
          sx={{
            mt: 4,
            px: 5,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: "30px",
            background: "linear-gradient(135deg, #1976d2, #2196f3)"
          }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </Box>
    </Box>
  </CardContent>
</Card>

          </Grid>
        </Grid>

        {/* Success Snackbar */}
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            variant="filled"
          >
            Message sent! Thank you for reaching out. I'll get back to you soon!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
