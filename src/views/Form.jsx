const Form = () => {
  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%' // Ensure the container takes the full width of the parent
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSecdQw-XpDMdONQiVK2qWEH1AloGOnvjWdPQKCM8uBeBGbfNA/viewform?embedded=true"
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)', // Use viewport height minus the top margin to determine the height
          border: 0,
          marginTop: '10px' // Use margin-top to push the iframe down without affecting its height
        }}
      >
        A carregar…
      </iframe>
    </div>
  );
};

export default Form;
