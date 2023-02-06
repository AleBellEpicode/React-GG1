function ButtonComponent(props) {
  return (
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      rel="noreferrer"
    >
      <button
        style={{
          backgroundColor: props.bg,
          width: 300 + props.width,
          height: 300 + props.height,
          border: props.border,
          borderRadius: props.radius,
        }}
      >
        Il mio {props.name}
      </button>
    </a>
  );
}

export default ButtonComponent;
