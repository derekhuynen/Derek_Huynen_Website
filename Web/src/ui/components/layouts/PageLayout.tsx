import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import BreadCrumb from '../bread_crumb/BreadCrumb';
import { RESUME_URL } from 'config/constants';
import DownloadIcon from '@mui/icons-material/Download';

interface PageLayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
    actions?: React.ReactNode;
    showDownloadButton?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, description, children, actions, showDownloadButton }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: '100%',
            mx: 'auto',
            pt: 1,
            pb: 6,
            px: { xs: 2, sm: 3, md: 4 },
        }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                    <BreadCrumb />
                    {showDownloadButton && (
                        <a
                            href={RESUME_URL}
                            download
                            style={{ textDecoration: 'none' }}
                            aria-label="Download Resume"
                            title="Download Resume"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Box
                                component="button"
                                sx={{
                                    ml: 2,
                                    px: 2.5,
                                    py: 1,
                                    borderRadius: 2,
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                    fontWeight: 600,
                                    fontSize: 15,
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: 'background 0.2s',
                                    '&:hover': {
                                        bgcolor: 'primary.dark',
                                    },
                                }}
                            >
                                <DownloadIcon sx={{ width: 22, height: 22, mr: 1 }} />
                                My Resume
                            </Box>
                        </a>)}
                </Box>

                {title && (
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                        <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
                            {title}
                        </Typography>
                        {description && (
                            <Typography variant="body1" color="text.secondary" sx={{ mb: actions ? 2 : 0 }}>
                                {description}
                            </Typography>
                        )}
                        {actions && <Box sx={{ mt: 2 }}>{actions}</Box>}
                    </Box>
                )}
                {children}
            </Container>
        </Box>
    );
};

export default PageLayout;
