import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import BreadCrumb from '../bread_crumb/BreadCrumb';

interface PageLayoutProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    actions?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, description, children, actions }) => {
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
                <BreadCrumb />
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
                {children}
            </Container>
        </Box>
    );
};

export default PageLayout;
