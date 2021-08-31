export default function Paragraph({ text }) {
  return <div>{text && text.map((paragraph) => <p>{paragraph}</p>)}</div>;
}
