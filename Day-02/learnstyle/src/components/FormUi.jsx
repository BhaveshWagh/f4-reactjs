import { FormField, Button, Checkbox, Form } from "semantic-ui-react";

const FormUi = () => (
  <div style={{ width: "200px" }}>
    <Form>
      <FormField>
        <label>First Name</label>
        <input placeholder="First Name" />
      </FormField>
      <FormField>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </FormField>
      <FormField>
        <Checkbox label="I agree to the Terms and Conditions" />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  </div>
);

export default FormUi;
