interface NoteProps{
    title: string;
    content: string;
}

export default function NotePreviewMobile({ title, content }: NoteProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}