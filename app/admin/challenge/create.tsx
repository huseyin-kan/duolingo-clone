import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from 'react-admin'

const ChallengeCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <TextInput source='question' validate={[required()]} title='Question'/>
            <SelectInput source='type' choices={[
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
    </Create>
  )
}

export default ChallengeCreate