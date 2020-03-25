import React from 'react'
import './styles.css'
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
                    <input placeholder="sua id" />
                    <button type="submit" className="button">Entrar</button>
                    <FiLogIn size={16} color="#E02041"/>
                    <a href="/register">
                        aaa
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    )
}