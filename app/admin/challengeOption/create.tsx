import { BooleanInput, Create, ReferenceInput, SimpleForm, TextInput, required } from 'react-admin'

const ChallengeOptionCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <TextInput source='text' validate={[required()]} title='Text'/>
            <BooleanInput source='correct' title='Correct Option'/>
            <ReferenceInput source='challengeId' reference='challenges'/>
            <TextInput source='imageSrc' title='Image URL'/>
            <TextInput source='audioSrc' title='Audio URL'/>
        </SimpleForm>
    </Create>
  )
}

export default ChallengeOptionCreate