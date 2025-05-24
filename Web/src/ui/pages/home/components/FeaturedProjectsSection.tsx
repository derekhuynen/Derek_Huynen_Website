import { Box, Typography } from "@mui/material";
import FeaturedProjectCard from "ui/pages/home/components/FeaturedProjectCard";
import featuredProjectsData from "config/json/featuredProjects.json";
import type { FeaturedProject } from "types/FeaturedProject";

const featuredProjects: FeaturedProject[] = featuredProjectsData;

const FeaturedProjectsSection: React.FC = () => {
    return (
        <Box sx={{
            py: 6,
            px: { xs: 2, sm: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    fontWeight: 700,
                    position: 'relative',
                    display: 'inline-block',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '60px',
                        height: '3px',
                        bottom: '-8px',
                        left: 'calc(50% - 30px)',
                        background: (theme) => `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                        borderRadius: '3px'
                    }
                }}
            >
                Recent Public Work
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)'
                    },
                    gap: { xs: 3, md: 4 },
                    justifyContent: 'center',
                    justifyItems: 'center',
                    maxWidth: '1280px',
                    mx: 'auto'
                }}
            >
                {featuredProjects.map((project) => (
                    <FeaturedProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        technologies={project.tech}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default FeaturedProjectsSection;