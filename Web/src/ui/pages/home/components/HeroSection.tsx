import { Box, Button, Typography } from "@mui/material";
import { AVATAR_URL, USER_NAME } from "config/constants";

const HeroSection: React.FC<{
    primaryText?: string;
    secondaryText?: string;
    appBarHeight: number;
    actionText?: string;
    onActionClick: () => void

}> = ({
    primaryText = "Senior Software Developer",
    secondaryText = "Building modern, scalable, and beautiful web applications.",
    appBarHeight,
    actionText = "Contact Me",
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
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ borderRadius: 3, px: 4, fontWeight: 600 }}
                        onClick={onContactClick}
                    >
                        {actionText}
                    </Button>
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
            </Box>
        )
    };

export default HeroSection;