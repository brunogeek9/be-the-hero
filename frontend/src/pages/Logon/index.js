import React, { useState } from 'react'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import api from '../../services/api'
export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function login(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            alert(response.data.name);
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName', response.data.name);
            history.push('perfil');
        } catch (error) {
            alert(`Erro ao logar ...`);
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero" />
                <form onSubmit={login}>
                    <h1>Faça seu logon</h1>
                    <input
                        placeholder="Identificador da ONG"
                        value={id}
                        onChange={e => setId(e.target.value)}

                    />
                    <button type="submit" className="button">Entrar</button>
                    <Link className="back-link" to="/cadastro">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>

                </form>
            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    )
}