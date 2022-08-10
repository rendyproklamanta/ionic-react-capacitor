type Props = {
   name?: string,
   age?: number
}

export default function Test({ name, age }: Props): JSX.Element {
   return (
      <>
         <div className="container">
            <div>{name}</div>
            <div>{age}</div>
         </div>
      </>
   )
}