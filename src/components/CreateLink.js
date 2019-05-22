// import gql from "graphql-tag";
// import { Mutation } from "react-apollo";

// const GET_TODOS = gql`
//   query GetTodos {
//     todos
//   }
// `;

// const AddTodo = () => {
//     let input;

//     return (
//         <Mutation
//             mutation={ADD_TODO}
//             update={(cache, { data: { addTodo } }) => {
//                 const { todos } = cache.readQuery({ query: GET_TODOS });
//                 cache.writeQuery({
//                     query: GET_TODOS,
//                     data: { todos: todos.concat([addTodo]) },
//                 });
//             }}
//         >
//             {addTodo => (
//                 <div>
//                     <form
//                         onSubmit={e => {
//                             e.preventDefault();
//                             addTodo({ variables: { type: input.value } });
//                             input.value = "";
//                         }}
//                     >
//                         <input
//                             ref={node => {
//                                 input = node;
//                             }}
//                         />
//                         <button type="submit">Add Todo</button>
//                     </form>
//                 </div>
//             )}
//         </Mutation>
//     );
// };

// export default AddTodo;