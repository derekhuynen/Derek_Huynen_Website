import { renderWithHashtags } from './renderWithHashtags';

// LinkedIn-style content renderer
export const renderLinkedInContent = (text: string) =>
    text.split(/\n\n+/).map((paragraph, pIdx) => (
        <div key={pIdx} style={{ marginBottom: 16 }}>
            {paragraph.split(/\n/).map((line, lIdx) => (
                <div key={lIdx} style={{ display: 'block', marginBottom: 2 }}>{renderWithHashtags(line)}</div>
            ))}
        </div>
    ));
