import { Edit, BooleanInput, ReferenceInput, SimpleForm, TextInput, required } from 'react-admin'

const ChallengeOptionEdit = () => {
  return (
    <Edit>
        <SimpleForm>
            <TextInput source='text' validate={[required()]} title='Text'/>
            <BooleanInput source='correct' title='Correct Option'/>
            <ReferenceInput source='lessonId' reference='lessons'/>
            <TextInput source='imageSrc' title='Image URL'/>
            <TextInput source='audioSrc' title='Audio URL'/>
        </SimpleForm>
    </Edit>
  )
}

export default ChallengeOptionEdit