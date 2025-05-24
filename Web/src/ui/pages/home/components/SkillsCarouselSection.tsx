import { Box, Typography } from "@mui/material";
import featuredSkillIconKeys from "config/json/featuredSkillIconKeys.json";
import { IconContext } from "react-icons";
import InfiniteIconCarousel from "ui/components/infinite_icon_carousel/InfiniteIconCarousel";


// Wrap your carousel (or app root) in this to keep all icons uniform
function SkillProvider({ children }: { children: React.ReactNode }) {
    return (
        <IconContext.Provider value={{ size: '2rem', style: { verticalAlign: 'middle' } }}>
            {children}
        </IconContext.Provider>
    );
}

const SkillsCarouselSection: React.FC<{
    onIconClick: (id: string | undefined) => void
}> = ({ onIconClick }) => {

    return (
        <Box sx={{
            height: "225px",
            width: '100%',
            overflow: 'hidden',
            py: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    textAlign: 'center',
                    mb: 3,
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
                Tech Stack
            </Typography>
            <SkillProvider>
                <InfiniteIconCarousel
                    items={featuredSkillIconKeys}
                    onItemClick={onIconClick}
                    speed={1}
                    iconSize={70}
                    gap={30}
                />
            </SkillProvider>
        </Box>
    )
};


export default SkillsCarouselSection;