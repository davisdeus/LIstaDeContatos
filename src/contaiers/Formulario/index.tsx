import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'

import * as S from '../../styles/index'
import { Form, Opcao, Opcoes } from './styles'
import * as enums from '../../utils/enums/contatosEnums'
import { cadastrar } from '../../store/reducers/contatosSlice'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [categorias, setCategorias] = useState(enums.Categorias.TRABALHO)

  const cadastraContato = (e:FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        categorias,
        titulo,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <S.MainContainer>
      <S.Titulo>Cadastre um novo contato</S.Titulo>
      <Form onSubmit={cadastraContato}>
        <S.CampoInput
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Digite seu nome completo"
        />
        <S.CampoInput
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="text"
          placeholder="Digite seu numero"
        />
        <S.CampoInput
          value={email}
          onChange={({target}) => setEmail(target.value)}
          type="text"
          placeholder="Digite seu email"
        />

        <Opcoes>

          <h3>Categorias</h3>

          {Object.values(enums.Categorias).map((categorias) => (
            <Opcao key={categorias}>
              <input
                value={categorias}
                type="radio"
                id={categorias}
                name="prioridade"
                onChange={(e) =>
                  setCategorias(e.target.value as enums.Categorias)}

                defaultChecked={categorias === enums.Categorias.TRABALHO}
              />
              <label htmlFor={categorias}>{categorias}</label>
            </Opcao>

          ))}

        </Opcoes>
        <S.BotaoSalvar type='submit'>Cadastrar</S.BotaoSalvar>
      </Form>

    </S.MainContainer>
  )
}


export default Formulario
