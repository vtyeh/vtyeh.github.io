export default function Paragraph({ text }) {
  return (
    <div>
      {text && text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
  );
}
