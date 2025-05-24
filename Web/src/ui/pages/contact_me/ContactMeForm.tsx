import React from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Stack,
    Alert,
    CircularProgress,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useGlobalSnackbar from '../../components/global_snackbar/useGlobalSnackbar';
import { CONSTANT_ME_URL, USER_EMAIL } from 'config/constants';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axiosClient from 'services/axiosClient';

const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().optional(),
    topic: z.string().min(2, 'Please enter a topic for your message'),
    body: z.string().min(10, 'Please provide at least 10 characters in your message'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactMeForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitError, setSubmitError] = React.useState<string | null>(null);
    const { open: showSnackbar } = useGlobalSnackbar();
    const navigate = useNavigate();

    const contactMeMutation = useMutation({
        mutationFn: async (data: ContactFormData) => {
            setSubmitError(null);
            const response = await axiosClient.post(CONSTANT_ME_URL, data);
            return response.data;
        },
        onSuccess: () => {
            showSnackbar("Thank you for reaching out! I'll get back to you soon.", 'success', { anchorOrigin: { vertical: 'bottom', horizontal: 'center' } });
            setTimeout(() => navigate('/'), 1200);
        },
        onError: (error: unknown) => {
            let message = 'Something went wrong. Please try again or email me directly.';
            if (error && typeof error === 'object' && 'response' in error && error.response && typeof error.response === 'object' && 'data' in error.response) {
                // @ts-expect-error: axios error typing is not strict, response.data may exist
                message = error.response.data || message;
            }
            setSubmitError(message);
            showSnackbar(message, 'error', { anchorOrigin: { vertical: 'bottom', horizontal: 'center' } });
        },
    });

    const { control, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            topic: '',
            body: '',
        },
    });

    const onSubmit = (data: ContactFormData) => {
        setIsSubmitting(true);
        contactMeMutation.mutate(data, {
            onSettled: () => {
                setIsSubmitting(false);
                if (!contactMeMutation.isError) reset();
            }
        });
    };

    return (
        <form id="contact_me_form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={3}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Your Name *"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email Address *"
                            type="email"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Phone Number (Optional)"
                            type="tel"
                            fullWidth
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                        />
                    )}
                />
                <Controller
                    name="topic"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Topic *"
                            fullWidth
                            error={!!errors.topic}
                            helperText={errors.topic?.message}
                        />
                    )}
                />
                <Controller
                    name="body"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Message *"
                            multiline
                            minRows={4}
                            fullWidth
                            error={!!errors.body}
                            helperText={errors.body?.message}
                        />
                    )}
                />
                {submitError && (
                    <Alert severity="error">{submitError}</Alert>
                )}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        sx={{ minWidth: 180, py: 1.5 }}
                    >
                        {isSubmitting ? (
                            <>
                                <CircularProgress size={20} sx={{ mr: 1 }} />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </Button>
                </Box>
                <Alert severity="info" sx={{ mt: 2 }}>
                    <Typography variant="body2">
                        I typically respond within 24 hours. For urgent matters, please email me directly {USER_EMAIL}.
                    </Typography>
                </Alert>
            </Stack>
        </form>
    );
};

export default ContactMeForm;