import React, {useEffect} from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
    let ongName = localStorage.getItem('ongName');
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
                <li>
                    <strong> Caso:</strong>
                    <p>Caso Fake</p>
                    <strong>Descrição:</strong>
                    <p>descrição fake</p>

                    <strong>Valor:</strong>
                    <p>0.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong> Caso:</strong>
                    <p>Caso Fake</p>
                    <strong>Descrição:</strong>
                    <p>descrição fake</p>

                    <strong>Valor:</strong>
                    <p>0.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong> Caso:</strong>
                    <p>Caso Fake</p>
                    <strong>Descrição:</strong>
                    <p>descrição fake</p>

                    <strong>Valor:</strong>
                    <p>0.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong> Caso:</strong>
                    <p>Caso Fake</p>
                    <strong>Descrição:</strong>
                    <p>descrição fake</p>

                    <strong>Valor:</strong>
                    <p>0.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}