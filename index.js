const Box = (props) => {
  //  Write your code here.
  const { className, children } = props;
  return (
    <div className={className}>
      <p className="paragraph">{children}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="box1" children="small" />
      <Box className="box2" children="Medium" />
      <Box className="box3" children="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
