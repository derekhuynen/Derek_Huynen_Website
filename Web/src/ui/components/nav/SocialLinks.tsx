import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { GITHUB_URL, USER_LINKEDIN_URL, USER_EMAIL } from 'config/constants';
import { useTheme } from '@mui/material/styles';

const SocialLinks: React.FC = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const githubColor = isDark ? '#fff' : '#24292f';
    const emailColor = theme.palette.text.primary;
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Tooltip title="GitHub">
                <IconButton
                    component="a"
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: githubColor, mx: 0.25, p: 0.75 }}
                    size="small"
                    aria-label="GitHub"
                >
                    <GitHubIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
                <IconButton
                    component="a"
                    href={USER_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#0077b5', mx: 0.25, p: 0.75 }}
                    size="small"
                    aria-label="LinkedIn"
                >
                    <LinkedInIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>
            <Tooltip title="Email">
                <IconButton
                    component="a"
                    href={`mailto:${USER_EMAIL}`}
                    sx={{ color: emailColor, mx: 0.25, p: 0.75 }}
                    size="small"
                    aria-label="Email"
                >
                    <EmailIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default SocialLinks;
