import no_content from '../../assets/no_content.png';

const mainContainer = {
  "display": 'flex',
  "flexDirection": 'column',
  "justifyContent": 'center',
  "alignItems": 'center',
};

export const NoContent = () => {
  return (ImageDisplay() );
};

const ImageDisplay = () => (
  (<div style={mainContainer}>
    <img src={no_content} alt="no content" />
    <p style={{ color: "grey" }}>
      Brak danych do wyświetlenia
    </p>
  </div>)
);
