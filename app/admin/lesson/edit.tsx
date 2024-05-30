import { Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, required } from 'react-admin'

const LessonEdit = () => {
  return (
    <Edit>
        <SimpleForm>
            <NumberInput source='id' validate={[required()]} title='ID'/>
            <TextInput source='title' validate={[required()]} title='Title'/>
            <ReferenceInput source='courseId' reference='courses'/>
            <NumberInput source='order' validate={[required()]} title='Order'/>
        </SimpleForm>
    </Edit>
  )
}

export default LessonEdit