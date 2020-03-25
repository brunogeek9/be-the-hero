import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero" />
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Identificador da ONG" />
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