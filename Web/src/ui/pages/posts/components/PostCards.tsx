import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import type { Post } from 'types/Post';
import { formatDate } from 'services/helper/dateFormate';

interface PostCardProps {
    post: Post;
}

const getFirstNLines = (text: string | undefined, n: number) => {
    if (!text) return '';
    const lines = text.split(/\r?\n/).filter(Boolean);
    if (lines.length >= n) return lines.slice(0, n).join('\n');
    return lines.join('\n');
};

const renderWithHashtags = (text: string) => {
    // Split by word, keep hashtags as separate elements
    const regex = /(#[\w\d_]+)/g;
    const parts = text.split(regex);
    return parts.map((part, i) => {
        if (part.match(/^#[\w\d_]+$/)) {
            return (
                <a
                    key={i}
                    href="#"
                    style={{
                        color: '#0a66c2',
                        fontWeight: 600,
                        textDecoration: 'underline',
                        background: 'none',
                        borderRadius: 0,
                        padding: 0,
                        marginRight: 2,
                        cursor: 'pointer',
                    }}
                >
                    {part}
                </a>
            );
        }
        return part;
    });
};

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const [expanded, setExpanded] = React.useState(false);
    const content = post.linkedInPost || '';
    const preview = getFirstNLines(content, 3);
    const showShowMore = (content.split(/\r?\n/).length > 3);

    // Split by paragraphs (double newline), then by lines for LinkedIn style
    const renderContent = (text: string) =>
        text.split(/\n\n+/).map((paragraph, pIdx) => (
            <div key={pIdx} style={{ marginBottom: 16 }}>
                {paragraph.split(/\n/).map((line, lIdx) => (
                    <div key={lIdx} style={{ display: 'block', marginBottom: 2 }}>{renderWithHashtags(line)}</div>
                ))}
            </div>
        ));

    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: { xs: 520, sm: 600, md: 700 },
                minHeight: 180,
                bgcolor: (theme) => theme.palette.mode === 'dark' ? '#23272f' : '#f3f6fa',
                borderRadius: 4,
                boxShadow: (theme) => `0 2px 16px 0 ${theme.palette.primary.main}22, 0 1.5px 6px ${theme.palette.primary.main}10`,
                border: '1.5px solid',
                borderColor: (theme) => theme.palette.divider,
                p: 0,
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s',
                '&:hover': {
                    boxShadow: (theme) => `0 4px 32px 0 ${theme.palette.primary.main}33, 0 2px 12px ${theme.palette.primary.main}18`,
                },
            }}
        >
            <Box sx={{
                bgcolor: (theme) => theme.palette.mode === 'dark' ? '#0a66c2' : '#eaf3fb',
                px: 3,
                py: 1.5,
                borderBottom: '1px solid',
                borderColor: (theme) => theme.palette.divider,
            }}>
                <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ fontSize: 20, color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#0a66c2', letterSpacing: 0.2 }}>
                    {post.topic}
                </Typography>
            </Box>
            <CardContent sx={{ pb: 0, pt: 2, px: 3 }}>
                {post.blobStorageUrl && (
                    <Box sx={{ mb: 2, mx: 0, px: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={post.blobStorageUrl}
                            alt={post.topic}
                            style={{
                                width: '100%',
                                height: 'auto',
                                aspectRatio: '1792/1024',
                                borderRadius: 8,
                                boxShadow: '0 2px 8px #0002',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </Box>
                )}
                <Typography className="post-content" variant="body1" sx={{ fontSize: 16, color: (theme) => theme.palette.text.primary, minHeight: 60, mb: 1.5 }}>
                    {expanded ? renderContent(content) : renderContent(preview)}
                </Typography>
                {showShowMore && !expanded && (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            size="small"
                            onClick={e => { e.stopPropagation(); setExpanded(true); }}
                            sx={{ px: 1.5, py: 0.5, fontWeight: 600, borderRadius: 2, textTransform: 'none', fontSize: 14 }}
                        >
                            Show more
                        </Button>
                    </Box>
                )}
            </CardContent>
            <Box sx={{ px: 3, pb: 2, pt: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid', borderColor: (theme) => theme.palette.divider, mt: 1 }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: 13 }}>
                    {formatDate(post.createdAt)}
                </Typography>
                {expanded && showShowMore && (
                    <Button size="small" onClick={e => { e.stopPropagation(); setExpanded(false); }} sx={{ px: 1.5, py: 0.5, fontWeight: 600, borderRadius: 2, textTransform: 'none', fontSize: 14 }}>
                        Show less
                    </Button>
                )}
            </Box>
        </Card>
    );
};

export default PostCard;
