import React, { useState, useEffect } from 'react'
import { useMessage } from '../hooks/messageHook'
import { useHttp } from '../hooks/http.hook'

export const AuthPage = () => {
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {

            const data = await request('/api/auth/register', 'POST', { ...form })
            console.log('Data', data);
        } catch (e) {

        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи Ссилку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div class="input-field">
                                <input placeholder="Ввудите email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label for="email">First Name</label>
                            </div>
                            <div class="input-field">
                                <input placeholder="Ввудите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label for="password">First Name</label>
                            </div>


                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn brown daken-4"
                            style={{ marginRight: 10 }}
                            disabled={loading}
                        >
                            Войти
                        </button>
                        <button
                            className=
                            "btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}