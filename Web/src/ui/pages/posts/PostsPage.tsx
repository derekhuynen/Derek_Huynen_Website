import React from 'react';
import { usePosts } from 'services/usePosts';
import PageLayout from 'ui/components/layouts/PageLayout';
import { Box, Typography, CircularProgress, Alert, Button } from '@mui/material';
import PostCard from './components/PostCards';
import { GITHUB_BUTTON_TEXT, GITHUB_LINK, WEBSITE_INFO } from '../../../config/constants';



const PostsPage: React.FC = () => {
    const { data: posts, isLoading, isError, error } = usePosts();

    return (
        <PageLayout
            title={WEBSITE_INFO.POSTS_TITLE}
            description={WEBSITE_INFO.POSTS_DESCRIPTION}
            upperRight={
                <Button
                    component="a"
                    href={GITHUB_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    sx={{
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: 15,
                        ml: 2, // keep for spacing consistency, or remove if not needed 
                    }}
                >
                    {GITHUB_BUTTON_TEXT}
                </Button >
            }
        >
            <Box>
                {isLoading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <CircularProgress color="primary" />
                    </Box>
                )}
                {isError && (
                    <Alert severity="error" sx={{ my: 3 }}>
                        Error loading posts: {error instanceof Error ? error.message : 'Unknown error'}
                    </Alert>
                )}
                {!isLoading && !isError && posts && posts.length > 0 ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, mt: 2 }}>
                        {posts.map(post => (
                            <PostCard key={post.id || post.createdAt} post={post} />
                        ))}
                    </Box>
                ) : null}
                {!isLoading && !isError && (!posts || posts.length === 0) && (
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
                        No posts found.
                    </Typography>
                )}
            </Box>
        </PageLayout >
    );
};

export default PostsPage;
