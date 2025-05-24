import React from 'react';
import ContactMeForm from './ContactMeForm';
import { Box, Card, CardContent } from '@mui/material';
import PageLayout from '../../components/layouts/PageLayout';

const ContactMePage: React.FC = () => {
    return (
        <PageLayout
            title="Contact Me"
            description="I would love to hear from you! Whether you have a question, a job opportunity, or just want to connect, fill out the form below and I’ll get back to you as soon as possible."
        >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card elevation={4} sx={{ borderRadius: 4, width: '100%', maxWidth: 600, mx: 'auto' }}>
                    <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
                        <ContactMeForm />
                    </CardContent>
                </Card>
            </Box>
        </PageLayout>
    );
};

export default ContactMePage;
