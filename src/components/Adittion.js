const Adittion = (props) => {
    return(
        <p
        onClick={() => {
          props.setCounter(props.counter + 1);
        }}
      >
        +
      </p>
    )
}

export default Adittion;