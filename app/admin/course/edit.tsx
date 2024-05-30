import { Edit, SimpleForm, TextInput, required } from 'react-admin'

const CourseEdit = () => {
  return (
    <Edit>
        <SimpleForm>
            <TextInput source='id' validate={[required()]} title='ID'/>
            <TextInput source='title' validate={[required()]} title='Title'/>
            <TextInput source='imageSrc' validate={[required()]} title='Image'/>
        </SimpleForm>
    </Edit>
  )
}

export default CourseEdit