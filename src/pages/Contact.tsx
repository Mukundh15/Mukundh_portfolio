
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Avatar,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Snackbar,
  Alert
} from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  Send,
  Message,
  AccessTime
} from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      icon: <Email />,
      title: "Email",
      detail: "your.email@example.com",
      description: "Send me an email anytime!",
      color: "#1976d2"
    },
    {
      icon: <GitHub />,
      title: "GitHub",
      detail: "github.com/mukundh-dubasi",
      description: "Check out my code repositories",
      color: "#333"
    },
    {
      icon: <LinkedIn />,
      title: "LinkedIn",
      detail: "linkedin.com/in/yourprofile",
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
                <AccessTime />
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
            <Card elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                  Send Me a Message
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                    sx={{ mt: 3, minWidth: 160 }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card sx={{ mt: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight="semibold" gutterBottom>
                  What happens next?
                </Typography>
                <Stepper orientation="vertical" sx={{ mt: 2 }}>
                  {steps.map((step, index) => (
                    <Step key={step} active={true}>
                      <StepLabel>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="semibold">
                            {step}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {index === 0 && "Usually within a few hours"}
                            {index === 1 && "I'll get back to you within 24 hours"}
                            {index === 2 && "We can set up a call or continue via email"}
                          </Typography>
                        </Box>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
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
