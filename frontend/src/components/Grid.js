import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";


const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;


export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
    .delete(process.env.REACT_APP_URL_EC2-NAME|process.env.REACT_APP_URL_EC2-IP| process.env.REACT_APP_URL_HTTPS-cname + "/" + id)
    
   // .delete("http://localhost:8800/" + id)

      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
        <Th>Data</Th>
        <Th>Casa</Th>
  
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
                <Td width="20%"> 
                
                {(item.data_nascimento.slice(0,10)).slice(8,10) + '/'} 
              
                {(item.data_nascimento.slice(0,10)).slice(5,7)+ '/'} 

                {(item.data_nascimento.slice(0,10)).slice(0,4)} 


            </Td>
            <Td width="30%">{item.email}</Td>
     
         
        
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;

/*

const data = {
  user: {
    createAt: "2021-09-14T14:00:00.000Z"
  },
  showRockstar: {
    datetime: "2021-10-25T23:30:00.000Z",
    timezone: "Europe/Lisbon"
  }
};

export default function Grid() {
  const [userTimezone, setUserTimezone] = useState("Europe/Lisbon");

  const createAtConverted = utcToZonedTime(data.user.createAt, userTimezone);
  const showConverted = utcToZonedTime(
    data.showRockstar.datetime,
    data.showRockstar.timezone
  );
  return (
    <div className="App">
      <h2>Exibindo data em {userTimezone}</h2>
      <p>{format(createAtConverted, "MM/dd/yy - HH:mm")}</p>

      <button onClick={() => setUserTimezone("America/Los_Angeles")}>
        Alterar para Los Angeles
      </button>
      <button onClick={() => setUserTimezone("America/Sao_Paulo")}>
        Alterar para São Paulo
      </button>

      <h2>
        Não perca o show, será no dia{" "}
        {format(showConverted, "MM/dd/yy - HH:mm")}
      </h2>
      <h2>Exibindo data em {userTimezone}</h2>
      <p>{format(createAtConverted, "MM/dd/yy - HH:mm")}</p>

      <button onClick={() => setUserTimezone("America/Los_Angeles")}>
        Alterar para Los Angeles
      </button>
      <button onClick={() => setUserTimezone("America/Sao_Paulo")}>
        Alterar para São Paulo
      </button>

      <h2>
        Não perca o show, será no dia{" "}
        {format(showConverted, "MM/dd/yy - HH:mm")}
      </h2>
    </div>
  );
};

*/