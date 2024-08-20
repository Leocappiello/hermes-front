export enum FieldTypes {
    string,
    number,
    password,
    email
}

interface Field {
    name: string,
    type: FieldTypes
}

const getInput = (type: FieldTypes) => {
    switch (type) {
        case FieldTypes.email:
            return <input type="email" />
        
        case FieldTypes.number:
            return <input type="number" />

        case FieldTypes.password:
            return <input type="password" />
    
        default:
            return <input />
    }
}

export default function Form({
    // children,
    fields
  }: Readonly<{
    // children: React.ReactNode;
    fields: Field[]
  }>) {

    return(
        <form method="POST">
            {
                fields.map(field => (
                    <div key={field.name}>
                        <p>{field.name}</p>
                        {getInput(field.type)}
                    </div>
                ))
            }
            <button type="submit">Send</button>
        </form>
    )
}