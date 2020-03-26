import React, { useEffect, useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

export default function Profile() {
    let ongName = localStorage.getItem('ongName');
    let ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    useEffect(() => {
        api.get('profile', {
            headers: {
                autorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [])

    async function deleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    autorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert('erro ao deletar o incidente');
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="a" />
                <span>Bem Vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">
                    Novo incidente
                </Link>
                <button>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong> Caso:</strong>
                        <p>{incident.title}</p>
                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button type="button" onClick={() => deleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}