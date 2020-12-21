import { useField, ErrorMessage } from 'formik';
import { Label, Input, Field, Error } from '../styles/CheckoutPage.styles'

function ValidationField({ label, ...props }) {

    const [field] = useField(props);

    return (
        <Field>
            <Label htmlFor={props.name} style={{fontSize: '22px'}}>{label}</Label>
            <Input {...field} {...props} />
            <ErrorMessage name={field.name}>{error => <Error>{error}</Error>}</ErrorMessage>
        </Field>
    );
}

export default ValidationField; 