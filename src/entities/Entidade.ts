import { Pessoa } from './Pessoa';

export class Entidade {
  Id!: number;
  CriadoDatahora!: Date;
  ModificadoDatahora!: Date;
  Excluido!: boolean;
  CriadoPor?: number;
  Nome!: string;
  Apelido!: string;
  Telefone!: string;
  Foto?: string;
  IdArea?: number;
  IdPontoReferencia?: number;

  PessoaEntidade!: Pessoa;
  PessoaCriadoPor!: Pessoa;
}
