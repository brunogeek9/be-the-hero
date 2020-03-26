import React, { useState } from 'react'

import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link,useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ondId = localStorage.getItem('ongId');
    const history = useHistory();

    async function createIncident(e) {
        e.preventDefault();
        const data = { title, description, value };
        try {
            await api.post('incidents', data,{
                headers: {
                    Autorization: ondId
                }
            });
            history.push('/perfil');
        } catch (error) {
            alert(`Erro ao cadastrar a incidente`);
        }


    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="zzz" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/perfil">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={createIncident}>
                    <input
                        placeholder="Titulo"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    )
}