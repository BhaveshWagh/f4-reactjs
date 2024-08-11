const SayHi = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, age } = props;
  return (
    <div>
      <p>
        Hey My Name is {name}, I&#39;   m {age} year old.
      </p>
    </div>
  );
};

export default SayHi;
