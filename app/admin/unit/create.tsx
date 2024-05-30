import { Create, NumberInput, ReferenceInput, SimpleForm, TextInput, required } from 'react-admin'

const UnitCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <TextInput source='title' validate={[required()]} title='Title'/>
            <TextInput source='description' validate={[required()]} title='Description'/>
            <ReferenceInput source='courseId' reference='courses'/>
            <NumberInput source='order' validate={[required()]} title='Order'/>
        </SimpleForm>
    </Create>
  )
}

export default UnitCreate