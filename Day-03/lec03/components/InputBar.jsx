const InputBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, placeHolderText } = props;
  return (
    <div>
      <input type={type} placeholder={placeHolderText} />
      <h3>Input component</h3>
      <input type="text" placeholder="Enter your email" />
    </div>
  );
};

export default InputBar;
