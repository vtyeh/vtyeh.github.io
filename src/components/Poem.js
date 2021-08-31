export default function Poem({ poem }) {
  return (
    <>
      {poem &&
        poem.map((stanza) => {
          return (
            <p>
              {stanza.stanza.map((line) => (
                <div>{line}</div>
              ))}
            </p>
          );
        })}
    </>
  );
}
