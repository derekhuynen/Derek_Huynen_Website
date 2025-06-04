import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { RESUME_URL } from "config/constants";

interface DownloadResumeProps {
    fullWidth?: boolean;
}

const DownloadResume: React.FC<DownloadResumeProps> = ({ fullWidth }) => {
    return (
        <Button
            component="a"
            href={RESUME_URL}
            download
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
            fullWidth={!!fullWidth}
            startIcon={<DownloadIcon sx={{ width: 22, height: 22 }} />}
            sx={{
                textTransform: 'none',
                fontWeight: 600,
                fontSize: 15,
                ml: 2, // keep for spacing consistency, or remove if not needed
            }}
            aria-label="Download Resume"
            title="Download Resume"
        >
            My Resume
        </Button>
    );
}

export default DownloadResume;