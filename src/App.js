import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    }
  ])

  const [employees, setEmployees] = useState([])

  const addNewEmployee = (employee) => {
    const newEmployee = { ...employee, id: uuidv4(), favorite: false };
    setEmployees([...employees, newEmployee]);
  };

  function deleteEmployee(id) {    
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  function changeTeamColor(newColor, teamId) {
    setTeams(teams.map(team => {
      if (team.id === teamId) {
        team.color = newColor;
      }
      return team;
    }));
  }

  function teamRegister(newTeam) {
    const teamExists = teams.some(team => team.name === newTeam.name);
    if (!teamExists) {
      setTeams([...teams, { ...newTeam, id: uuidv4() }]);
    } else {
      alert('Time já cadastrado!');
    }
  }

  function favoriteEmployee(id) {
    setEmployees(employees.map(employee => {
      if (employee.id === id) {
        employee.favorite = !employee.favorite;
      }
      return employee;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams.map(team => team.name)} 
        onRegister={employee => addNewEmployee(employee)} 
        onTeamRegister={teamRegister}
      />

      {teams.map(team => 
        <Team
          key={team.name}
          name={team.name}
          id={team.id}
          primaryColor={team.color}
          employees={employees.filter(employee => employee.team === team.name)}
          onDelete={deleteEmployee}
          onChangeTeamColor={changeTeamColor}
          onFavorite={favoriteEmployee}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;