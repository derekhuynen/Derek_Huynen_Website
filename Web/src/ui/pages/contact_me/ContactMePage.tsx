import React from 'react';
import ContactMeForm from './ContactMeForm';
import { Box, Card, CardContent } from '@mui/material';
import PageLayout from '../../components/layouts/PageLayout';
import { WEBSITE_INFO } from 'config/constants';

const ContactMePage: React.FC = () => {
    return (
        <PageLayout
            title={WEBSITE_INFO.contact_me_page.title}
            description={WEBSITE_INFO.contact_me_page.description}
            showDownloadButton={true}
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
