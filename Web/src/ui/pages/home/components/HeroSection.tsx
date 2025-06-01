import { Box, Button, Typography } from "@mui/material";
import { AVATAR_URL, RESUME_FILE_NAME, RESUME_URL, USER_NAME, WEBSITE_INFO } from "config/constants";

const HeroSection: React.FC<{
    primaryText?: string;
    secondaryText?: string;
    appBarHeight: number;
    actionText?: string;
    onActionClick: () => void

}> = ({
    primaryText = WEBSITE_INFO.home_page.hero.title,
    secondaryText = WEBSITE_INFO.home_page.hero.subtitle,
    appBarHeight,
    actionText = WEBSITE_INFO.home_page.hero.action,
    onActionClick: onContactClick }) => {

        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: `calc(100vh - ${appBarHeight}px)`,
                    gap: 3,
                    px: { xs: 2, sm: 4, md: 0 },
                    width: '100%',
                    overflow: 'hidden'
                }}
            >
                {/* Left Side */}
                <Box sx={{
                    flex: { xs: 0, md: 1 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    mb: { xs: 4, md: 0 },
                    ml: { xs: 0, md: 4 },
                }}>
                    <Typography variant="h2" component="h1" fontWeight={800} gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        {primaryText}
                    </Typography>
                    {secondaryText &&
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
                            {secondaryText}
                        </Typography>}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, gap: 2, width: '100%', mb: 1 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ borderRadius: 3, px: 4, fontWeight: 600, flex: 1 }}
                            onClick={onContactClick}
                        >
                            {actionText}
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            sx={{ borderRadius: 3, px: 4, fontWeight: 600, flex: 1 }}
                            href="/projects"
                        >
                            View Projects
                        </Button>
                    </Box>
                </Box>
                {/* Right Side */}
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'center' },
                    alignItems: 'center',
                    position: 'relative',
                    height: '100%',
                    overflow: 'hidden',
                }}>
                    <img
                        src={AVATAR_URL}
                        alt={`${USER_NAME} - Avatar`}
                        style={{
                            maxHeight: '90%',
                            maxWidth: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </Box>
                {/* Download Resume Icon - bottom right */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 32,
                        right: 32,
                        zIndex: 10,
                        display: { xs: 'flex', md: 'flex' },
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        href={RESUME_URL}
                        download={RESUME_FILE_NAME}
                        sx={{
                            minWidth: 0,
                            borderRadius: '50%',
                            p: 1.5,
                            boxShadow: 3,
                        }}
                        aria-label="Download Resume"
                        title="Download Resume"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </Box>
            </Box>
        )
    };

export default HeroSection;