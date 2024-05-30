import { Create, NumberInput, ReferenceInput, SimpleForm, TextInput, required } from 'react-admin'

const LessonCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <TextInput source='title' validate={[required()]} title='Title'/>
            <ReferenceInput source='unitId' reference='units'/>
            <NumberInput source='order' validate={[required()]} title='Order'/>
        </SimpleForm>
    </Create>
  )
}

export default LessonCreate