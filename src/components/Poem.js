export default function Poem({ poem }) {
  return (
    <>
      {poem &&
        poem.map((stanza, index) => {
          return (
            <p key={index}>
              {stanza.stanza.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          );
        })}
    </>
  );
}
