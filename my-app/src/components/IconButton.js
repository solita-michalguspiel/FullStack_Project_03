import './IconButton.css'

function IconButton({ icon, onClick }) {
    return (
      <button
        className="button-with-icon"
        onClick={onClick}
      >
        {icon}
      </button>
    );
  }

  export default IconButton