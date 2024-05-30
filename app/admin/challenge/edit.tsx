import { Edit, NumberInput, ReferenceInput, SelectField, SimpleForm, TextInput, required } from 'react-admin'

const ChallengeEdit = () => {
  return (
    <Edit>
        <SimpleForm>
            <TextInput source='question' validate={[required()]} title='Question'/>
            <SelectField source='type' choices={[
              {
                id:"SELECT",
                name:"SELECT"
              },
              {
                id:"ASSIST",
                name:"ASSIST"
              },
            ]}/>
            <ReferenceInput source='lessonId' reference='lessons'/>
            <NumberInput source='order' validate={[required()]} title='Order'/>
        </SimpleForm>
    </Edit>
  )
}

export default ChallengeEdit