import { Create, SimpleForm, TextInput, required } from 'react-admin'

const CourseCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <TextInput source='title' validate={[required()]} title='Title'/>
            <TextInput source='imageSrc' validate={[required()]} title='Image'/>
        </SimpleForm>
    </Create>
  )
}

export default CourseCreate