const Dabba = (prop) => {
  const { height, width, color } = prop;
  const styleObj = {
    height: height,
    width: width,
    backgroundColor: color,
    border: "1px solid black",
  };
  return <div style={styleObj}></div>;
};

export default Dabba;
