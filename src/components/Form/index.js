import './style.css';
import InputText from '../InputText';
import Dropdown from '../Dropdown';
import Button from '../Button';

const Form = () => {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite seu nome" />
                <InputText label="Cargo" placeholder="Digite seu cargo" />
                <InputText label="Imagens" placeholder="Informe o endereço da imagem" />
                <Dropdown label="Time" items={teams}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;