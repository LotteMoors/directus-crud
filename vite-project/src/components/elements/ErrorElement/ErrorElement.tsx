const ErrorElement = () => {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <h1>Something went wrong!</h1>
      <button style={{width: "12rem"}} onClick={() => location.reload()}>
        Refresh
      </button>
    </div>
  );
};

export default ErrorElement;
