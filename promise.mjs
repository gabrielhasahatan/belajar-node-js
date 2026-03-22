import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.coms/todos/1")
  .then((res) => {
    console.log(res.data.title);
  })
  .catch((err) => console.log({ err }));
