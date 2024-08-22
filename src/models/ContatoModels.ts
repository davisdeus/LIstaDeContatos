import * as enums from '../utils/enums/contatosEnums'


class ContatoClass {
  categorias: enums.Categorias
  titulo: string
  telefone: string
  email: string
  id: number

  constructor(
    categorias: enums.Categorias,
    titulo: string,
    telefone: string,
    email: string,
    id: number
  ) {
    this.categorias = categorias
    this.titulo = titulo
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default ContatoClass
