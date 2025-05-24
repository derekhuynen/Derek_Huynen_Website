import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import SkillsCarouselSection from './components/SkillsCarouselSection';
import HeroSection from './components/HeroSection';
import { APPLICATION } from 'config/constants';


const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    // Ensure appBarHeight is a number
    const appBarHeight = Number(theme.mixins.toolbar.minHeight) || 64;

    const handleIconClick = () => {
        navigate(APPLICATION.Projects.route,);
    };

    const handleContactClick = () => {
        navigate(APPLICATION.Contact.route);
    };

    return (
        <Box>
            <HeroSection appBarHeight={appBarHeight} onActionClick={handleContactClick} />
            <SkillsCarouselSection onIconClick={handleIconClick} />
            <FeaturedProjectsSection />
        </Box>
    );
};

export default HomePage;

