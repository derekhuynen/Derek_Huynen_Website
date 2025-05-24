import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { FOOTER_RIGHTS, GITHUB_URL, USER_EMAIL, USER_LINKEDIN_URL } from 'config/constants';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: (theme) => theme.palette.mode === 'dark'
                    ? 'rgba(26, 26, 26, 0.8)'
                    : 'rgba(242, 242, 242, 0.8)',
                borderTop: '1px solid',
                borderColor: (theme) => theme.palette.divider,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 3,
                px: { xs: 1, sm: 2, md: 3 },
                zIndex: 1300
            }}
        >
            <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 1.5,
                        fontWeight: 700,
                        position: 'relative',
                        display: 'inline-block',
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            width: '40px',
                            height: '2px',
                            bottom: '-6px',
                            left: 'calc(50% - 20px)',
                            background: (theme) => `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                            borderRadius: '2px'
                        }
                    }}
                >
                    Let's Connect
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        maxWidth: '600px',
                        textAlign: 'center',
                        mb: 2,
                        color: 'text.secondary',
                        fontSize: { xs: '0.95rem', sm: '1rem' }
                    }}
                >
                    I'm always open to new projects, ideas, or opportunities. Reach out below!
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1.5,
                        mb: 1.5,
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        href={`mailto:${USER_EMAIL}`}
                        startIcon={<EmailIcon />}
                        sx={{
                            borderRadius: 2,
                            px: 2,
                            py: 0.5,
                            fontWeight: 600,
                            minWidth: '120px',
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                    >
                        Email
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHubIcon />}
                        sx={{
                            borderRadius: 2,
                            px: 2,
                            py: 0.5,
                            fontWeight: 600,
                            minWidth: '120px',
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        href={USER_LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LinkedInIcon />}
                        sx={{
                            borderRadius: 2,
                            px: 2,
                            py: 0.5,
                            fontWeight: 600,
                            minWidth: '120px',
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                    >
                        LinkedIn
                    </Button>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, fontSize: '0.85rem' }}>
                    © {new Date().getFullYear()} {FOOTER_RIGHTS}
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
