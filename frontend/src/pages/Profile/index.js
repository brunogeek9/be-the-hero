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
                    <li>
                        <strong> Caso:</strong>
                        <p>{incident.title}</p>
                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{incident.value}</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}