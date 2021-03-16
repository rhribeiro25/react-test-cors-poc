import axios from "axios";

function App() {
  //   const onClick = () => {
  //     axios
  //       .get(
  //         `http://localhost:9090/api/people/name`,
  //         {
  //           headers: {
  //             Authorization:
  //               "token",
  //           },
  //           params: {
  //             name: "Maria Tavares",
  //           },
  //         }
  //       )
  //       .then((resp) => {
  //         console.log(resp);
  //       });
  //   };

  const onClick = () => {
    const data = {
      name: "Renan Ribeiro",
      gender: "MASCULINO",
      birthDate: "30/12/1990",
      cpf: "07765432185"
      },
    };
    axios
      .post(`http://localhost:9090/api/people`, data, {
        headers: {
          Authorization: "token",
        },
      })
      .then((resp) => {
        console.log(resp);
      });
  };

  return <button onClick={onClick}>Teste</button>;
}

export default App;
