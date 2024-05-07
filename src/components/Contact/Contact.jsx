const Contact = ({ contactItem: { id, name, number }, onDelete }) => {
  return (
    <>
      <div>
        <p>&#128100; {name}</p>
        <p>&#128222; {number}</p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
