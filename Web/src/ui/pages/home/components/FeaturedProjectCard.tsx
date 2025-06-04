import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Stack
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TechChip from 'ui/components/tech/TechChip';

export interface FeaturedProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
    title,
    description,
    imageUrl,
    technologies,
    githubUrl,
    liveUrl
}) => {
    return (
        <Card
            sx={{
                maxWidth: { xs: 350, sm: 400 },
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: (theme) => `0 0 18px 4px ${theme.custom.main}22, 0 2px 8px ${theme.custom.main}10`,
                transition: 'transform 0.3s, box-shadow 0.3s',
                borderRadius: 2,
                '&:hover': {
                    boxShadow: (theme) => `0 0 28px 8px ${theme.custom.main}33, 0 4px 16px ${theme.custom.main}18`,
                    transform: 'translateY(-2px) scale(1.02)',
                },
            }}
        >
            <CardMedia
                component="img"
                height="210"
                image={imageUrl}
                alt={title}
                sx={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                    {description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2, gap: 1 }}>
                    {technologies.map((tech) => (
                        <TechChip key={tech} name={tech} />
                    ))}
                </Stack>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ flexGrow: 1 }}
                    >
                        GitHub
                    </Button>
                    {liveUrl && (
                        <Button
                            variant="contained"
                            size="small"
                            startIcon={<OpenInNewIcon />}
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ flexGrow: 1 }}
                        >
                            Live Demo
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default FeaturedProjectCard;
