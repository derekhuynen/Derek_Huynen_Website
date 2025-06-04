// Helper to render hashtags as links in LinkedIn-style content
export const renderWithHashtags = (text: string) => {
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
