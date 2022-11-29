import Form from 'react-bootstrap/Form';

function RadioExample(props) {
  return (
    <Form>
      {['radio'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              name="groupa"
              type={type}
              id= "5"
              label={props.item}
            />
            <Form.Check
              type={type}
              name="groupa"
              id= "1"
              label={props.item}
            />
            <Form.Check
              type={type}
              name="groupa"
              id= "10"
              label={props.item}
            />
            <Form.Check
              type={type}
              name="groupa"
              id="30"
              label={props.item}
            />
          </div>
        ))}
    </Form>
  );
}

export default RadioExample;