
const PrevArrow = (props) => {

    const { className, style, onClick } = props;

    return (

      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#007bff",
          borderRadius: "50%",
          left: "-30px",
          zIndex: 1,
          padding: "10px",
        }}
        onClick={onClick}
      />

    );
    
};

export default PrevArrow;
