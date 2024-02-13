const Form = () => {
  return (
    <div
      style={{
        overflow: 'hidden',
        paddingTop: '100%', // Maintain the aspect ratio padding
        position: 'relative', // Ensure the container has a relative positioning context
        width: '100%' // Ensure the container takes the full width of the parent
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSecdQw-XpDMdONQiVK2qWEH1AloGOnvjWdPQKCM8uBeBGbfNA/viewform?embedded=true"
        style={{
          position: 'absolute',
          top: '20px', // Pushes the iframe down by 100px
          left: 0,
          width: '100%',
          height: 'calc(100% - 100px)', // Adjust the height to account for the top margin, preventing extra scroll space
          border: 0
        }}
      >
        A carregar…
      </iframe>
    </div>
  );
};

export default Form;
