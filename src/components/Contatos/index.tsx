import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { exluir, editar } from '../../store/reducers/contatosSlice'
import ContatoClass from '../../models/ContatoModels'
import { BotaoSalvar } from '../../styles'
import { MdEmail } from 'react-icons/md'
import { PiPhone } from 'react-icons/pi'
import { RxAvatar } from 'react-icons/rx'

type Props = ContatoClass

const Contatos = ({
  categorias,
  titulo: tituloOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id,
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstarEditando] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [telefone, setTelefone] = useState('num')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (tituloOriginal.length > 0) {
      setTitulo(tituloOriginal)
    }
  }, [tituloOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstarEditando(false)

    setTitulo(tituloOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)

  }

  return (
    <S.CtCard>

      <S.CtCardContainer>

        <S.CtCardCategoria categorias={categorias}>
          {categorias}
        </S.CtCardCategoria>

        <S.CtCardContainerInputs>
          <RxAvatar style={{fontSize: '1.5em'} }/>

          <S.CtCardNome
            disabled={!estaEditando}
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          >
            {titulo}
          </S.CtCardNome>
        </S.CtCardContainerInputs>

        <S.CtCardContainerInputs>
          <PiPhone style={{ fontSize: '1.5em' }} />

          <S.CtCardTelefone
            disabled={!estaEditando}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          >
            {telefone}
          </S.CtCardTelefone>
        </S.CtCardContainerInputs>

        <S.CtCardContainerInputs>
          <MdEmail  style={{fontSize: '1.5em'} }/>

          <S.CtCardEmail
            disabled={!estaEditando}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            {email}
          </S.CtCardEmail>
        </S.CtCardContainerInputs>


        <S.CtCardBarraAcoes>
          {estaEditando ? (
            <>
              <BotaoSalvar onClick={() => {
                dispatch(editar({
                  categorias,
                  titulo,
                  telefone,
                  email,
                  id
                }))
              }}>
                Salvar
              </BotaoSalvar>

              <S.BotaoCancelar onClick={cancelarEdicao}>
                Cancelar
              </S.BotaoCancelar>
            </>
          ) : (
            <>
              <S.BotaoEditar onClick={() => setEstarEditando(true)}>
                editar
              </S.BotaoEditar>

              <S.BotaoExcluir onClick={() => dispatch(exluir(id))}>
                Excluir
              </S.BotaoExcluir>
            </>
          )}
        </S.CtCardBarraAcoes>
      </S.CtCardContainer>
    </S.CtCard>
  )
}

export default Contatos

// componentes controlados
// [nome, setNome] = useState('')
// <input value={nome} onchange={e => setNome(e.target.value)} />

// componentes não controlados
// <input onchange={e => setNome(e.target.value)} />
