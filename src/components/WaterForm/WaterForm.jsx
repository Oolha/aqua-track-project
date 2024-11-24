import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const WaterForm = ({ data }) => {
  const [amount, setAmount] = useState(data.amount || '50');

  const initialValues = {
    time: 'test',
    amount: amount,
  };

  const handleSubmit = (formData, actions) => {
  };

  const contactSchema = Yup.object().shape({
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        {data.id ? 'Correct entered data:' : 'Choose a value:'}
        <div>
          Amount of water:
          <div>
            <button onClick={() => setAmount((prev) => prev - 50)}>-</button>
            <div>{amount}</div>
            <button onClick={() => setAmount((prev) => +prev + 50)}>+</button>
          </div>
        </div>
        <label>
          <p>Recording time:</p>
          <Field type="text" name="time" placeholder="Recording time:" />
          <ErrorMessage name="time" component="span" />
        </label>
        <label>
          <p>Enter the value of the water used:</p>
          <Field
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the value of the water used:"
          />
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};

export default WaterForm;
