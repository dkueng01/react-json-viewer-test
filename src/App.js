import ReactJson from 'react-json-view'

function App() {
  const my_json_object = {
    name: 'David Küng',
    age: 22,
    children: [
      {name: 'Josef', age: 10},
      {name: 'Josefine', age: 12}
    ],
    isCool: false
  }

  return (
    <div>
      <ReactJson
        src={my_json_object}
        name="test-json-file.json"
        theme="summerfruit"
        enableClipboard={false}
        displayObjectSize={false}
        displayDataTypes={false}
        onEdit={(edit) => {console.log('edit', edit)}}
        onAdd={(add) => {console.log('add', add)}}
        defaultValue="new property"
        onDelete={(del) => {console.log('del', del)}}
        quotesOnKeys={false}
      />
    </div>
  );
}

export default App;
