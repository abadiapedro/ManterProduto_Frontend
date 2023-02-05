import {ContatoModel} from "./Contato.model";
import {EnderecoModel} from "./Endereco.model";

export interface FornecedorModel {
  idPessoa?: number,
  dataCadastro?: Date,
  dataAtualizacao?: Date,
  cnpj?: string,
  nomeFantasia?: string,
  inscricaoEstadual?: string,
  inscricaoMunicipal?: string,
  indicadorInscricaoEstadual?: boolean,
  nome?: string,
  contatos?: ContatoModel[],
  status?: boolean
  enderecos?: EnderecoModel[]
}
